/*jshint bitwise: false */

var RECOL = RECOL || {};

/** 柱パズルモデルクラス */
RECOL.StelaiPuzzle = ( function () {
	"use strict";

	// consts
	var /** 叡智の瞳の行列の逆行列 */
		_SOLUTION_MATRIX = [
			[ 1, 0, 1, 0, 0, 1, 1, 1, 0 ],
			[ 0, 0, 0, 0, 1, 0, 1, 1, 1 ],
			[ 1, 0, 1, 1, 0, 0, 0, 1, 1 ],
			[ 0, 0, 1, 0, 1, 1, 0, 0, 1 ],
			[ 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
			[ 1, 0, 0, 1, 1, 0, 1, 0, 0 ],
			[ 1, 1, 0, 0, 0, 1, 1, 0, 1 ],
			[ 1, 1, 1, 0, 1, 0, 0, 0, 0 ],
			[ 0, 1, 1, 1, 0, 0, 1, 0, 1 ]
		],
		/** 柱の状態定数 */
		STELA_STATE = {
			OFF: 0,
			ON: 1
		},
		/**
		 * 行列のサイズ
		 * パズルのサイズは固定のため定数
		 */
		VECTOR_SIZE = 9,

		// fields
		/** 全柱の現状 */
		_stelai = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],

		// methods
		/**
		 * 現在の柱の状態から解を求める
		 * @return array 解の叡智の瞳
		 */
		getSolution = function () {
			var COMPLEMENT_STELAI = ( function () { // _stelai の補数
				var cs = [];

				for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
					cs[ i ] = _stelai[ i ] ^ 1;
				}

				return cs;
			}() ),
				product = []; // 解答

			// @memo やっていることは 1x9 と 9x9 行列の積
			for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
				product[ i ] = 0;
				for ( var j = 0; j < VECTOR_SIZE; j += 1 ) {
					product[ i ] += COMPLEMENT_STELAI[ j ] * _SOLUTION_MATRIX[ i ][ j ];
				}
				product[ i ] %= 2;
			}

			return product;
		},
		/**
		 * 呼び出し時点の全柱の状態を返す
		 * 配列で管理されているため配列をクローンしたものを返す
		 * @return array 柱の現状
		 */
		getStelai = function () {
			return ( function () {
				var stelai = [];

				$.each( _stelai, function () {
					stelai.push( this );
				} );

				return stelai;
			}() );
		},
		/**
		 * 特定の柱の状態をセットする。
		 * 柱の状態に合わせて UI も操作する。
		 * @param position 操作する柱
		 * @param state セットする柱の状態
		 */
		setStela = function ( position, state ) {
			// @todo やはりこのクラス (StelaiPuzzle) から UI 操作は外すべきか？
			_stelai[ position ] = state;
			if ( state ) {
				$( "#s" + position ).addClass( "on" );
			} else {
				$( "#s" + position ).removeClass( "on" );
			}
		},
		/**
		 * 特定の柱を操作する
		 * @param position 操作する柱
		 */
		invertStela = function ( position ) {
			setStela( position, _stelai[ position ] ^ 1 );
		};

	return {
		STELA_STATE: STELA_STATE,
		VECTOR_SIZE: VECTOR_SIZE,

		getSolution: getSolution,
		getStelai: getStelai,
		invertStela: invertStela,
		setStela: setStela
	};
}() );

/** UI 操作クラス */
RECOL.PuzzleState = ( function () {
	"use strict";

	var // dependence
		StelaiPuzzle = RECOL.StelaiPuzzle,
		/**
		 * 解答の表示の有無
		 * true:  表示
		 * false: 非表示（初期状態）
		 */
		_visibleSolution = false,
		/**
		  * 柱の初期状態
		  * [解いてみる] のときに使用。、
		  */
		_initialStelai = [],

		// private method
		/** 現在の柱の状態から解答を UI に表示する */
		_displaySolution = function () {
			$( "#stelai span" ).removeClass( "answer" );
			$.each( StelaiPuzzle.getSolution(), function ( stela, light ) {
				if ( light ) {
					$( "#s" + stela ).addClass( "answer" );
				}
			} );
		},
		/**
		 * 解答の表示/非表示機能を持った関数を生成する。
		 * @param procedure 本処理
		 * @return function 解答表示/非表示機能を持った関数
		 */
		_withViewSolutionOption = function ( procedure ) {
			return function () {
				procedure( $( this ) );
				if ( _visibleSolution ) {
					_displaySolution();
				}
			};
		},
		_checkSolved = function () {
			if ( $( "#stelai .on" ).length === StelaiPuzzle.VECTOR_SIZE ) {
				$( "#stelai" ).addClass( "solved" );
			} else {
				$( "#stelai" ).removeClass( "solved" );
			}
		},
		/** 全ての柱に OFF をセットする */
		_clearStelai = function () {
			for ( var p = 0; p < StelaiPuzzle.VECTOR_SIZE; p += 1 ) {
				StelaiPuzzle.setStela( p, StelaiPuzzle.STELA_STATE.OFF );
			}
			$( "#stelai" ).removeClass( "solved" );
		},
		/**
		 * 柱を押す動作を行う（色反転）
		 * @param position 柱番号
		 */
		_invertStela = function ( position ) {
			StelaiPuzzle.invertStela( position );
		},
		/** [問題を入力] の動作 */
		_inputPuzzle = _withViewSolutionOption( function ( $this ) {
			_invertStela( $this.data( "stela" ) );
		} ),
		/** [解いてみる] の動作 */
		_outPuzzle = _withViewSolutionOption( function ( $this ) {
			var position = $this.data( "stela" ),
				m = Math.floor( position / 3 ),
				n = position % 3,
				effectStelai = ( function () {
					var eps = [],
						checkBounds = function ( r, c ) {
							if ( ( 0 <= r && r < 3 ) &&
								( 0 <= c && c < 3 ) ) {
								eps.push( r * 3 + c );
							}
						};

					checkBounds( m - 1, n );
					checkBounds( m, n - 1 );
					checkBounds( m, n );
					checkBounds( m, n + 1 );
					checkBounds( m + 1, n );

					return eps;
				}() );

			$.each( effectStelai, function () {
				_invertStela( this );
			} );

			_checkSolved();
		} ),

		// public method
		/** [問題を入力] または [解いてみる] を切り替えた時の動作 */
		changeState = function () {
			var bindEvent = null,
				$this = $( this );

			if ( $this.data( "mode" ) === "input" ) { // out -> input
				bindEvent = _inputPuzzle;

				$( "#stelai" )
					.removeClass( "solved" );
			} else { // input -> out
				_initialStelai = StelaiPuzzle.getStelai();

				bindEvent = _outPuzzle;

				_checkSolved();
			}

			$( "#puzzle-mode > span" )
				.removeClass( "active" );

			$this
				.parent()
				.addClass( "active" );

			$( "#stelai" )
				.off( "click", "span" )
				.on( "click", "span", bindEvent );
		},
		/** [問題生成] を押した時の動作 */
		makePuzzle = _withViewSolutionOption( function () {
			var puzzle = [ Math.floor( Math.random() * 8 ), 0 ];

			do {
				puzzle[ 1 ] = Math.floor( Math.random() * 8 );
			} while ( puzzle[ 0 ] === puzzle[ 1 ] );

			$( "#puzzle-mode [data-mode=\"out\"]" )
				.click();

			_clearStelai();
			StelaiPuzzle
				.setStela( puzzle[ 0 ], StelaiPuzzle.STELA_STATE.ON );
			StelaiPuzzle
				.setStela( puzzle[ 1 ], StelaiPuzzle.STELA_STATE.ON );

			_initialStelai = StelaiPuzzle.getStelai();
		} ),
		/** [リセット] を押した時の動作 */
		resetStelai = _withViewSolutionOption( function () {
			// @todo 状態による分岐あり
			if ( $( "#puzzle-mode [data-mode=\"input\"]" ).parent().hasClass( "active" ) ) {
				_clearStelai();
			} else {
				$.each( _initialStelai, function ( stela, state ) {
					StelaiPuzzle.setStela( stela, state );
				} );
				_checkSolved();
			}
		} ),
		/** [答えの表示] を押した直後の動作 */
		viewSolution = function () {
			var $elem = $( "#view-solution > span" );

			_visibleSolution = !$elem.hasClass( "active" );

			if ( _visibleSolution ) {
				_displaySolution();
				$elem
					.addClass( "active" );
			} else {
				$( "#stelai span" )
					.removeClass( "answer" );
				$elem
					.removeClass( "active" );
			}
		};

	return {
		changeState: changeState,
		makePuzzle: makePuzzle,
		resetStelai: resetStelai,
		viewSolution: viewSolution
	};
}() );

/** boot */
( function () {
	"use strict";

	var PuzzleState = RECOL.PuzzleState;

	$( "#controles" )
		.on( "click", "#view-solution > span > span", PuzzleState.viewSolution )
		.on( "click", "#puzzle-mode > span > span", PuzzleState.changeState )
		.on( "click", "[data-controle=\"make\"]", PuzzleState.makePuzzle )
		.on( "click", "[data-controle=\"reset\"]", PuzzleState.resetStelai );

	$( "#puzzle-mode [data-mode=\"input\"]" )
		.click();
}() );
