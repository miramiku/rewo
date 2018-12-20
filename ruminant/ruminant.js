/** @global @namespace */
var RUMINANT = {};

/** @class 各クラスをまたいで利用する定数・静的変数および静的メソッド */
RUMINANT.FormationStaticItems = ( function () {
	"use strict";

	var
		/** @const {Object} 数値範囲定義用オブジェクト */
		_bounds = {
			values: { initial: 1, floor: 1, ceil: 99 },
			parameters: { initial: 0, floor: -999, ceil: 999 }
		},
		/** @const {Object} 探索先ダンジョンデータ */
		_dungeons = {
			"カリグラーゼ下水道": [ 5, "02:00:00", 2100, [ 1, 0, 0, 2, 0, 0, 0, 0, 0, 1 ], "Caligrase Sewers" ],
			"デルティス大蔵室": [ 5, "05:00:00", 4200, [ 7, 0, 0, 0, 0, 0, 0, 3, 0, 2 ], "Deltis Keep" ],
			"黄龍の神殿跡": [ 5, "11:00:00", 6300, [ 8, 20, 0, 0, 0, 4, 0, 0, 0, 0 ], "Golden Dragon Ruins" ],
			"アリア川貯水窟": [ 5, "08:00:00", 10400, [ 12, 0, 0, 3, 0, 0, 0, 2, 0, 5 ], "Aria Reservoir" ],
			"忘却の寺院": [ 5, "14:00:00", 12500, [ 14, 0, 10, 0, 0, 3, 0, 0, 5, 0 ], "Temple of Oblivion" ],
			"旧地下水路": [ 5, "17:00:00", 14500, [ 17, 60, 0, 3, 0, 0, 4, 0, 0, 0 ], "Old Sewers" ],
			"降偉の祭儀場跡": [ 5, "09:00:00", 16500, [ 21, 0, 0, 0, 5, 0, 0, 3, 7, 0 ], "Descension Ruins" ],
			"ロサワルド水没砦": [ 5, "12:00:00", 18600, [ 22, 80, 0, 5, 0, 0, 0, 0, 3, 0 ], "Roswald Deep Fort" ],
			"荒廃の廓": [ 5, "03:00:00", 21000, [ 24, 0, 30, 3, 0, 9, 0, 0, 0, 0 ], "Ruined Chamber" ],
			"１３号施設": [ 5, "06:00:00", 23000, [ 25, 0, 15, 6, 9, 0, 0, 0, 0, 0 ], "Facility 13" ],
			"暗澹たる円卓": [ 5, "15:00:00", 25000, [ 27, 40, 0, 0, 12, 7, 0, 0, 0, 0 ], "Dark Roundtable" ],
			"サンジェント遺跡": [ 5, "18:00:00", 27000, [ 30, 100, 0, 0, 0, 0, 3, 0, 0, 6 ], "Sungent Ruins" ],
			"ロットハーディーの廃墟": [ 5, "04:00:00", 29000, [ 35, 0, 0, 0, 5, 0, 14, 8, 0, 0 ], "The Ruins of Lot Hardy" ],
			"昏き揺らぎの地": [ 5, "07:00:00", 31000, [ 40, 40, 0, 0, 0, 14, 0, 9, 0, 0 ], "The Lands of Fluctuation" ],
			"バビリム空中庭園": [ 5, "16:00:00", 33000, [ 45, 0, 75, 0, 9, 0, 5, 0, 0, 0 ], "The Hanging Gardens of Babylim" ],
			"狂気の館": [ 5, "10:00:00", 25200, [ 53, 50, 0, 0, 0, 0, 0, 17, 9, 0 ], "Horror Palace" ],
			"深淵の迷宮": [ 5, "13:00:00", 37300, [ 60, 40, 0, 17, 0, 5, 9, 0, 0, 0 ], "The Labyrinth of the Abyss" ],
			"シャーデの迷宮": [ 5, "19:00:00", 40000, [ 65, 180, 0, 0, 0, 2, 6, 0, 11, 0 ], "The Labyrinth of Sade" ],
			"カオカ・パラージ遺跡": [ 5, "00:10:00", 350, [ 5, 0, 0, 0, 0, 1, 0, 0, 0, 2 ], "Kaoka Parrej Ruins" ],
			"チコル城址": [ 5, "00:15:00", 8300, [ 11, 0, 20, 0, 0, 0, 0, 0, 3, 0 ], "Chikor Castle Site" ],
			"アッザームの試練場": [ 5, "18:00:00", 4200, [ 50, 0, 25, 0, 0, 9, 17, 0, 0, 0 ], "Trial of Azarm" ],
			"夢幻の試練場": [ 5, "00:50:00", 870, [ 5, 0, 30, 9, 0, 0, 0, 0, 0, 0 ], "Trial of Fantasy" ],
			"愛欲と淫虐の館": [ 5, "00:25:00", 1400, [ 20, 0, 35, 0, 0, 4, 0, 12, 0, 0 ], "House of Savage Lust" ],
			"蒼の洞窟": [ 5, "00:30:00", 1830, [ 25, 0, 0, 5, 0, 0, 0, 0, 9, 2 ], "The Cave of Blue" ],
			"混沌のシュトラーゼ": [ 5, "00:35:00", 1210, [ 30, 70, 60, 0, 0, 0, 0, 0, 0, 4 ], "Chaos Strase" ],
			"ミスカトニック大学分校": [ 5, "00:40:00", 1000, [ 45, 0, 40, 0, 0, 0, 0, 15, 5, 0 ], "Miskatonic Academy" ],
			"イルヴァンボーレ鉱山": [ 5, "00:45:00", 2800, [ 50, 90, 0, 0, 17, 0, 5, 0, 0, 0 ], "The Mines of Illvanvole" ],
			"狂王の試練場": [ 5, "00:20:00", 700, [ 55, 20, 0, 0, 0, 0, 0, 9, 17, 0 ], "Proving Grounds of Mad Overlord" ],
			"ユークリッドの無限回廊": [ 5, "01:30:00", 12500, [ 15, 0, 0, 0, 5, 0, 15, 0, 0, 9 ], "Euclid's Infinite Corridors" ]
		},
		/** @const {Object} 探索先ダンジョンデータ用インデックス */
		_dungeonIndex = {
			"count": 0,
			"time": 1,
			"expenses": 2,
			"parameters": 3,
			"name": 4
		},
		/** @const {Number} fade のアニメーション時間 */
		_fadeDuration = 100,
		/** @const {Array} パラメータの集合またはベクトル */
		_parameters = [ "hp", "mp", "str", "vit", "dex", "agi", "int", "pie", "luk" ],
		/** @const {Object} パートナーキーと表示名の対応 */
		_parameterCorresponding = {
			"name": "パートナー名",
			"level": "レベル",
			"cp": "CP",
			"hp": "HP", "str": "STR", "dex": "DEX", "int": "INT", "luk": "LUK",
			"mp": "MP", "vit": "VIT", "agi": "AGI", "pie": "PIE"
		},
		/** @const {Object} ソウルパートナーのパラメータデータ構造用のインデックス */
		_parameterIndex = {
			level: 0,
			hp: 1, str: 3, dex: 5, int: 7, luk: 9,
			mp: 2, vit: 4, agi: 6, pie: 8,
			cp: 10,
			resting: 11,
			fixation: 12
		},
		/** @const {Number} ソウルパートナーのステータス用番兵 */
		_statusSentry = _parameterIndex.luk,
		/** @const {tooltipster} tooltipsiter のデフォルトオプション */
		_tooltipsterDefault = {
			trigger: "custom",
			animation: "swing",
			timer: 3000,
			theme: "tooltipster-error",
			position: "right"
		},
		/** @const {tooltipster} 基礎データ入力エラー時のヒント */
		_valueError = { content: "1～99 までの数値（半角）しか許されません" },

		/** @static {Object}
		 * 疑似静的変数実現用オブジェクト
		 *     beforeFormations 前回の編成数
		 *     countMax         ソウルパートナー編成上限数
		 *     cpLimit          CP 上限（ユーザーの上限）
		 *     fixCount         固定パートナー数
		 +	   limit            表示数上限
		 *     isCountFix       編成数固定オプション
		 *     objective        探索ダンジョン
		 *     partners         ソウルパートナーリスト
		 *     standbys         探索出発可能パートナーリスト
		 */
		_statics = {
			beforForamtions: 0,
			countMax: 5,
			cpLimit: 1,
			fixCount: 0,
			limit: 50,
			isCountFix: false,
			objective: {},
			partners: {},
			standbys: {}
		},

		/** @static @method
		 * yes/no 返答型ダイアログ
		 * @param {function} seq      OK を押されたときの処理
		 * @param {String}   [text]   ダイアログに表示するテキスト (HTML)
		 * @param {String}   [ok]     OK のカスタムテキスト
		 * @param {String}   [cancel] CANCEL のカスタムテキスト
		 */
		_confirm = function ( seq, text, ok, cancel ) {
			var $content = $( "#dialogue" ),
				$dialoguePane = $( "#dialogue-pane, #dialogue" );

			$content
				.addClass( "confirm" )
				.html( "<div id=\"dialogue-title\"><span id=\"dialogue-title-text\">確認したいことがあります！</span><span id=\"dialogue-close\" class=\"dialogue-button\">close</span></div><div id=\"dialogue-text\">" + ( text || "" ) + "</div><div id=\"dialogue-buttons\"><span id=\"dialogue-ok\" class=\"dialogue-button\">" + ( ok || "はい" ) + "</span><span id=\"dialogue-cancel\" class=\"dialogue-button\">" + ( cancel || "いいえ" ) + "</span></div>" )
				.css( {
					marginTop: ( $content.outerHeight() / 2 ) * -1,
					marginLeft: ( $content.outerWidth() / 2 ) * -1
				} );

			$( "#dialogue-close, #dialogue-cancel, #dialogue-pane" )
				.one( "click", function () {
					$dialoguePane.fadeOut( _fadeDuration );
					$content.removeClass( "confirm" );
				} );
			$( "#dialogue-ok" )
				.one( "click", function () {
					$dialoguePane.fadeOut( _fadeDuration );
					$content.removeClass( "confirm" );
					seq();
				} );

			$dialoguePane.fadeIn( _fadeDuration );
		},
		/** @static @method エンターを捕捉するとフォーカスを外すイベント */
		_enterToBlur = function ( e ) {
			if ( ( e.which ? e.which : e.keyCode ) === 13 ) {
				$( this ).blur();
			}
		},
		/** @static @method
		 * 3桁コンマ区切りの数値（文字列）を取得する
		 * @param  {Number} value 桁区切りをする数値
		 * @return {String} 桁区切りを施した文字列
		 */
		_digitGrouping = function ( number ) {
			return number.toString().replace( /(\d)(?=(\d\d\d)+$)/g, "$1," );
		},
		/** @static @method
		 * 数値の正負を判定し対応した文字列を返す
		 * @param  {Number} value 検査する数値
		 * @return {String} 符号に対応した文字列
		 */
		_getSign = function ( value ) {
			switch ( ( function ( i ) { return i < 0 ? -1 : 0 < i ? 1 : 0; }( value ) ) ) {
				case -1:
					return "negative";
				case 0:
					return "zero";
				case 1:
					return "positive";
				default:
					return undefined;
			}
		},
		/** @static @method
		 * 与えられた値が与えられた範囲内に収まっているか判定する
		 * @param  {value}   value  検査する値
		 * @param  {Object}  bounds 下限・上限オブジェクト
		 * @return {boolean} 判定結果。true -> 範囲内。
		 */
		_inBounds = function ( value, bounds ) {
			return bounds.floor <= value && value <= bounds.ceil;
		};

	return {
		BOUNDS: _bounds,
		FADE_DURATION: _fadeDuration,
		PARAMETERS: _parameters,
		PARAMETER_CORRESPONDING: _parameterCorresponding,
		PARAMETER_INDEX: _parameterIndex,
		STATUS_SENTRY: _statusSentry,
		DUNGEONS: _dungeons,
		DUNGEON_INDEX: _dungeonIndex,
		VALUE_ERROR: _valueError,
		TOOLTIPSTER_DEFAULT: _tooltipsterDefault,

		statics: _statics,

		confirm: _confirm,
		enterToBlur: _enterToBlur,
		digitGrouping: _digitGrouping,
		getSign: _getSign,
		inBounds: _inBounds
	};
}() );

/** @class パートナー管理タブの操作 */
RUMINANT.ManagementOfSoulPartners = ( function () {
	"use strict";

	var // depending on common consts
		BOUNDS = RUMINANT.FormationStaticItems.BOUNDS,
		FADE_DURATION = RUMINANT.FormationStaticItems.FADE_DURATION,
		PARAMETERS = RUMINANT.FormationStaticItems.PARAMETERS,
		PARAMETER_INDEX = RUMINANT.FormationStaticItems.PARAMETER_INDEX,
		PARAMETER_CORRESPONDING
			= RUMINANT.FormationStaticItems.PARAMETER_CORRESPONDING,

		// depending on static methods
		confirm = RUMINANT.FormationStaticItems.confirm,
		enterToBlur = RUMINANT.FormationStaticItems.enterToBlur,
		getSign = RUMINANT.FormationStaticItems.getSign,
		inBounds = RUMINANT.FormationStaticItems.inBounds,

		// depending on static variables
		statics = RUMINANT.FormationStaticItems.statics,

		/** @const {tooltipster} パートナー名入力時のヒント */
		_NAME_HINT = { content: "登録済のパートナー名と重複しちゃいけません", theme: "tooltipster-help" },
		/** @const {tooltipster} パートナー名衝突時のヒント */
		_NAME_DUPLICATION = { content: "登録済のパートナー名と重複はだめー" },
		/** @const {tooltipster} 基礎データ入力エラー時のヒント */
		VALUE_ERROR = RUMINANT.FormationStaticItems.VALUE_ERROR,
		/** @const {tooltipster} ステータス入力エラー時のヒント */
		_STATUS_ERROR = { content: "-999～999 までの数値（半角）しかダメです" },
		/** @const {tooltipster} 「除外」ボタンにおけるパートナー固定設定と衝突時のヒント */
		_RESTING_CONFLICT = { content: "固定させているパートナーは除外できません…", timer: 0 },
		/** @const {tooltipster} 「固定」ボタンにおけるパートナー休息設定と衝突時のヒント */
		_FIXATION_CONFLICT = { content: "除外させているパートナーは固定できません…", timer: 0 },
		/** @const {tooltipster} パートナー編成上限に達しているときの「固定」ボタンヒント */
		_FIXATION_OVER = { content: "編成数上限を超えてパートナーを固定できません…", timer: 0 },
		/** @const {tooltipster} ソートオプション用ヒント */
		_SORT_OPTION_HINT = {
			content: "「除外・固定を分ける」に設定すると<br>固定 → そのほか → 除外 の順に集まります",
			contentAsHTML: true,
			trigger: "hover",
			position: "top",
			theme: "tooltipster-help",
			timer: 0
		},
		/** @const {tooltipster} ファイル入力ボタン用ヒント */
		_FILE_IMPORT_HINT = {
			content: "ファイルを読み込んでパートナーデータを上書きします<br>現在表示されているパートナーデータは消えてしまいます",
			contentAsHTML: true,
			position: "bottom",
			timer: 0,
			theme: "tooltipster-help",
			trigger: "hover"
		},
		/** @const {tooltipster} ファイル出力ボタン用ヒント */
		_FILE_EXPORT_HINT = {
			content: "パートナーデータを現状のままファイル出力します",
			position: "bottom",
			theme: "tooltipster-help",
			timer: 0,
			trigger: "hover"
		},

		/** @const {String} パートナー名未入力時の表示テキスト */
		_INITIAL_PARTNER_NAME_TEXT = "クリックしてパートナー名を入力",
		/** @const {String} 「追加」ボタン利用可能になる条件テキスト */
		_PARTNER_BEFORE_INPUT_HINT = "パートナー名を入力するまで追加できません",
		/** @const {String} 「追加」ボタン利用後用ヒント */
		_PARTNER_AFTER_ENTRY_HINT = "追加後はいつでもデータを編集できます",

		/** @const {String} 除外（休息中）パートナー識別用アイコン*/
		_RESTING_ICON = "<span class=\"partner-resting\">(人-ω-)｡o </span>",
		/** @const {String} 固定パートナー識別用アイコン*/
		//		_FIXATION_ICON    = "<span class=\"partner-fixation\"> </span>",
		_FIXATION_ICON = "<span class=\"partner-fixation\">&#xf041; </span>",

		/** @const {Object} ソート用ラベル */
		_sortLabels = {
			keyLabel: "基準：",
			lexicographic: { asc: "順序：A → Z", desc: "順序：Z → A" },
			numerical: { asc: "順序：1 → 9", desc: "順序：9 → 1" },
			divide: "除外・固定を分ける",
			individe: "除外・固定を分けない"
		},

		/** @const {String} jQuery オブジェクト生成時のパートナー入力カード識別用文字列*/
		_ENTRY_IDENTIFIER = "#entry-partner .",
		/** @const {jQuery} パートナー入力カード*/
		_$entryPartner = $( "#entry-partner" ),
		/** @const {jQuery} パートナーリスト*/
		_$patners = $( "#partners" ),
		/** @const {jQuery} パートナー入力カードとパートナーリスト両方*/
		_$both = $( "#entry-partner, #partners" ),

		/** @static @type {Object} ソートオプション */
		_sortOptions = {},
		/** @static @type {?String} 現在編集中の項目 */
		_currentEdit = null,

		// utils
		/** @public @method
		 * 探索出発可能パートナーリストを作成する
		 * @return {Object} 探索出発可能パートナーリスト
		 */
		_setStandbys = function () {
			var fixation = [],
				second = [];

			$.each( statics.partners, function ( key ) {
				if ( !this[ PARAMETER_INDEX.resting ] ) {
					if ( this[ PARAMETER_INDEX.fixation ] ) {
						fixation.push( key );
					} else {
						second.push( key );
					}
				}
			} );

			return {
				fixation: fixation,
				second: second
			};
		},

		// data manipulations
		/** @private @method
		 * パートナー名を差し替えてブラウザにパートナーの状態を保存する
		 * @param {String} currentName 現在のパートナー名
		 * @param {String} newName     差し替えるパートナー名
		 */
		_updatePartnerName = function ( currentName, newName ) {
			var parameters = statics.partners[ currentName ].concat();

			delete statics.partners[ currentName ];
			statics.partners[ newName ] = parameters;

			localStorage.setItem( "partners", JSON.stringify( statics.partners ) );
		},
		/** @private @method
		 * パートナーのパラメータを変更してブラウザにパートナーの状態を保存する
		 * @param {String} partner   パラメータを変更するパートナー名
		 * @param {String} parameter 変更するパラメータキー
		 * @param {*}      value     更新する値
		 */
		_updateParameter = function ( partner, parameter, value ) {
			statics.partners[ partner ][ PARAMETER_INDEX[ parameter ] ] = value;

			localStorage.setItem( "partners", JSON.stringify( statics.partners ) );
		},
		/** @private @method 入力されたパートナー情報の追加 */
		_entryPartner = function () {
			var parameters = [],
				partner = $( _ENTRY_IDENTIFIER + "partner-name" ).text();

			parameters.push( parseInt( $( _ENTRY_IDENTIFIER + "partner-level" ).text(), 10 ) );
			$.each( PARAMETERS, function () {
				parameters.push( parseInt( $( _ENTRY_IDENTIFIER + "partner-" + this ).text(), 10 ) );
			} );
			parameters.push( parseInt( $( _ENTRY_IDENTIFIER + "partner-cp" ).text(), 10 ) );
			parameters.push( $( _ENTRY_IDENTIFIER + "button-resting" ).hasClass( "active" ) );
			parameters.push( $( _ENTRY_IDENTIFIER + "button-fixation" ).hasClass( "active" ) );

			statics.partners[ partner ] = parameters;

			localStorage.setItem( "partners", JSON.stringify( statics.partners ) );
		},
		/** @private @method
		 * パートナーを削除（解放）しブラウザにパートナーの状態を保存する
		 * @param {String} partner 解放するパートナー名
		 */
		_releasePartner = function ( partner ) {
			statics.fixCount -= statics.partners[ partner ][ PARAMETER_INDEX.cp ] ? 1 : 0;
			delete statics.partners[ partner ];

			localStorage.setItem( "partners", JSON.stringify( statics.partners ) );
		},
		/** @private @method
		 * ソートオプションの設定とローカルストレージに保存
		 * @param {String} key   ソートオプションの項目
		 * @param {*}      value ソートオプションの値
		 */
		_setSortOptions = function ( key, value ) {
			_sortOptions[ key ] = value;
			localStorage.setItem( "sortOptions", JSON.stringify( _sortOptions ) );
		},

		// relevant to display partner list
		/** @private @method
		 * ソウルパートナーのカードを生成する
		 * @param  {String} partner パートナー名
		 * @param  {Array}  data    パートナーのデータ
		 * @return {String} パートナーカードの HTML
		 */
		_makePartnerCard = function ( partner, data ) {
			var cp = data[ PARAMETER_INDEX.cp ],
				isResting = data[ PARAMETER_INDEX.resting ],
				isFixation = data[ PARAMETER_INDEX.fixation ],

				p = function ( status ) {
					var param = data[ PARAMETER_INDEX[ status.toLowerCase() ] ];
					return "<th>" + status + "</th><td><span class=\"partner-" + status.toLowerCase() + " editable " + getSign( param ) + "\">" + param + "</span></td>";
				};

			return "<div class=\"partner-card" + ( isResting ? " resting" : "" ) + ( isFixation ? " fixation" : "" ) + "\" data-partner=\"" + partner + "\">" +
				"<div class=\"partner-container\">" +
				"<span class=\"partner-name-container editable\">" +
				( isFixation ? _FIXATION_ICON : "" ) + ( isResting ? _RESTING_ICON : "" ) +
				"<span class=\"partner-name\">" + partner + "</span>" +
				"</span>" +
				"</div>" +
				"<div class=\"fundamental-data\">" +
				"<div class=\"value-field\"><span class=\"label\">レベル</span><span class=\"partner-level editable\">" + data[ PARAMETER_INDEX.level ] + "</span></div>" +
				"<div class=\"value-field\"><span class=\"label\">CP</span><span class=\"partner-cp editable\">" + cp + "</span></div>" +
				"</div>" +
				"<table class=\"parameters-list\"><tbody><tr>" +
				p( "HP" ) + p( "STR" ) + p( "DEX" ) + p( "INT" ) + p( "LUK" ) +
				"</tr><tr>" +
				p( "MP" ) + p( "VIT" ) + p( "AGI" ) + p( "PIE" ) +
				"<th></th><td></td></tr></tbody></table>" +
				"<div class=\"toolbox\">" +
				"<span class=\"tool-button button-resting" + ( isResting ? " active" : "" ) + "\">除外</span>" +
				"<span class=\"tool-button button-fixation" + ( isFixation ? " active" : "" ) + "\">固定</span>" +
				"<span class=\"tool-button button-release\">削除</span>" +
				"</div>" +
				"</div>";
		},
		/** @private @method
		 * 現在のソートオプションの設定からパートナー順序を生成する
		 * @return {Array} 整列済みパートナー順序
		 */
		_getOrderedPartners = function () {
			var compare = function () {
				var order = _sortOptions.asc ? 1 : -1,
					key = _sortOptions.key;

				if ( key === "name" ) {
					return function ( a, b ) {
						return ( a > b ? 1 :
							a < b ? -1 :
								0 ) * order;
					};
				} else {
					return function ( a, b ) {
						return ( statics.partners[ a ][ PARAMETER_INDEX[ key ] ] > statics.partners[ b ][ PARAMETER_INDEX[ key ] ] ? 1 :
							statics.partners[ a ][ PARAMETER_INDEX[ key ] ] < statics.partners[ b ][ PARAMETER_INDEX[ key ] ] ? -1 :
								0 ) * order;
					};
				}
			},
				divideStateComparison = function () {
					var restings = [],
						fixations = [],
						others = [];

					$.each( statics.partners, function ( partner ) {
						if ( this[ PARAMETER_INDEX.fixation ] ) {
							fixations.push( partner );
						} else if ( this[ PARAMETER_INDEX.resting ] ) {
							restings.push( partner );
						} else {
							others.push( partner );
						}
					} );

					fixations.sort( compare() );
					others.sort( compare() );
					restings.sort( compare() );

					return fixations.concat( others ).concat( restings );
				},
				anyStateComparison = function () {
					var partners = [];

					$.each( statics.partners, function ( partner ) {
						partners.push( partner );
					} );

					return partners.sort( compare() );
				};

			return _sortOptions.divide ? divideStateComparison() : anyStateComparison();
		},
		/** @public @method パートナーカードの表示と固定パートナー数をリカウントする */
		_displayPartners = function () {
			var nameFilter = new RegExp( $( "#filter-partner-name" ).val(), "i" );
			$( "#partners" ).empty();
			statics.fixCount = 0;

			$.each( _getOrderedPartners(), function ( index, partner ) {
				if ( nameFilter.test( partner ) ) {
					$( "#partners" ).append( _makePartnerCard( partner, statics.partners[ partner ] ) );
				}
				statics.fixCount += statics.partners[ this ][ PARAMETER_INDEX.fixation ] ? 1 : 0;
			} );
		},

		// event actions for partner data
		/** @private @method パートナー入力処理 */
		_editName = function () {
			var $entryView = $( _ENTRY_IDENTIFIER + "partner-name-container" ),
				$partnerName = $( _ENTRY_IDENTIFIER + "partner-name" ),
				$buttonEntry = $( _ENTRY_IDENTIFIER + "button-entry" ),

				$inputContainer = $( "<span class=\"input-name\"><input type=\"text\" placeholder=\"パートナー名\"></span>" ),
				$inputField = $inputContainer.children();

			// 編集開始
			$entryView.click( function () {
				var name = "";

				if ( _currentEdit === null ) {
					name = $partnerName.hasClass( "initial" ) ? "" : $partnerName.text();

					$entryView
						.hide()
						.after( $inputContainer );
					$partnerName.removeClass( "initial" );
					$inputField
						.val( name ).focus().select()
						.tooltipster( _NAME_HINT ).tooltipster( "show" );

					_currentEdit = "name";
				}
			} );
			_$patners.on( "click", ".partner-name-container", function () {
				var $view = $( this );

				if ( _currentEdit === null ) {
					$view
						.hide()
						.after( $inputContainer );
					$inputField
						.val( $view.find( ".partner-name" ).text() ).focus().select();

					_currentEdit = "name";
				}
			} );

			// 編集中
			_$entryPartner.on( "keyup", ".input-name input", function () {
				var name = $inputField.val();

				if ( name === "" || statics.partners.hasOwnProperty( name ) ) {
					$buttonEntry.addClass( "disabled" );
				} else {
					$buttonEntry.removeClass( "disabled" );
				}
			} );

			// 編集完了
			_$entryPartner.on( "blur", ".input-name input", function () {
				var name = $inputField.val();

				if ( statics.partners.hasOwnProperty( name ) ) {
					$inputField
						.tooltipster( "destroy" )
						.tooltipster( _NAME_DUPLICATION ).tooltipster( "show" )
						.focus();
				} else {
					if ( name === "" ) {
						$partnerName.text( _INITIAL_PARTNER_NAME_TEXT ).addClass( "initial" );
						$entryView.show();
					} else {
						$partnerName.text( name );
						$entryView.show();
					}
					$inputContainer.remove();

					_currentEdit = null;
				}
			} );
			_$patners.on( "blur", ".input-name input", function () {
				var $card = $( this ).parentsUntil( "#partners", ".partner-card" ),
					$view = $card.find( ".partner-name-container" ),
					$partnerName = $card.find( ".partner-name" ),
					partner = $card.data( "partner" ),
					name = $inputField.val();

				if ( statics.partners.hasOwnProperty( name ) && name !== partner ) {
					$inputField
						.tooltipster( _NAME_DUPLICATION ).tooltipster( "show" )
						.focus();
				} else {
					name = name === "" ? partner : name;

					$partnerName.text( name );
					$view.show();
					$card.data( "partner", name );
					$inputContainer.remove();

					_updatePartnerName( partner, name );
					_currentEdit = null;
				}
			} );
		},
		/** @private @method
		 * 基礎データ入力用
		 * @param {String} field 対象項目
		 */
		_editValue = function ( field ) {
			var $entryView = $( _ENTRY_IDENTIFIER + "partner-" + field ),

				$inputContainer = $( "<span class=\"input-" + field + "\"><input type=\"text\"></span>" ),
				$inputField = $inputContainer.children();

			// 編集開始
			_$both.on( "click", ".partner-" + field, function () {
				var $view = $( this );

				if ( _currentEdit === null ) {
					$view.hide().after( $inputContainer );
					$inputField.val( $view.text() ).focus().select();

					_currentEdit = field;
				}
			} );

			// 編集完了
			_$entryPartner.on( "blur", ".input-" + field + " input", function () {
				var value = parseInt( $inputField.val(), 10 );

				if ( $inputField.val() === "" ) {
					$entryView.text( BOUNDS.values.initial ).show();
					$inputContainer.remove();

					_currentEdit = null;
				} else if ( isNaN( value ) || !inBounds( value, BOUNDS.values ) ) {
					$inputField
						.tooltipster( VALUE_ERROR ).tooltipster( "show" )
						.focus();
				} else {
					$entryView.text( value ).show();
					$inputContainer.remove();

					_currentEdit = null;
				}
			} );
			_$patners.on( "blur", ".input-" + field + " input", function () {
				var $card = $( this ).parentsUntil( "#partners", ".partner-card" ),
					$view = $card.find( ".partner-" + field ),
					partner = $card.data( "partner" ),
					value = parseInt( $inputField.val(), 10 );

				if ( $inputField.val() === "" ) {
					$view.text( BOUNDS.values.initial ).show();
					$inputContainer.remove();

					_updateParameter( partner, field, value );
					_currentEdit = null;
				} else if ( isNaN( value ) || !inBounds( value, BOUNDS.values ) ) {
					$inputField
						.tooltipster( VALUE_ERROR ).tooltipster( "show" )
						.focus();
				} else {
					$view.text( value ).show();
					$inputContainer.remove();

					_updateParameter( partner, field, value );
					_currentEdit = null;
				}
			} );
		},
		/** @private @method
		 * ステータスデータ入力用
		 * @param {Number} index 配列インデックス（未使用）
		 * @param {String} field 対象項目
		 */
		_editStatus = function ( index, field ) {
			var $entryView = $( _ENTRY_IDENTIFIER + "partner-" + field ),

				$inputContainer = $( "<span class=\"input-" + field + "\"><input type=\"text\"></span>" ),
				$inputField = $inputContainer.children();

			// 編集開始
			_$both.on( "click", ".partner-" + field, function () {
				var $view = $( this );

				if ( _currentEdit === null ) {
					$view
						.hide()
						.after( $inputContainer );
					$inputField
						.val( $view.text() ).focus().select();

					_currentEdit = field;
				}
			} );

			// 編集完了
			_$entryPartner.on( "blur", ".input-" + field + " input", function () {
				var value = parseInt( $inputField.val(), 10 );

				if ( $inputField.val() === "" ) {
					$entryView
						.removeClass( "negative positive" ).addClass( "zero" )
						.text( BOUNDS.parameters.initial ).show();
					$inputContainer.remove();

					_currentEdit = null;
				} else if ( isNaN( value ) || !inBounds( value, BOUNDS.parameters ) ) {
					$inputField
						.tooltipster( _STATUS_ERROR ).tooltipster( "show" )
						.focus();
				} else {
					$entryView
						.removeClass( "negative zero positive" ).addClass( getSign( value ) )
						.text( value ).show();
					$inputContainer.remove();

					_currentEdit = null;
				}
			} );
			_$patners.on( "blur", ".input-" + field + " input", function () {
				var $card = $( this ).parentsUntil( "#partners", ".partner-card" ),
					$view = $card.find( ".partner-" + field ),
					partner = $card.data( "partner" ),
					value = parseInt( $inputField.val(), 10 );

				if ( $inputField.val() === "" ) {
					$view
						.removeClass( "negative positive" ).addClass( "zero" )
						.text( BOUNDS.parameters.initial ).show();
					$inputContainer.remove();

					_updateParameter( partner, field, value );
					_currentEdit = null;
				} else if ( isNaN( value ) || !inBounds( value, BOUNDS.parameters ) ) {
					$inputField
						.tooltipster( _STATUS_ERROR ).tooltipster( "show" )
						.focus();
				} else {
					$view
						.removeClass( "negative zero positive" ).addClass( getSign( value ) )
						.text( value ).show();
					$inputContainer.remove();

					_updateParameter( partner, field, value );
					_currentEdit = null;
				}
			} );
		},
		/** @public @method
		 * パートナー追加の入力をリセット。
		 * エラーもリセットされる
		 */
		_inputReset = function () {
			if ( _currentEdit !== null ) {
				$( _ENTRY_IDENTIFIER + "input-" + _currentEdit ).remove();
				if ( _currentEdit === "name" ) {
					$( _ENTRY_IDENTIFIER + "partner-name-container" ).show();
				} else {
					$( _ENTRY_IDENTIFIER + "partner-" + _currentEdit ).show();
				}
				_currentEdit = null;
			}
			if ( $( _ENTRY_IDENTIFIER + "button-fixation" ).hasClass( "active" ) ) {
				statics.fixCount -= 1;
			}
			$( _ENTRY_IDENTIFIER + "partner-name" )
				.text( _INITIAL_PARTNER_NAME_TEXT )
				.addClass( "initial" );
			$( _ENTRY_IDENTIFIER + "button-entry" )
				.addClass( "disabled" );
			$( _ENTRY_IDENTIFIER + "partner-resting, " + _ENTRY_IDENTIFIER + "partner-fixation" )
				.remove();
			$( _ENTRY_IDENTIFIER + "button-resting, " + _ENTRY_IDENTIFIER + "button-fixation" )
				.removeClass( "active" );
			$( _ENTRY_IDENTIFIER + "partner-level, " + _ENTRY_IDENTIFIER + "partner-cp" )
				.text( BOUNDS.values.initial );
			$.each( PARAMETERS, function () {
				$( _ENTRY_IDENTIFIER + "partner-" + this )
					.text( BOUNDS.parameters.initial )
					.removeClass( "negative positive" )
					.addClass( "zero" );
			} );
			$( "#filter-partner-name" ).val( "" );
		},
		/** @private @method
		 * 除外（休息中）設定ボタンの領域にマウスが侵入してきたときの挙動に関する抽象メソッド
		 * @param {jQuery}  $this      呼び出し元の $( this ) オブジェクト
		 * @param {boolean} isFixation パートナーの固定設定状況
		 */
		_abstractActionRestingButtonHover = function ( $this, isFixation ) {
			if ( isFixation ) {
				$this
					.tooltipster( _RESTING_CONFLICT ).tooltipster( "show" )
					.one( "mouseleave", function () {
						$( this ).tooltipster( "destroy" );
					} );
			}
		},
		/** @private @method パートナー追加における除外（休息中）設定ボタンの領域にマウスが侵入してきたときの挙動 */
		_actionEntryRestingButtonHover = function () {
			_abstractActionRestingButtonHover( $( this ), $( _ENTRY_IDENTIFIER + "button-fixation" ).hasClass( "active" ) );
		},
		/** @private @method パートナーリストにおける除外（休息中）設定ボタンの領域にマウスが侵入してきたときの挙動 */
		_actionListRestingButtonHover = function () {
			_abstractActionRestingButtonHover( $( this ), $( this ).parentsUntil( "#partners", ".partner-card" ).find( ".button-fixation" ).hasClass( "active" ) );
		},
		/** @private @method
		 * 固定設定ボタンの領域にマウスが侵入してきたときの挙動に関する抽象メソッド
		 * @param {jQuery}  $this     呼び出し元の $( this ) オブジェクト
		 * @param {boolean} isResting パートナーの除外（休息中）設定状況
		 */
		_abstractActionFixationButtonHover = function ( $this, isResting ) {
			if ( isResting ) {
				$this
					.tooltipster( _FIXATION_CONFLICT )
					.tooltipster( "show" )
					.one( "mouseleave", function () {
						$( this ).tooltipster( "destroy" );
					} );
			} else if ( !$this.hasClass( "active" ) && statics.countMax < statics.fixCount + 1 ) {
				$this
					.tooltipster( _FIXATION_OVER )
					.tooltipster( "show" )
					.one( "mouseleave", function () {
						$( this ).tooltipster( "destroy" );
					} );
			}
		},
		/** @private @method パートナー追加における固定設定ボタンの領域にマウスが侵入してきたときの挙動 */
		_actionEntryFixationButtonHover = function () {
			_abstractActionFixationButtonHover( $( this ), $( _ENTRY_IDENTIFIER + "button-resting" ).hasClass( "active" ) );
		},
		/** @private @method パートナーリストにおける固定設定ボタンの領域にマウスが侵入してきたときの挙動 */
		_actionListFixationButtonHover = function () {
			_abstractActionFixationButtonHover( $( this ), $( this ).parentsUntil( "#partners", ".partner-card" ).find( ".button-resting" ).hasClass( "active" ) );
		},
		/** @private @method パートナー追加における除外（休息中）設定ボタンをクリックしたときの挙動 */
		_actionEntryRestingButtonClick = function () {
			if ( !$( _ENTRY_IDENTIFIER + "button-fixation" ).hasClass( "active" ) ) {
				if ( $( this ).hasClass( "active" ) ) {
					$( this ).removeClass( "active" );
					$( _ENTRY_IDENTIFIER + "partner-resting" ).remove();
				} else {
					$( this ).addClass( "active" );
					$( _ENTRY_IDENTIFIER + "partner-name" ).before( _RESTING_ICON );
				}
			}
		},
		/** @private @method
		 * パートナーリストにおける除外（休息中）設定ボタンをクリックしたときの挙動。
		 * 更新した情報は即座にブラウザに保存される
		 */
		_actionListRestingButtonClick = function () {
			var $card = $( this ).parentsUntil( "#partners", ".partner-card" ),
				state = $( this ).hasClass( "active" );

			if ( !$card.find( ".button-fixation" ).hasClass( "active" ) ) {
				if ( state ) {
					$( this ).removeClass( "active" );
					$card
						.removeClass( "resting" )
						.find( ".partner-resting" ).remove();
				} else {
					$( this ).addClass( "active" );
					$card
						.addClass( "resting" )
						.find( ".partner-name" ).before( _RESTING_ICON );
				}
				_updateParameter( $card.data( "partner" ), "resting", !state );
			}
		},
		/** @private @method パートナー追加における固定設定ボタンをクリックしたときの挙動 */
		_actionEntryFixationButtonClick = function () {
			if ( !$( _ENTRY_IDENTIFIER + "button-resting" ).hasClass( "active" ) ) {
				if ( $( this ).hasClass( "active" ) ) {
					$( this ).removeClass( "active" );
					$( _ENTRY_IDENTIFIER + "partner-fixation" ).remove();
					statics.fixCount -= 1;
				} else {
					if ( statics.fixCount + 1 <= statics.countMax ) {
						$( this ).addClass( "active" );
						$( _ENTRY_IDENTIFIER + "partner-name" ).before( _FIXATION_ICON );
						statics.fixCount += 1;
					}
				}
			}
		},
		/** @private @method
		 * パートナーリストにおける固定設定ボタンをクリックしたときの挙動。
		 * 更新した情報は即座にブラウザに保存される
		 */
		_actionListFixationButtonClick = function () {
			var $card = $( this ).parentsUntil( "#partners", ".partner-card" ),
				state = $( this ).hasClass( "active" );

			if ( !$card.find( ".button-resting" ).hasClass( "active" ) ) {
				if ( state ) {
					$( this ).removeClass( "active" );
					$card
						.removeClass( "fixation" )
						.find( ".partner-fixation" ).remove();
					statics.fixCount -= 1;
					_updateParameter( $card.data( "partner" ), "fixation", false );
				} else {
					if ( statics.fixCount + 1 <= statics.countMax ) {
						$( this ).addClass( "active" );
						$card
							.addClass( "fixation" )
							.find( ".partner-name" ).before( _FIXATION_ICON );
						statics.fixCount += 1;
						_updateParameter( $card.data( "partner" ), "fixation", true );
					}
				}
			}
		},

		// event actions for sort
		/** @private @method ソートキー選択ボタンに現在のソート基準ラベルを設定 */
		_setLabelForSortKey = function () {
			$( "#sort-key" ).text( _sortLabels.keyLabel + PARAMETER_CORRESPONDING[ _sortOptions.key ] );
		},
		/** @private @method ソート順序選択ボタンに現在のソート順序ラベルを設定 */
		_setLabelForSortOrder = function () {
			var getOrderLabel = function ( key, asc ) {
				if ( key === "name" ) {
					return asc ? _sortLabels.lexicographic.asc : _sortLabels.lexicographic.desc;
				} else {
					return asc ? _sortLabels.numerical.asc : _sortLabels.numerical.desc;
				}
			};

			$( "#sort-order" ).text( getOrderLabel( _sortOptions.key, _sortOptions.asc ) );
		},
		/** @private @method ソートオプションに現在のオプションラベルを設定 */
		_setLabelForSortOption = function () {
			$( "#sort-option" ).text( _sortOptions.divide ? _sortLabels.divide : _sortLabels.individe );
		},
		/** @private @method ソートキー選択用ダイアログ */
		_choiceDialogueSortKey = function () {
			var $content = $( "#dialogue" ),
				$dialoguePane = $( "#dialogue-pane, #dialogue" );

			$content
				.addClass( "sort-dialogue" )
				.html( "<div id=\"dialogue-title\"><span id=\"dialogue-title-text\">並べ替えの基準を選択</span><span id=\"dialogue-close\" class=\"dialogue-button\">close</span></div><div id=\"sort-keys\"><div class=\"foundations-keys\"><span class=\"sort-dialogue-button\" data-key=\"name\">パートナー名</span><span class=\"sort-dialogue-button\" data-key=\"level\">レベル</span><span class=\"sort-dialogue-button\" data-key=\"cp\">CP</span></div><div class=\"parameters-keys\"><span class=\"sort-dialogue-button\" data-key=\"hp\">HP</span><span class=\"sort-dialogue-button\" data-key=\"str\">STR</span><span class=\"sort-dialogue-button\" data-key=\"dex\">DEX</span><span class=\"sort-dialogue-button\" data-key=\"int\">INT</span><span class=\"sort-dialogue-button\" data-key=\"luk\">LUK</span><br><span class=\"sort-dialogue-button\" data-key=\"mp\">MP</span><span class=\"sort-dialogue-button\" data-key=\"vit\">VIT</span><span class=\"sort-dialogue-button\" data-key=\"agi\">AGI</span><span class=\"sort-dialogue-button\" data-key=\"pie\">PIE</span></div></div>" )
				.css( {
					marginTop: ( $content.outerHeight() / 2 ) * -1,
					marginLeft: ( $content.outerWidth() / 2 ) * -1
				} );

			$( "#dialogue-close, #dialogue-pane" )
				.one( "click", function () {
					$dialoguePane.fadeOut( FADE_DURATION );
					$content.removeClass( "sort-dialogue" );
				} );

			$( ".sort-dialogue-button" ).click( function () {
				_setSortOptions( "key", $( this ).data( "key" ) );
				_setLabelForSortKey();
				_setLabelForSortOrder();

				_displayPartners();

				$dialoguePane.fadeOut( FADE_DURATION );
				$content.removeClass( "sort-dialogue" );
			} );

			$dialoguePane.fadeIn( FADE_DURATION );
		},

		// data laods and imex
		/** @private @method ブラウザに保存されているソートオプションを読み込んで設定する */
		_loadSortOptions = function () {
			var sortOptions = localStorage.getItem( "sortOptions" ),
				initial = {
					"key": "name",
					"asc": true,
					"divide": true
				};

			_sortOptions = sortOptions ? JSON.parse( sortOptions ) : initial;

			_setLabelForSortKey();
			_setLabelForSortOrder();
			_setLabelForSortOption();
		},
		/** @private @method ブラウザに保存されているパートナーデータを読み込んで設定する */
		_loadPartners = function () {
			var partners = localStorage.getItem( "partners" );

			statics.partners = partners ? JSON.parse( partners ) : {};
			_displayPartners();

			if ( Object.keys( statics.partners ).length === 0 ) {
				$( "#initial-message" ).remove();
				$( "#first-message" ).show();
			} else {
				$( "#first-message" ).remove();
				$( "#initial-message" ).show();
			}

		},
		/** @private @method パートナーデータのファイルによるインポート処理 */
		_dataImport = function () {
			var $content = $( "#dialogue" ),
				$dialoguePane = $( "#dialogue-pane, #dialogue" ),

				FILE_STANDBY_HTML = "ここにファイルを直接ドロップ！<br>または<br><input id=\"import-file\" type=\"file\">",
				FILE_DETECTING_HTML = "ファイルを検知しました(｀・ω・´)<br>指の力をぬいてください",

				eventCancel = function ( e ) {
					e.preventDefault();
					e.stopPropagation();
				},
				abstractFileReader = function ( e, readFile ) {
					var reader = new FileReader();

					reader.readAsText( readFile );
					reader.onload = function () {
						statics.partners = JSON.parse( reader.result );
						localStorage.setItem( "partners", JSON.stringify( statics.partners ) );

						_displayPartners();

						$dialoguePane.fadeOut( FADE_DURATION );
						$content.removeClass( "file-import" );
					};

					eventCancel( e );
				},
				fileReadByDrop = function ( e ) {
					abstractFileReader( e, e.originalEvent.dataTransfer.files[ 0 ] );
				},
				fileReadByInput = function ( e ) {
					abstractFileReader( e, e.target.files[ 0 ] );
				};

			//			if ( !window.FileReader ) {
			//				alart( "File API がサポートされていません。" );
			//				return false;
			//			}

			$content
				.addClass( "file-import" )
				.html( "<span id=\"dialogue-close\" class=\"dialogue-button\">close</span><div id=\"file-droppable\">" + FILE_STANDBY_HTML + "</div>" )
				.css( {
					marginTop: ( $content.outerHeight() / 2 ) * -1,
					marginLeft: ( $content.outerWidth() / 2 ) * -1
				} );

			$( "#dialogue-close, #dialogue-pane" )
				.one( "click", function () {
					$dialoguePane.fadeOut( FADE_DURATION );
					$content.removeClass( "file-import" );
				} );

			$( "#file-droppable" )
				.bind( "dragover", eventCancel )
				.bind( "dragenter", function ( e ) {
					$( this ).html( FILE_DETECTING_HTML );
					eventCancel( e );
				} )
				.bind( "dragleave", function () {
					$( this ).html( FILE_STANDBY_HTML );
				} )
				.bind( "drop", fileReadByDrop )
				.on( "change", "#import-file", fileReadByInput );

			$dialoguePane.fadeIn( FADE_DURATION );
		},
		/** @private @method パートナーデータのファイルによるエクスポート処理 */
		_dataExport = function () {
			var blob = new Blob( [ JSON.stringify( statics.partners ) ], { "type": "application/json" } );

			if ( navigator.msSaveBlob ) {
				navigator.msSaveBlob( blob, "partners.json" );
				navigator.msSaveOrOpenBlob( blob, "partners.json" );
			} else {
				$( this ).attr( "href", URL.createObjectURL( blob ) );
			}
		};

	$.fn.tooltipster( "setDefaults", RUMINANT.FormationStaticItems.TOOLTIPSTER_DEFAULT );

	// bind events for input fields
	_editName();
	_editValue( "level" );
	_editValue( "cp" );
	$.each( PARAMETERS, _editStatus );

	// bind events for resting, fixation and release (+input in partner list keypress)
	$( _ENTRY_IDENTIFIER + "button-resting" )
		.mouseenter( _actionEntryRestingButtonHover )
		.click( _actionEntryRestingButtonClick );
	$( _ENTRY_IDENTIFIER + "button-fixation" )
		.mouseenter( _actionEntryFixationButtonHover )
		.click( _actionEntryFixationButtonClick );
	_$patners
		.on( "mouseenter", ".button-resting", _actionListRestingButtonHover )
		.on( "click", ".button-resting", _actionListRestingButtonClick )
		.on( "mouseenter", ".button-fixation", _actionListFixationButtonHover )
		.on( "click", ".button-fixation", _actionListFixationButtonClick )
		.on( "click", ".button-release", function () {
			var $card = $( this ).parentsUntil( "#partners", ".partner-card" ),
				partner = $card.data( "partner" );

			confirm( function () {
				$card.slideUp( "slow", function () {
					_releasePartner( partner );
					$card.remove();
				} );
			}, partner + "を削除してしまいます！<br>よろしいですか？", "削除する", "やめる" );
		} )
		.on( "keypress", "input", enterToBlur );

	// bind events for reset and entry
	$( _ENTRY_IDENTIFIER + "button-reset" )
		.click( _inputReset );
	$( _ENTRY_IDENTIFIER + "button-entry" )
		.tooltipster( { theme: "tooltipster-help", timer: 0 } )
		.mouseenter( function () {
			$( this ).tooltipster( "content", $( this ).hasClass( "disabled" ) ? _PARTNER_BEFORE_INPUT_HINT : _PARTNER_AFTER_ENTRY_HINT ).tooltipster( "show" );
		} )
		.mouseleave( function () {
			$( this ).tooltipster( "hide" );
		} )
		.click( function () {
			if ( !$( this ).hasClass( "disabled" ) ) {
				_entryPartner();
				_displayPartners();
				_inputReset();
			}
		} );

	// bind event for entry partner keypress
	_$entryPartner.on( "keypress", "input", function ( e ) {
		var order = [ "name-container", "level", "cp", "hp", "mp", "str", "vit", "dex", "agi", "int", "pie", "luk" ],
			next = 0;

		if ( ( e.which ? e.which : e.keyCode ) === 13 ) {
			next = ( parseInt( $( this ).parent().prev().data( "index" ), 10 ) + ( e.shiftKey ? -1 : 1 ) ) % order.length;

			$( this ).blur();
			if ( _currentEdit === null ) {
				$( _ENTRY_IDENTIFIER + "partner-" + order[ next < 0 ? next + order.length : next ] ).click();
			}
		}
	} );

	// bind events for filter and sort
	$( "#sort-key" ).click( _choiceDialogueSortKey );
	$( "#sort-order" ).click( function () {
		_setSortOptions( "asc", !_sortOptions.asc );
		_setLabelForSortOrder();
		_displayPartners();
	} );
	$( "#sort-option" )
		.click( function () {
			_setSortOptions( "divide", !_sortOptions.divide );
			_setLabelForSortOption();
			_displayPartners();
		} )
		.tooltipster( _SORT_OPTION_HINT );

	$( "#filter-partner-name" )
		.keypress( _displayPartners )
		.change( _displayPartners );
	$( "#filter-reset" ).click( function () {
		$( "#filter-partner-name" ).val( "" );
		_displayPartners();
	} );
	$( "#redisplay" ).click( _displayPartners );

	$( "#resting-clear-collectively" ).click( function () {
		var corresponding = $( "#partners .button-resting.active" ).size(),
			text = corresponding ? corresponding + " 件のパートナーが除外設定中です。<br>除外設定を一括解除してもよろしいですか" : "該当するパートナーはいません…";

		confirm( function () {
			$( "#partners .button-resting.active" ).click();
		}, text, "除外設定一括解除", "やめる" );
	} );
	$( "#fixation-clear-collectively" ).click( function () {
		var corresponding = $( "#partners .button-fixation.active" ).size(),
			text = corresponding ? corresponding + " 件のパートナーが固定設定中です。<br>固定設定を一括解除してもよろしいですか" : "該当するパートナーはいません…";

		confirm( function () {
			$( "#partners .button-fixation.active" ).click();
		}, text, "固定設定一括解除", "やめる" );
	} );

	// bind events for imex
	$( "#data-import" )
		.click( _dataImport )
		.tooltipster( _FILE_IMPORT_HINT );
	$( "#data-export" )
		.click( _dataExport )
		.tooltipster( _FILE_EXPORT_HINT );

	// initialize
	_loadSortOptions();
	_loadPartners();
	_inputReset();

	return {
		displayPartners: _displayPartners,
		inputReset: _inputReset,
		setStandbys: _setStandbys
	};
}() );

/** @class 編成シミュレーションタブの操作 */
RUMINANT.SimulateFormation = ( function () {
	"use strict";

	var // depending on common consts
		BOUNDS = RUMINANT.FormationStaticItems.BOUNDS,
		DUNGEONS = RUMINANT.FormationStaticItems.DUNGEONS,
		DUNGEON_INDEX = RUMINANT.FormationStaticItems.DUNGEON_INDEX,
		FADE_DURATION = RUMINANT.FormationStaticItems.FADE_DURATION,
		PARAMETERS = RUMINANT.FormationStaticItems.PARAMETERS,
		PARAMETER_INDEX = RUMINANT.FormationStaticItems.PARAMETER_INDEX,
		STATUS_SENTRY = RUMINANT.FormationStaticItems.STATUS_SENTRY,
		VALUE_ERROR = RUMINANT.FormationStaticItems.VALUE_ERROR,

		// depending on static methods
		confirm = RUMINANT.FormationStaticItems.confirm,
		enterToBlur = RUMINANT.FormationStaticItems.enterToBlur,
		digitGrouping = RUMINANT.FormationStaticItems.digitGrouping,
		getSign = RUMINANT.FormationStaticItems.getSign,
		inBounds = RUMINANT.FormationStaticItems.inBounds,

		setStandbys = RUMINANT.ManagementOfSoulPartners.setStandbys,

		// depending on static variables
		statics = RUMINANT.FormationStaticItems.statics,

		/** @const {Number} 初期指定 CP */
		INITIAL_CP = 6,
		/** @const {Number} 表示上限初期値 */
		INITIAL_LIMIT = 50,
		/** @const {String} 初期選択探索先ダンジョン */
		INITIAL_OBJECTIVE = "カリグラーゼ下水道",
		/** @const {String} 設定した編成数とダンジョンの編成数制限検査用エラーメッセージ */
		_DUNGEON_COUNT_ERROR = "指定した編成数が探索先ダンジョンの編成数制限を超えています<br>編成数の指定を減らすか編成数の固定を解除してください",
		/** @const {String} 固定パートナー数とダンジョンの編成数制限検査用エラーメッセージ */
		_FIXATION_DUNGEON_ERROR = "固定パートナー数が探索先ダンジョンの編成数制限を超えています<br>パートナー管理で固定パートナーをいくつか解除してください",
		/** @const {String} 固定パートナー数と設定した編成数制限検査用エラーメッセージ */
		_FIXATION_OPTION_ERROR = "固定パートナー数が指定した編成数を超えています<br>パートナー管理で固定パートナーをいくつか解除または編成数の指定をあげてください",

		/** @const {tooltipster} 編成数入力エラー時のヒント */
		_COUNT_ERROR = { content: "1～5 までの数値（半角）しか許されません" },
		/** @const {tooltipster} 表示上限入力エラー時のヒント */
		_LIMIT_ERROR = { content: "0 以上の数値（半角しか許されません" },

		/** @static @type {Array} ソートオプション */
		_allFormations = [],
		/** @static @type {Object} 現在編集中の項目 */
		_formations = {},
		/** @static @type {Object} 現在表示中の項目 */
		_displayingFormations = {},

		_seq = 0,

		// utils
		/** @private @method
		 * standbys に格納されている候補パートナーから全編成パターンを生成する。
		 * 編成の生成は内部関数 combination にて行っている。
		 * 引数に編成数の配列を与える。
		 * 具体的には、[ 1, 3, 5 ] を与えるとパートナーの編成数が
		 + 1 の全編成と 3 の全編成および 5 の全編成が生成される。
		 * @param  {Array} count 編成数
		 * @return {Array} 全編成パターン
		 */
		_organizePartners = function () {
			var allFormations = [],
				temporary = [],
				terminal = Math.min( statics.countMax, statics.objective.count ),
				seconds = terminal - statics.fixCount,
				combination = function ( candidate, r ) {
					var formation = [],
						n = candidate.length,
						i;

					if ( r === 1 ) {
						for ( i = 0; i < n; i += 1 ) {
							formation[ i ] = [ candidate[ i ] ];
						}
					} else {
						for ( i = 0; i < n - r + 1; i += 1 ) {
							var partial = combination( candidate.slice( i + 1 ), r - 1 );
							for ( var j = 0, length = partial.length; j < length; j += 1 ) {
								formation.push( [ candidate[ i ] ].concat( partial[ j ] ) );
							}
						}
					}

					return formation;
				},
				makeFormations = function ( members ) {
					temporary = combination( statics.standbys.second, members );
					$.each( temporary, function ( index, formation ) {
						temporary[ index ] = statics.standbys.fixation.concat( formation );
					} );
					allFormations = allFormations.concat( temporary );
				};

			if ( seconds !== 0 ) {
				if ( statics.isCountFix ) {
					makeFormations( seconds );
				} else {
					for ( var i = 1; i <= seconds; i += 1 ) {
						makeFormations( i );
					}
				}
			} else {
				allFormations[ 0 ] = statics.standbys.fixation;
			}

			return allFormations;
		},
		/** @private @method
		 * 全編成の成分分析を行う。
		 * 具体的には各々の編成に対して以下を行っている。
		 *    1. 各種パラメーター合計の計算
		 *    2. CP 合計の計算
		 *    3. 目的（ダンジョン）における要求パラメータ達成の有無を判定
		 * なお、上記の処理は内部関数 analysisParameters にて行っている。
		 * @param  {Array} allFormations 全編成パターン
		 * @return {Array} 適合したパートナーの分析結果
		 */
		_assayFormations = function ( allFormations ) {
			var formations = [],
				analysisParameters = function ( formation ) {
					var cp = 0,
						fullfill = true,
						members = [],
						parameters = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

					$.each( formation, function ( i, partner ) {
						for ( var p = 0; p <= STATUS_SENTRY; p += 1 ) {
							parameters[ p ] += statics.partners[ partner ][ p ];
						}
						members.push( partner );
						cp += statics.partners[ partner ][ PARAMETER_INDEX.cp ];
					} );

					for ( var p = 0; p <= STATUS_SENTRY; p += 1 ) {
						if ( statics.objective.request[ p ] !== 0 && parameters[ p ] < statics.objective.request[ p ] ) {
							fullfill = false;
							break;
						}
					}

					return {
						cp: cp,
						fullfillParameters: fullfill && cp <= statics.cpLimit,
						members: members,
						parameters: parameters
					};
				};

			$.each( allFormations, function ( index, formation ) {
				var f = analysisParameters( formation );
				if ( f.fullfillParameters ) {
					formations.push( f );
				}
			} );

			return formations;
		},

		// relevant to simulate formation
		/** @private @method
		 * 編成カードを生成する
		 * @param  {Object} formation 編成データ
		 * @return {String} 編成カードの HTML
		 */
		_makeFormationCard = function ( formation ) {
			var html = "<div class=\"formation-card\"><div class=\"party-partners\">",
				getParameterCell = function ( p ) {
					var parameter = formation.parameters[ PARAMETER_INDEX[ p.toLowerCase() ] ];
					return "<th>" + p + "</th><td class=\"" + getSign( parameter ) + "\">" + parameter + "</td>";
				};

			$.each( formation.members, function () {
				html += "<span class=\"partner" + ( statics.partners[ this ][ PARAMETER_INDEX.fixation ] ? " fixation" : "" ) + "\">" + this + "</span>";
			} );

			html += "</div><div class=\"fundamental-requests\"><div class=\"value-field\"><span class=\"label\">合計レベル</span><span class=\"value\">" + formation.parameters[ PARAMETER_INDEX.level ] + "</span></div><div class=\"value-field\"><span class=\"label\">CP 合計</span><span class=\"value\">" + formation.cp + "</span></div><div class=\"value-field\"><span class=\"label\">編成数</span><span class=\"value\">" + formation.members.length + "</span></div></div><table class=\"parameters-list\"><tbody><tr>" + getParameterCell( "HP" ) + getParameterCell( "STR" ) + getParameterCell( "DEX" ) + getParameterCell( "INT" ) + getParameterCell( "LUK" ) + "</tr><tr>" + getParameterCell( "MP" ) + getParameterCell( "VIT" ) + getParameterCell( "AGI" ) + getParameterCell( "PIE" ) + "<th></th><td></td></tr></tbody></table><div class=\"toolbox\"><span class=\"tool-button button-resting-collectively\">除外</span></div></div>";

			return html;
		},
		/** @private @method 編成カードを表示する */
		_displayFormations = function () {
			var formations = _displayingFormations.length,
				limit = Math.min( formations, _seq + statics.limit );

			statics.beforForamtions = formations;

			if ( statics.limit ) {
				for ( var i = _seq; i < limit; i += 1 ) {
					$( "#formations" ).append( _makeFormationCard( _displayingFormations[ i ] ) );
				}
				_seq = limit;
				if ( _seq === formations ) {
					$( "#more-formations" ).hide();
				} else {
					$( "#more-formations" )
						.text( "さらに編成を表示（残り" + ( formations - _seq ) + "）" )
						.css( "display", "inline-block" );
				}
			} else {
				$( "#formations" ).empty();
				$.each( _displayingFormations, function () {
					$( "#formations" ).append( _makeFormationCard( this ) );
				} );
			}

			if ( formations === 0 ) {
				$( "#formations-empty" ).show();
			} else {
				$( "#formations-empty" ).hide();
			}
		},
		/** @private @method
		 * 設定した編成数とダンジョンの編成数制限を検査する
		 * @return {boolean} エラー判定結果
		 */
		_countFixCheck = function () {
			if ( statics.isCountFix && statics.objective.count < statics.countMax ) {
				$( "#controle-display" )
					.tooltipster( "content", _DUNGEON_COUNT_ERROR )
					.tooltipster( "show" )
					.addClass( "disabled" );
				return false;
			}
			$( "#controle-display" )
				.removeClass( "disabled" )
				.tooltipster( "hide" );
			return true;
		},
		/** @private @method
		 * 固定パートナー数とダンジョンの編成数制限を検査する
		 * @return {boolean} エラー判定結果
		 */
		_fixationPartnerCheck = function () {
			if ( statics.objective.count < statics.fixCount ) {
				$( "#controle-display" )
					.tooltipster( "content", _FIXATION_DUNGEON_ERROR )
					.tooltipster( "show" )
					.addClass( "disabled" );
				return false;
			}
			$( "#controle-display" )
				.removeClass( "disabled" )
				.tooltipster( "hide" );
			return true;
		},
		/** @private @method
		 * 固定パートナー数と設定した編成数制限を検査する
		 * @return {boolean} エラー判定結果
		 */
		_fixBothCheck = function () {
			if ( statics.countMax < statics.fixCount ) {
				$( "#controle-display" )
					.tooltipster( "content", _FIXATION_OPTION_ERROR )
					.tooltipster( "show" )
					.addClass( "disabled" );
				return false;
			}
			$( "#controle-display" )
				.removeClass( "disabled" )
				.tooltipster( "hide" );
			return true;
		},
		/** @private @method
		 * シミュレーション結果の変更を簡易検知する
		 * 編成数のみで検知しており編成が異なっていても適合編成総数が同じなら検知漏れが起きる
		 * 実用上は問題ないと考えられるため簡易検知ですます
		 * 厳密検知が必要ならば _formations の内容を精査する必要がある
		 * また、ページロード直後はチェックを行わない
		 */
		_isChange = function ( fullfillFormations ) {
			var isInitial = $( "#first-message:visible, #initial-message:visible" ).length !== 0;

			if ( fullfillFormations === 0 ) {
				$( "#is-change" )
					.text( "適合した編成がありませんでした" )
					.css( "visibility", "visible" );
			} else if ( !isInitial && statics.beforForamtions !== fullfillFormations ) {
				$( "#is-change" )
					.text( "編成候補が更新されました" )
					.css( "visibility", "visible" );
			} else {
				$( "#is-change" ).css( "visibility", "hidden" );
			}
		},
		/** @public @method パートナーの編成を生成および適合検査を行う */
		_simulate = function () {
			var $fullfillFormations = $( "#controle-fullfill-formations" ),
				fullfillFormations = 0,
				sum = Object.keys( statics.partners ).length,
				fixation = 0,
				free = 0,
				resting = 0;

			statics.standbys = setStandbys();

			if ( _countFixCheck() && _fixationPartnerCheck() && _fixBothCheck() ) {
				_allFormations = _organizePartners();
				_formations = _assayFormations( _allFormations );

				fullfillFormations = _formations.length;

				_isChange( fullfillFormations );
			} else {
				_allFormations = [];
			}

			fixation = statics.standbys.fixation.length;
			free = statics.standbys.second.length;
			resting = sum - ( fixation + free );

			$( "#partner-counts-sum" ).text( sum );
			$( "#partner-counts-fixation" ).text( fixation );
			$( "#partner-counts-free" ).text( free );
			$( "#partner-counts-resting" ).text( resting );
			$( "#controle-all-formations" ).text( digitGrouping( _allFormations.length ) );

			if ( fullfillFormations ) {
				$fullfillFormations
					.removeClass( "zero" )
					.text( digitGrouping( fullfillFormations ) );
			} else {
				$fullfillFormations
					.addClass( "zero" )
					.text( fullfillFormations );
			}
		},

		// event actions
		/** @private @method
		 * 探索先ダンジョンの表示設定と探索先ダンジョンのオブジェクトを生成する
		 * @param  {String} dungeon 探索先ダンジョン名
		 * @return {Object} 探索先ダンジョンオブジェクト
		 */
		_setObjective = function ( dungeon ) {
			var objective = {
				"dungeon": dungeon,
				"count": DUNGEONS[ dungeon ][ DUNGEON_INDEX.count ],
				"time": DUNGEONS[ dungeon ][ DUNGEON_INDEX.time ],
				"expenses": DUNGEONS[ dungeon ][ DUNGEON_INDEX.expenses ],
				"request": DUNGEONS[ dungeon ][ DUNGEON_INDEX.parameters ],
				"name": DUNGEONS[ dungeon ][ DUNGEON_INDEX.name ]
			};

			// #request-dungeon
			$( "#dungeon-j" ).text( objective.dungeon );
			$( "#dungeon-e" ).text( objective.name );

			// #fundamental-requests
			$( "#level" ).text( objective.request[ PARAMETER_INDEX.level ] );
			$( "#cp" ).text( statics.cpLimit );
			$( "#count" ).text( objective.count );

			// #basic-information
			$( "#time" ).text( objective.time );
			$( "#expenses" ).text( digitGrouping( objective.expenses ) + " G" );

			// #request-parameters
			$( "#request-parameters td" ).removeClass( "positive" );
			$.each( PARAMETERS, function () {
				if ( objective.request[ PARAMETER_INDEX[ this ] ] ) {
					$( "#request-" + this )
						.text( objective.request[ PARAMETER_INDEX[ this ] ] )
						.addClass( "positive" );
				} else {
					$( "#request-" + this ).text( "-" );
				}
			} );

			return objective;
		},
		/** @private @method 探索先ダンジョン選択ダイアログ */
		_objectiveDialogue = function () {
			var $content = $( "#dialogue" ),
				$dialoguePane = $( "#dialogue-pane, #dialogue" ),
				html = "<div id=\"dialogue-title\">" +
					"<span id=\"dialogue-title-text\">探索先ダンジョン選択</span><span id=\"dialogue-close\" class=\"dialogue-button\">close</span>" +
					"</div>" +
					"<span class=\"region-head\">ディメント王国エリア</span>" +
					"<table class=\"dungeon-list\">" +
					"<body><tr>" +
					"<td><span class=\"dungeon\">カリグラーゼ下水道</span></td>" +
					"<td><span class=\"dungeon\">デルティス大蔵室</span></td>" +
					"<td><span class=\"dungeon\">黄龍の神殿跡</span></td>" +
					"<td><span class=\"dungeon\">アリア川貯水窟</span></td>" +
					"</tr><tr>" +
					"<td><span class=\"dungeon\">忘却の寺院</span></td>" +
					"<td><span class=\"dungeon\">旧地下水路</span></td>" +
					"<td><span class=\"dungeon\">降偉の祭儀場跡</span></td>" +
					"<td><span class=\"dungeon\">ロサワルド水没砦</span></td>" +
					"</tr><tr>" +
					"<td><span class=\"dungeon\">荒廃の廓</span></td>" +
					"<td><span class=\"dungeon\">１３号施設</span></td>" +
					"<td><span class=\"dungeon\">暗澹たる円卓</span></td>" +
					"<td><span class=\"dungeon\">サンジェント遺跡</span></td>" +
					"</tr><tr>" +
					"<td><span class=\"dungeon\">ロットハーディーの廃墟</span></td>" +
					"<td><span class=\"dungeon\">昏き揺らぎの地</span></td>" +
					"<td><span class=\"dungeon\">深淵の迷宮</span></td>" +
					"<td><span class=\"dungeon\">シャーデの迷宮</span></td>" +
					"</tr></tbody>" +
					"</table>" +
					"<span class=\"region-head\">ハーサント連邦エリア</span>" +
					"<table class=\"dungeon-list\">" +
					"<body><tr>" +
					"</tr><tr>" +
					"<td><span class=\"dungeon\">バビリム空中庭園</span></td>" +
					"<td><span class=\"dungeon\">狂気の館</span></td>" +
					"<td></td>" +
					"<td></td>" +
					"</tr></tbody>" +
					"</table>" +
					"<span class=\"region-head\">サブダンジョン</span>" +
					"<table class=\"dungeon-list\">" +
					"<body><tr>" +
					"<td><span class=\"dungeon\">カオカ・パラージ遺跡</span></td>" +
					"<td><span class=\"dungeon\">チコル城址</span></td>" +
					"<td><span class=\"dungeon\">アッザームの試練場</span></td>" +
					"<td><span class=\"dungeon\">夢幻の試練場</span></td>" +
					"</tr><tr>" +
					"<td><span class=\"dungeon\">愛欲と淫虐の館</span></td>" +
					"<td><span class=\"dungeon\">蒼の洞窟</span></td>" +
					"<td><span class=\"dungeon\">混沌のシュトラーゼ</span></td>" +
					"<td><span class=\"dungeon\">ミスカトニック大学分校</span></td>" +
					"</tr><tr>" +
					"<td><span class=\"dungeon\">イルヴァンボーレ鉱山</span></td>" +
					"<td><span class=\"dungeon\">狂王の試練場</span></td>" +
					"<td><span class=\"dungeon\">ユークリッドの無限回廊</span></td>" +
					"<td></td>" +
					"</tr></tbody>" +
					"</table>";

			$content
				.addClass( "choice-objective" )
				.html( html )
				.css( {
					marginTop: ( $content.outerHeight() / 2 ) * -1,
					marginLeft: ( $content.outerWidth() / 2 ) * -1
				} );

			$( "#dialogue-close, #dialogue-pane" )
				.one( "click", function () {
					$dialoguePane.fadeOut( FADE_DURATION );
					$content.removeClass( "choice-objective" );
				} );
			$( "#dialogue .dungeon" )
				.click( function () {
					var objective = $( this ).text();
					statics.objective = _setObjective( objective );
					localStorage.setItem( "objective", objective );

					_simulate();

					$dialoguePane.fadeOut( FADE_DURATION );
					$content.removeClass( "choice-objective" );
				} );

			$dialoguePane.fadeIn( FADE_DURATION );
		},
		/** @public @method このクラスのエラーをリセットする */
		_resetEditErros = function () {
			$( "#input-cp input" )
				.val( statics.cpLimit )
				.blur()
				.tooltipster( "hide" );
			$( "#controle-cp" )
				.val( statics.cpLimit )
				.tooltipster( "hide" );
			$( "#controle-count" )
				.val( statics.countMax )
				.tooltipster( "hide" );
			$( "#controle-limit" )
				.val( statics.limit )
				.tooltipster( "hide" );
		},
		/** @private @method CP 入力フィールド用イベント */
		_editCP = function () {
			var $CPItem = $( "#cp" ),
				$CPInput = $( "#input-cp input" ),
				$CPInputContainer = $( "#input-cp" ),
				$controleCP = $( "#controle-cp" ),
				$both = $( "#input-cp input, #controle-cp" ),
				updateCP = function ( success ) {
					return function () {
						var value = parseInt( $( this ).val(), 10 );

						if ( $( this ).val() === "" ) {
							success( BOUNDS.values.initial );
						} else if ( isNaN( value ) || !inBounds( value, BOUNDS.values ) ) {
							$( this )
								.tooltipster( "show" )
								.focus();
						} else {
							success( value );
						}
					};
				};

			$CPItem
				.click( function () {
					$( this ).hide();
					$CPInputContainer.show();
					$CPInput.val( $( this ).text() ).focus().select();
				} );
			$CPInput
				.blur( updateCP( function ( value ) {
					statics.cpLimit = value;
					localStorage.setItem( "cp", value );

					$CPItem.text( value ).show();
					$CPInputContainer.hide();
					$controleCP.val( value );

					_simulate();
				} ) );
			$controleCP
				.focus( function () {
					$( this ).select();
				} )
				.blur( updateCP( function ( value ) {
					statics.cpLimit = value;
					localStorage.setItem( "cp", value );

					$CPItem.text( value );

					_simulate();
				} ) );
			$both
				.tooltipster( VALUE_ERROR )
				.keypress( enterToBlur );
		},
		/** @private @method 編成数の更新処理 */
		_updateCount = function () {
			var value = parseInt( $( this ).val(), 10 ),
				bounds = {
					floor: 1,
					ceil: 5
				};

			if ( $( this ).val() === "" ) {
				statics.countMax = Math.min( 5, statics.objective.count );
				localStorage.setItem( "count", statics.countMax );
				$( this ).val( statics.countMax );

				_simulate();
			} else if ( isNaN( value ) || !inBounds( value, bounds ) ) {
				$( this )
					.tooltipster( "show" )
					.focus();
			} else {
				statics.countMax = value;
				localStorage.setItem( "count", value );

				_simulate();
			}
		},
		/** @private @method 表示上限値の更新処理 */
		_limitCount = function () {
			var value = parseInt( $( this ).val(), 10 );

			if ( $( this ).val() === "" ) {
				statics.limit = INITIAL_LIMIT;
				localStorage.setItem( "limit", statics.limit );
				$( this ).val( statics.limit );
			} else if ( isNaN( value ) || value < 0 ) {
				$( this )
					.tooltipster( "show" )
					.focus();
			} else {
				statics.limit = value;
				localStorage.setItem( "limit", value );
			}
		},
		/** @private @method
		 * 編成数固定の有無のオプションボタンと編成数指定フィールドのラベルを書き換える
		 * @param {boolean} isCountFix 編成数固定の有無
		 */
		_setFormationFixLabel = function ( isCountFix ) {
			$( "#controle-count" ).prev().text( isCountFix ? "編成数" : "編成数上限" );
			$( "#controle-count-fix" ).text( isCountFix ? "編成数を固定する" : "編成数を固定しない" );
		},
		/** @private @method カード表示中パートナーの一括除外設定と確認ダイアログ */
		_confirmRestingCollectively = function () {
			var partners = [],
				text = "以下のパートナーを一括除外します。<span id=\"resting-partner-list\">";

			$( this ).parents( ".formation-card" ).find( ".partner" ).each( function () {
				partners.push( $( this ).text() );
			} );

			$.each( partners, function () {
				text += this + " / ";
			} );
			text = text.substr( 0, text.length - 3 );
			text += "</span>＊ パートナーは固定設定を解除されます";

			confirm( function () {
				$.each( partners, function () {
					statics.partners[ this ][ PARAMETER_INDEX.fixation ] = false;
					statics.partners[ this ][ PARAMETER_INDEX.resting ] = true;
				} );
				localStorage.setItem( "partners", JSON.stringify( statics.partners ) );
				_simulate();
			}, text, "すべて除外にする", "やめる" );
		},
		/** @private @method ブラウザに保存されている操作状態を読み込んで設定する */
		_loadState = function () {
			var cp = localStorage.getItem( "cp" ),
				count = localStorage.getItem( "count" ),
				isCountFix = localStorage.getItem( "isCountFix" ),
				limit = localStorage.getItem( "limit" ),
				objective = localStorage.getItem( "objective" );

			statics.cpLimit = cp ? parseInt( cp, 10 ) : INITIAL_CP;
			statics.countMax = count ? parseInt( count, 10 ) : 5;
			statics.isCountFix = isCountFix === "true" || false;
			statics.limit = limit ? parseInt( limit, 10 ) : INITIAL_LIMIT;
			statics.objective = objective ? _setObjective( objective ) : _setObjective( INITIAL_OBJECTIVE );

			$( "#cp" ).text( statics.cpLimit );
			$( "#controle-cp" ).val( statics.cpLimit );
			$( "#controle-count" ).val( statics.countMax );
			$( "#controle-limit" ).val( statics.limit );
			_setFormationFixLabel( statics.isCountFix );
		};

	$.fn.tooltipster( "setDefaults", RUMINANT.FormationStaticItems.TOOLTIPSTER_DEFAULT );

	// bind events for objective
	$( "#request-dungeon" ).click( _objectiveDialogue );
	_editCP();

	// bind events for controles
	$( "#controle-count" )
		.focus( function () {
			$( this ).select();
		} )
		.blur( _updateCount )
		.tooltipster( _COUNT_ERROR )
		.keypress( enterToBlur );
	$( "#controle-count-fix" )
		.click( function () {
			statics.isCountFix = !statics.isCountFix;
			_setFormationFixLabel( statics.isCountFix );
			localStorage.setItem( "isCountFix", statics.isCountFix );
			_simulate();
		} );
	$( "#controle-limit" )
		.focus( function () {
			$( this ).select();
		} )
		.blur( _limitCount )
		.tooltipster( _LIMIT_ERROR )
		.keypress( enterToBlur );

	$( "#controle-display" )
		.click( function () {
			if ( !$( this ).hasClass( "disabled" ) ) {
				_seq = 0;
				_displayingFormations = _formations.concat();
				$( "#formations" ).empty();
				$( "#is-change" ).css( "visibility", "hidden" );

				_displayFormations();
			}
		} )
		.mouseenter( function () {
			if ( $( this ).hasClass( "disabled" ) ) {
				$( this ).tooltipster( "show" );
			}
		} )
		.tooltipster( {
			contentAsHTML: true,
			position: "bottom"
		} );
	$( "#more-formations" ).click( _displayFormations );

	$( "#formations" )
		.on( "click", ".button-resting-collectively", _confirmRestingCollectively )
		.on( "mouseover", ".button-resting-collectively", function () {
			$( this )
				.tooltipster( {
					content: "このカードに記載されている<br>パートナーをすべて除外に設定します",
					contentAsHTML: true,
					theme: "tooltipster-help",
					timer: 0
				} )
				.tooltipster( "show" );
		} )
		.on( "mouseleave", ".button-resting-collectively", function () {
			$( this ).tooltipster( "destroy" );
		} );

	// initialize
	_loadState();

	return {
		resetEditErros: _resetEditErros,
		simulate: _simulate
	};
}() );

/** boot */
( function () {
	"use strict";

	$( "#index li" )
		.click( function () {
			var tab = $( this ).data( "index" );

			$( ".tab" ).css( "display", "none" );
			$( "#index li" ).removeClass( "opening" );
			$( this ).addClass( "opening" );
			$( "#" + tab ).css( "display", "block" );
			$( "#toc-" + tab ).css( "display", "block" );

			if ( tab === "formation" ) {
				RUMINANT.SimulateFormation.simulate();
			} else {
				RUMINANT.ManagementOfSoulPartners.inputReset();
				RUMINANT.ManagementOfSoulPartners.displayPartners();

				RUMINANT.SimulateFormation.resetEditErros();
				$( "#controle-display" ).tooltipster( "hide" );
			}
		} );

	$( "#index [data-index=formation]" ).click();
}() );
