/*global REWO */

( function () {
	"use strict";

	var /** dependence */
		TITLES = REWO.SupusData.TITLES,

		primary   = REWO.SupusData.primary,
		secondary = REWO.SupusData.secondary,
		tertiary  = REWO.SupusData.tertiary,

		period    = REWO.SupusData.period,
		divisor   = REWO.SupusData.divisor,

		/** constant */
		DEFAULT_NAME = "お前",
		PLACE_HOLDER = "クリックして名前の入力",

		/** config */
		config = {},
		previous     = -1,
		name         = "",
		displayName  = false,
		isSimplicity = true,

		isDaily = false,
		tweetText = "",

		/** 設定をブラウザに保存する */
		storeConfig = function () {
			config.previous     = previous;
			config.name         = name;
			config.displayName  = displayName;
			config.isSimplicity = isSimplicity;

			localStorage.setItem( "supus", JSON.stringify( config ) );
		},

		/** 称号を描画する */
		display  = function ( serial ) {
			REWO.supus( serial );

			// HTML に描画
			$( "#supus-lines" ).html(
				isSimplicity ?
					( isDaily ? "<span id=\"supus-daily\">今日の</span>" : "" ) + ( displayName ? name : DEFAULT_NAME ) + "に相応しい名を思いついたぞッ！<br>" +
					( displayName ? name : DEFAULT_NAME ) + "の名は、<span id=\"supus-title\">" + REWO.supus.title + "</span>！" :
					"<span id=\"supus-title\">" + REWO.supus.title + "</span>"
			);
			$( "#supus-id, #serial" ).text( REWO.supus.serial );

			// ツイート用テキスト
			tweetText = encodeURIComponent( ( isDaily ? "今日の" : "" ) + ( displayName ? name : DEFAULT_NAME ) + "に相応しい名を思いついたぞッ！" ) + "%0a" +
						encodeURIComponent( ( displayName ? name : DEFAULT_NAME ) + "の名は「" + REWO.supus.title + "」！" );

			// リストから称号選択
			$( "#list .selected" ).removeClass( "selected" );
			$( "#list tr:nth-child( " + ( Math.floor( serial / divisor )                + 1 ) + ") td:nth-child( 2 )" ).addClass( "selected" );
			$( "#list tr:nth-child( " + ( Math.floor( ( serial % divisor ) / tertiary ) + 1 ) + ") td:nth-child( 4 )" ).addClass( "selected" );
			$( "#list tr:nth-child( " + ( ( serial % divisor % tertiary )               + 1 ) + ") td:nth-child( 6 )" ).addClass( "selected" );

			// 後処理
			previous = REWO.supus.serial;
			storeConfig();
		},

		/** 称号を無作為抽出 */
		randomChoice = function () {
			return Math.floor( Math.random() * period );
		},
		/** 名前から日替わり抽出 */
		dailyChoice = function ( name ) {
			var daily = new Math.seedrandom( name + Math.floor( ( Date.now() / 1000 + 32400 ) / 86400 ) );
			return  Math.floor( daily() * period );
		},

		/** 名前表示用ボタンの操作 */
		setDisplayNameButton = function ( state ) {
			displayName = state;

			$( "#display-name" ).text( displayName ? "名前を表示する" : "名前を表示しない" );
			display( previous );
		},
		/** セリフ表示ボタンの操作 */
		setSimplicityButton = function ( state ) {
			isSimplicity = state;

			$( "#display-simplicity" ).text( isSimplicity ? "セリフつき" : "セリフなし" );
			display( previous );
		},
		/** 日替わりボタンの操作 */
		setDailyButton = function ( state ) {
			isDaily = state;

			if ( isDaily ) {
				$( "#daily" ).addClass( "active" );
			} else {
				$( "#daily" ).removeClass( "active" );
			}
		},

		/** 称号候補リストを作成する */
		buildList = function () {
			var i = 0,
				common = Math.min( primary, secondary, tertiary );

			for ( i = 0; i < common; i += 1 ) {
				$( "#list" ).append(
					"<tr>" +
						"<td>" + i + "</td><td data-row=\"" + i + "\" data-col=\"" + 0 + "\">" + TITLES[ 0 ][ i ] + "</td>" +
						"<td>" + i + "</td><td data-row=\"" + i + "\" data-col=\"" + 1 + "\">" + TITLES[ 1 ][ i ] + "</td>" +
						"<td>" + i + "</td><td data-row=\"" + i + "\" data-col=\"" + 2 + "\">" + TITLES[ 2 ][ i ] + "</td>" +
					"</tr>"
				);
			}
			for ( i = common; i < Math.max( primary, secondary, tertiary ); i += 1 ) {
				$( "#list" ).append(
					"<tr>" +
						"<td>" + i + "</td><td data-row=\"" + i + "\" data-col=\"" + 0 + "\">" + ( TITLES[ 0 ][ i ] ? TITLES[ 0 ][ i ] : "" ) + "</td>" +
						"<td>" + i + "</td><td data-row=\"" + i + "\" data-col=\"" + 1 + "\">" + ( TITLES[ 1 ][ i ] ? TITLES[ 1 ][ i ] : "" ) + "</td>" +
						"<td>" + i + "</td><td data-row=\"" + i + "\" data-col=\"" + 2 + "\">" + ( TITLES[ 2 ][ i ] ? TITLES[ 2 ][ i ] : "" ) + "</td>" +
					"</tr>"
				);
			}

			$( "#list tr:nth-child(  64 ) td:nth-child( 4 )" ).append( "<span class=\"footnote\"><a href=\"#1-サキュバス好きの\">*1</a></span>" );
			$( "#list tr:nth-child( 133 ) td:nth-child( 2 )" ).append( "<span class=\"footnote\"><a href=\"#2-瀕死しか狙わない\">*2</a></span>" );
			$( "#list tr:nth-child( 134 ) td:nth-child( 4 )" ).append( "<span class=\"footnote\"><a href=\"#2-瀕死しか狙わない\">*2</a></span>" );
			$( "#list tr:nth-child( 135 ) td:nth-child( 2 )" ).append( "<span class=\"footnote\"><a href=\"#3-復習心に囚われる\">*3</a></span>" );
		},
		/** 設定をブラウザから設定を読み込むと共にページを初期化する */
		fetchConfig = function () {
			var fetchConfig = localStorage.getItem( "supus" );

			config = JSON.parse( fetchConfig || "{\"name\":\"\",\"previous\":-1,\"displayName\":false,\"isSimplicity\":true}" );

			previous     = config.previous < 0 ? randomChoice() : config.previous;
			name         = config.name;
			displayName  = config.displayName;
			isSimplicity = config.isSimplicity;

			if ( name === "" ) {
				$( "#your-name" ).text( PLACE_HOLDER ).addClass( "initial" );
				$( "#daily, #display-name" ).addClass( "disabled" );
			} else {
				$( "#your-name" ).text( name );
				$( "#daily, #display-name" ).removeClass( "disabled" );
			}

			setDisplayNameButton( displayName );
			setSimplicityButton( isSimplicity );
		};

	buildList();
	fetchConfig();

	// Supus id の上限表示用
	$( "#period" ).text( period - 1 );

	// Supus id 操作用
	$( "#serial" )
		.click( function () {
			$( this ).hide();
			$( "#serial-input input" ).val( $( this ).text() ).show().focus().select();
		} );
	$( "#serial-input input" )
		.blur( function () {
			var input = $( this ).val(),
				serial = isNaN( input ) ? previous : ( 0 <= input && input < period ) ? Math.floor( input ) : previous;

			$( this ).hide();
			$( "#serial" ).text( serial ).show();

			display( serial );
		} );

	// Your Name 操作用
	$( "#your-name" )
		.click( function () {
			$( this ).hide();
			if ( $( this ).hasClass( "initial" ) ) {
				$( "#your-name-input input" ).val( "" ).show().focus();
			} else {
				$( "#your-name-input input" ).val( $( this ).text() ).show().focus().select();
			}
		} );
	$( "#your-name-input input" )
		.blur( function () {
			var input = $( this ).val();

			$( this ).hide();
			if ( input === "" ) {
				$( "#your-name" ).text( PLACE_HOLDER ).addClass( "initial" ).show();
				$( "#daily, #display-name" ).addClass( "disabled" );

				name = "";
				setDailyButton( false );
				if ( displayName ) {
					setDisplayNameButton( false );
				} else {
					storeConfig();
				}
			} else {
				$( "#your-name" ).text( input ).removeClass( "initial" ).show();
				$( "#daily, #display-name" ).removeClass( "disabled" );

				name = input;
				if ( isDaily ) {
					previous = dailyChoice( name );
				}
				setDisplayNameButton( true );
			}
		} );

	// つぶやくボタン
	$( "#twitter" )
		.click( function () {
			window.open( "https://twitter.com/intent/tweet?text=" + tweetText + "&url=" + encodeURIComponent( "https://miramiku.github.io/post/wizon/tools/supus/" ) + "&hashtags=" + encodeURIComponent( "スーパスメーカー" ), "", "width=550, height=550, top=" + ( window.parent.screen.height / 2 - 275 ) + ", left=" + ( window.parent.screen.width / 2 - 275 ) );
		} );
	// 称号のランダム抽出ボタン
	$( "#random" )
		.click( function () {
			setDailyButton( false );
			display( randomChoice() );
		} );
	// 日替わり抽出ボタン
	$( "#daily" )
		.click( function () {
			if ( !$( this ).hasClass( "disabled" ) ) {
				setDailyButton( true );
				display( dailyChoice( name ) );
			}
		} );

	// セリフ表示の有無
	$( "#display-simplicity" )
		.click( function () {
			setSimplicityButton( !isSimplicity );
		} );
	// 名前表示の有無
	$( "#display-name" )
		.click( function () {
			if ( !$( this ).hasClass( "disabled" ) ) {
				setDisplayNameButton( !displayName );
			}
		} );

	// 称号候補リストから直接称号選択用イベント
	$( "#list td:nth-child( 2n )" )
		.on( "click", function () {
			var serial = 0;

			if ( $( this ).text() !== "" ) {
				setDailyButton( false );
				$( "#list td:nth-child( " + ( ( $( this ).data( "col" ) + 1 ) * 2 ) + " )" ).removeClass( "selected" );
				$( this ).addClass( "selected" );

				$( ".selected" ).each( function () {
					var row = $( this ).data( "row" ),
						col = $( this ).data( "col" );

					switch( col ) {
					case 0:
						serial += row * divisor;
						break;
					case 1:
						serial += row * tertiary;
						break;
					case 2:
						serial += row;
						break;
					}
				} );

				display( serial );
			}
		} );
} () );
