/*global AmCharts */

( function () {
	"use strict";

	var
		COL = {
			soulPoints: 0,
			levelCap: 1,
			expBoost: 2,
			skillPoints: 3,
			skillSlots: 4,
			skillPointsBonus: 5,
			customSkillSlots: 6,
			capacityPoints: 7,
			soulMaterialCapacity: 8,
			accumulationRate: 9
		},
		RAW = [
			/*  1 */[ 1, 7, null, null, null, null, null, null, null, null ],
			/*  2 */[ 30, 15, null, null, null, null, null, null, null, null ],
			/*  3 */[ 500, 15, 5, 3, 3, null, null, null, 1, 1 ],
			/*  4 */[ 2300, 20, 5, 3, 3, null, null, null, 2, 1 ],
			/*  5 */[ 8000, 20, 10, 3, 3, null, null, 6, 2, 1 ],
			/*  6 */[ 18000, 30, 15, 6, 3, null, null, 7, 3, 1 ],
			/*  7 */[ 41000, 30, 20, 6, 3, null, 1, 7, 3, 1 ],
			/*  8 */[ 71000, 40, 20, 10, 3, null, 1, 7, 4, 2 ],
			/*  9 */[ 130000, 40, 20, 10, 4, null, 1, 8, 4, 2 ],
			/* 10 */[ 200000, 40, 25, 15, 4, 1, 1, 8, 5, 2 ],
			/* 11 */[ 330000, 40, 25, 15, 4, 1, 1, 10, 5, 2 ],
			/* 12 */[ 580000, 40, 30, 20, 4, 1, 1, 11, 5, 2 ],
			/* 13 */[ 1030000, 40, 30, 20, 4, 1, 1, 12, 6, 3 ],
			/* 14 */[ 1840000, 40, 30, 25, 4, 1, 1, 13, 6, 3 ],
			/* 15 */[ 3300000, 40, 30, 25, 4, 2, 1, 14, 7, 3 ],
			/* 16 */[ 5900000, 40, 30, 25, 5, 2, 1, 15, 7, 3 ],
			/* 17 */[ 11200000, 50, 30, 25, 5, 2, 2, 16, 8, 3 ],
			/* 18 */[ 26300000, 50, 30, 30, 5, 2, 2, 17, 8, 4 ],
			/* 19 */[ 67100000, 55, 30, 30, 5, 3, 2, 18, 9, 4 ],
			/* 20 */[ 189600000, 60, 30, 35, 5, 6, 3, 18, 10, 4 ],
			/* 21 */[ 410100000, 65, 30, 35, 5, 9, 4, 19, 10, 5 ],
			/* 22 */[ 807000000, 70, 35, 38, 6, 12, 5, 19, 10, 5 ],
			/* 23 */[ 1402350000, 70, 35, 38, 6, 15, 5, 20, 10, 5 ],
			/* 24 */[ 2295375000, 70, 35, 38, 6, 18, 5, 21, 10, 5 ],
			/* 25 */[ 3980000000, 70, 40, 40, 6, 19, 5, 21, 11, 5 ],
			/* 26 */[ 7150000000, 70, 40, 40, 6, 20, 5, 22, 11, 6 ],
			/* 27 */[ 13200000000, 70, 40, 40, 7, 22, 5, 23, 11, 6 ],
			/* 28 */[ 24200000000, null, 45, 42, 7, 24, 5, 24, 12, 6 ],
			/* 29 */[ 44200000000, null, 45, 44, 7, 25, 5, 25, 12, 6 ],
			/* 30 */[ 82400000000, null, 45, 47, 7, 26, 5, 26, 12, 7 ]
		],
		LEVEL = [
			/*  1 */[ 1, 1 ], /*  2 */[ 100, 153 ],
			/*  3 */[ 315, 459 ], /*  4 */[ 745, 1071 ],
			/*  5 */[ 1605, 2295 ], /*  6 */[ 3325, 4743 ],
			/*  7 */[ 6765, 9639 ], /*  8 */[ 13473, 19431 ],
			/*  9 */[ 26218, 38525 ], /* 10 */[ 49797, 74805 ],
			/* 11 */[ 93238, 141922 ], /* 12 */[ 166511, 262732 ],
			/* 13 */[ 292774, 474150 ], /* 14 */[ 501109, 833560 ],
			/* 15 */[ 834445, 1426588 ], /* 16 */[ 1351115, 2375432 ],
			/* 17 */[ 2126121, 3846140 ], /* 18 */[ 3288629, 6052202 ],
			/* 19 */[ 5032391, 9317173 ], /* 20 */[ 7648034, 14051382 ],
			/* 21 */[ 11440717, 20679275 ], /* 22 */[ 16940107, 29958324 ],
			/* 23 */[ 24639253, 42485041 ], /* 24 */[ 35033100, 59396109 ],
			/* 25 */[ 49064794, 81380497 ], /* 26 */[ 67305996, 109960202 ],
			/* 27 */[ 91019558, 145684832 ], /* 28 */[ 119475833, 190340621 ],
			/* 29 */[ 153623363, 243927567 ], /* 30 */[ 193917448, 308231902 ],
			/* 31 */[ 241464469, 382181888 ], /* 32 */[ 296619013, 467224371 ],
			/* 33 */[ 350598284, 565023227 ], /* 34 */[ 434174445, 677491912 ],
			/* 35 */[ 518787031, 806830899 ], /* 36 */[ 615245379, 955570734 ],
			/* 37 */[ 725207895, 1126621544 ], /* 38 */[ 849465539, 1323329976 ],
			/* 39 */[ 989876676, 1549544673 ], /* 40 */[ 1147137150, 1807429427 ],
			/* 41 */[ 1323268881, 2101418047 ], /* 42 */[ 1518755102, 2436565073 ],
			/* 43 */[ 1735787007, 2818632684 ], /* 44 */[ 1976670222, 3254189759 ],
			/* 45 */[ 2244050590, 3750724826 ], /* 46 */[ 2540842799, 4316774801 ],
			/* 47 */[ 2870282151, 4962071773 ], /* 48 */[ 3387855660, 5697710322 ],
			/* 49 */[ 3641862058, 6536338267 ], /* 50 */[ 4092413528, 7492374124 ],
			/* 51 */[ 4597031175, 8582255002 ], /* 52 */[ 5162202939, 9824719202 ],
			/* 53 */[ 5800847033, 11241128390 ], /* 54 */[ 6528901300, 12855834865 ],
			/* 55 */[ 7358883165, 14696600246 ], /* 56 */[ 8313362309, 16795072780 ],
			/* 57 */[ 9411013325, 19187331470 ], /* 58 */[ 10673311993, 21914506375 ],
			/* 59 */[ 12137578448, 25023485768 ], /* 60 */[ 13836127535, 28660991657 ],
			/* 61 */[ 15823429968, 32989623666 ], /* 62 */[ 18148573814, 38140695756 ],
			/* 63 */[ 20892243553, 44425003705 ], /* 64 */[ 24129773844, 52217545563 ],
			/* 65 */[ 27982434891, 62347849978 ], /* 66 */[ 32567101537, 75314693629 ],
			/* 67 */[ 38068701511, 92171466175 ], /* 68 */[ 44670621481, 114422477216 ],
			/* 69 */[ 52592925445, 144238832011 ], /* 70 */[ 62921685493, 185527405914 ],
			/* 71 */[ 75316197550, 225948592652 ], /* 72 */[ 90189612020, 270568836059 ],
			/* 73 */[ 108037709383, 324113128148 ], /* 74 */[ 129455426218, 388366278655 ],
			/* 75 */[ 155156686421, 465470059263 ], /* 76 */[ 185998198664, 557994595992 ],
			/* 77 */[ 223008013356, 669024040067 ], /* 78 */[ 267419790986, 802259372958 ],
			/* 79 */[ 320713924142, 962141772426 ], /* 80 */[ 384666883930, 1154000651789 ],
			/* 81 */[ 453736080501, 1365045419088 ], /* 82 */[ 528330812797, 1597194663117 ],
			/* 83 */[ 608893123677, 1852558831549 ], /* 84 */[ 695900419427, 2133459416824 ],
			/* 85 */[ 789868298837, 2442450060626 ], /* 86 */[ 891353608600, 2782339768809 ],
			/* 87 */[ 1000957743144, 3156218447810 ], /* 88 */[ 1119330208452, 3567484994711 ],
			/* 89 */[ 1247172470985, 4019878196302 ], /* 90 */[ 1385242113520, 4517510718053 ]
		],
		COLORS = {
			AzaleaPink: "#e6679a",
			CadmiumOrange: "#f5926c",
			Drizzle: "#9a9b98",
			Gargoyle: "#666766",
			LunarRock: "#c8cacc",
			ParrotGreen: "#8fb34c",
			RiverBlue: "#3bb3d0"
		},
		FONT = "Candara, Meiryo, sans-self",
		dataProvider = function ( request ) {
			var data = [];

			$.each( RAW, function ( rank ) {
				var record = {},
					raw = this;

				record.rank = rank + 1;

				$.each( request, function () {
					record[ this ] = raw[ COL[ this ] ];
				} );

				data.push( record );
			} );

			return data;
		},
		levelProvider = function () {
			var data = [];

			$.each( LEVEL, function ( level ) {
				data.push( {
					level: level + 1,
					general: this[ 0 ],
					elite: this[ 1 ]
				} );
			} );

			return data;
		},
		chart = function ( valueAxis, graphs, data, legend, category ) {
			return {
				type: "serial",
				theme: "none",
				categoryField: category || "rank",
				addClassNames: true,
				startDuration: 1,
				creditsPosition: "bottom-right",
				color: COLORS.Gargoyle,
				fontFamily: FONT,
				fontSize: 12,
				language: "ja",
				legend: {
					align: "center",
					color: COLORS.Gargoyle,
					divId: "legend",
					valueWidth: legend || 50,
					useGraphSettings: true
				},
				dataProvider: data,
				valueAxes: valueAxis,
				graphs: graphs,
				chartCursor: {
					fullWidth: true,
					cursorAlpha: 0.1,
					cursorColor: COLORS.ParrotGreen,
					categoryBalloonAlpha: 0.5,
					categoryBalloonColor: COLORS.ParrotGreen,
					bulletSize: 12
				},
				categoryAxis: {
					autoGridCount: true,
					axisAlpha: 0.4,
					axisColor: COLORS.Gargoyle,
					gridAlpha: 0.4,
					gridColor: COLORS.LunarRock
				}
			};
		},
		valueAxis = function ( id, title, position, logarithmic ) {
			return {
				axisAlpha: 0.4,
				axisColor: COLORS.Gargoyle,
				gridAlpha: position ? 0 : 0.4,
				gridColor: COLORS.LunarRock,
				id: id || "",
				logarithmic: logarithmic || false,
				position: position || "left",
				title: title,
				titleBold: false,
				useScientificNotation: logarithmic || false
			};
		},
		graph = function ( id, title, valueField, lineColor, valueAxis, type ) {
			return {
				animationPlayed: true,
				balloon: {
					borderAlpha: 0.4,
					color: COLORS.Gargoyle,
					fillAlpha: 0.4,
					shadowAlpha: 0.5,
					shadowColor: COLORS.Drizzle
				},
				bullet: "none",
				fontSize: 12,
				lineColor: lineColor,
				lineAlpha: 0.4,
				id: id,
				lineThickness: 2,
				title: title,
				type: type || "line",
				valueAxis: valueAxis || null,
				valueField: valueField
			};
		},
		makeChart = {
			"chart-points": chart(
				[ valueAxis( 0, "Soul Points", 0, true ) ],
				[ graph( "g1", "Soul Points Required", "soulPoints", COLORS.AzaleaPink, 0, "smoothedLine" ) ],
				dataProvider( [ "soulPoints" ] ),
				130
			),
			"chart-exps": chart(
				[ valueAxis( 0, "Experience Points", 0, true ) ],
				[
					graph( "g1", "General Classes", "general", COLORS.AzaleaPink, 0, "smoothedLine" ),
					graph( "g2", "Elite Classses", "elite", COLORS.ParrotGreen, 0, "smoothedLine" )
				],
				levelProvider(),
				130,
				"level"
			),
			"chart-levels": chart(
				[ valueAxis( 0, "Character Levels" ) ],
				[
					graph( "g1", "Level Cap", "levelCap", COLORS.AzaleaPink ),
					graph( "g2", "Exp Boost", "expBoost", COLORS.ParrotGreen )
				],
				dataProvider( [ "levelCap", "expBoost" ] )
			),
			"chart-materials": chart(
				[ valueAxis( 0, "Levels" ) ],
				[
					graph( "g1", "Capacity", "soulMaterialCapacity", COLORS.AzaleaPink ),
					graph( "g2", "Accumulation Rate", "accumulationRate", COLORS.ParrotGreen )
				],
				dataProvider( [ "soulMaterialCapacity", "accumulationRate" ] )
			),
			"chart-skills": chart(
				[
					valueAxis( "pointsAxis", "Points" ),
					valueAxis( "slotsAxis", "Slots", "right" )
				],
				[
					graph( "g1", "Inheritance Skill Points", "skillPoints", COLORS.AzaleaPink, "pointsAxis" ),
					graph( "g2", "Skill Point Bonus", "skillPointsBonus", COLORS.Gargoyle, "pointsAxis" ),
					graph( "g3", "Inheritance Skill Slots", "skillSlots", COLORS.ParrotGreen, "slotsAxis" ),
					graph( "g4", "Capacity Points", "capacityPoints", COLORS.RiverBlue, "pointsAxis" ),
					graph( "g5", "Custom Skill Slots", "customSkillSlots", COLORS.CadmiumOrange, "slotsAxis" )
				],
				dataProvider( [ "skillPoints", "skillPointsBonus", "skillSlots", "capacityPoints", "customSkillSlots" ] )
			)
		},
		handle = function () {
			if ( $( "#chart" ).offset().top - $( window ).height() < $( window ).scrollTop() ) {
				$( "#chart-points" )
					.click();

				handle = function () { };
			}
		};

	$( "#chart-select-area > span" )
		.on( "click", "span", function () {
			var $this = $( this );

			$( "#chart-select-area > span > span" )
				.removeClass( "active" );
			$this
				.addClass( "active" );

			AmCharts.makeChart( "chart", makeChart[ $this.attr( "id" ) ] );
		} );

	$( window )
		.scroll( function () {
			handle();
		} );
}() );

( function () {
	"use strict";

	var
		BONUSES = [
			[ 1, "レベルキャップ", "Level 7", "2015/04/28#180 廃止", 1 ],
			[ 1, "許可", "アバター着用", "", 0 ],
			[ 1, "許可", "パーティー作成", "", 0 ],
			[ 1, "許可", "ユニオン加入", "", 0 ],
			[ 1, "その他", "初心者保護", "", 0 ],
			[ 2, "レベルキャップ", "Level 12", "2011/11/08#004 廃止", 1 ],
			[ 2, "レベルキャップ", "Level 15", "2011/11/08#004 追加<br>2015/04/28#180 廃止", 1 ],
			[ 2, "ステータスボーナス", "ALL+1", "", 0 ],
			[ 2, "許可", "ジェムショップ利用", "", 0 ],
			[ 2, "許可", "初心者保護解除（任意）", "2013/10/29#104 追加", 0 ],
			[ 2, "許可", "アイテムルート可能", "初心者保護解除時", 0 ],
			[ 2, "許可", "プレイヤーキル", "初心者保護解除時", 0 ],
			[ 2, "その他", "初心者保護解除", "2013/10/29#104 削除", 1 ],
			[ 3, "継承可能スキルポイント", "+3 points", "2013/10/29#104 追加", 0 ],
			[ 3, "スキル継承スロット", "+3 slots", "2013/10/29#104 追加", 0 ],
			[ 3, "経験値ブースト", "Level 5", "2011/11/08#004 追加", 0 ],
			[ 3, "ソウルマテリアル最大保有量", "Level 1", "", 0 ],
			[ 3, "許可", "鍛錬", "", 0 ],
			[ 3, "許可", "転職可能", "2013/10/29#104 追加", 0 ],
			[ 3, "許可", "シャウト", "", 0 ],
			[ 3, "許可", "ユニオン結成", "", 0 ],
			[ 3, "その他", "ソウルマテリアル自動取得", "", 0 ],
			[ 4, "レベルキャップ", "Level 20", "2015/04/28#180 廃止", 1 ],
			[ 4, "ソウルマテリアル最大保有量", "Level 2", "", 0 ],
			[ 5, "経験値ブースト", "Level 10", "2011/11/08#004 追加", 0 ],
			[ 5, "継承可能スキルポイント", "+3 points", "2013/10/29#104 廃止", 1 ],
			[ 5, "スキル継承スロット", "+3 slots", "2013/10/29#104 廃止", 1 ],
			[ 5, "ソウルパートナー CP", "+6", "2014/03/25#124 追加", 0 ],
			[ 5, "蘇生成功率", "+3%", "", 0 ],
			[ 5, "鑑定額割引", "-15%", "", 0 ],
			[ 5, "許可", "ジェムソケット移植", "", 0 ],
			[ 5, "許可", "特殊鍛錬", "", 0 ],
			[ 5, "許可", "転職可能", "2013/10/29#104 廃止", 1 ],
			[ 6, "レベルキャップ", "Level 30", "2015/04/28#180 廃止", 1 ],
			[ 6, "経験値ブースト", "Level 15", "2011/11/08#004 追加", 0 ],
			[ 6, "継承可能スキルポイント", "+3 points (total 6)", "", 0 ],
			[ 6, "ソウルマテリアル最大保有量", "Level 3", "", 0 ],
			[ 6, "マイクローク", "+5 slots", "", 0 ],
			[ 6, "その他", "初心者保護解除", "2013/10/29#104 より<br>2015/03/10#173 まで", 1 ],
			[ 7, "経験値ブースト", "Level 20", "", 0 ],
			[ 7, "カスタムスキルスロット", "+1 slot", "2012/06/26#036 追加", 0 ],
			[ 7, "ソウルパートナー CP", "+1 (total 7)", "2014/03/25#124 追加", 0 ],
			[ 8, "レベルキャップ", "Level 40", "2015/04/28#180 廃止", 1 ],
			[ 8, "継承可能スキルポイント", "+4 points (total 10)", "", 0 ],
			[ 8, "ソウルマテリアル最大保有量", "Level 4", "", 0 ],
			[ 8, "ソウルマテリアル蓄積速度", "Level 2", "", 0 ],
			[ 8, "鑑定額割引", "-15% (total -30%)", "", 0 ],
			[ 9, "スキル継承スロット", "+1 slot (total 4)", "", 0 ],
			[ 9, "ソウルパートナー CP", "+1 (total 8)", "2014/03/25#124 追加", 0 ],
			[ 9, "蘇生成功率", "+2% (total 5%)", "", 0 ],
			[ 10, "経験値ブースト", "Level 30", "2011/11/08#004 まで", 1 ],
			[ 10, "経験値ブースト", "Level 25", "2011/11/08#004 より", 0 ],
			[ 10, "継承可能スキルポイント", "+5 points (total 15)", "", 0 ],
			[ 10, "ソウルマテリアル最大保有量", "Level 5", "", 0 ],
			[ 10, "ステータスボーナス", "ALL+1 (total 2)", "", 0 ],
			[ 10, "スキルポイントボーナス", "+1 point", "2016/10/05#253 追加", 0 ],
			[ 11, "ソウルパートナー CP", "+2 (total 10)", "2014/03/25#124 追加", 0 ],
			[ 11, "鑑定額割引", "-15% (total -45%)", "", 0 ],
			[ 11, "マイクローク", "+5 slots (total 10)", "", 0 ],
			[ 11, "許可", "鍛錬石 Lv3 販売（鍛冶屋）", "", 0 ],
			[ 11, "その他", "初心者保護解除", "2015/03/10#173 より", 0 ],
			[ 12, "経験値ブースト", "Level 30", "", 0 ],
			[ 12, "継承可能スキルポイント", "+5 points (total 20)", "", 0 ],
			[ 12, "ソウルパートナー CP", "+1 (total 11)", "2014/03/25#124 追加", 0 ],
			[ 13, "ソウルパートナー CP", "+1 (total 12)", "2014/03/25#124 追加", 0 ],
			[ 13, "ソウルマテリアル最大保有量", "Level 6", "", 0 ],
			[ 13, "ソウルマテリアル蓄積速度", "Level 3", "", 0 ],
			[ 14, "継承可能スキルポイント", "+5 points (total 25)", "", 0 ],
			[ 14, "ソウルパートナー CP", "+1 (total 13)", "2014/03/25#124 追加", 0 ],
			[ 14, "マイクローク", "+5 slots (total 15)", "", 0 ],
			[ 15, "ソウルパートナー CP", "+1 (total 14)", "2014/03/25#124 追加", 0 ],
			[ 15, "ソウルマテリアル最大保有量", "Level 7", "", 0 ],
			[ 15, "スキルポイントボーナス", "+1 point (total 2)", "2016/10/05#253 追加", 0 ],
			[ 15, "ステータスボーナス", "ALL+1 (total 3)", "", 0 ],
			[ 16, "スキル継承スロット", "+1 slot (total 5)", "", 0 ],
			[ 16, "ソウルパートナー CP", "+1 (total 15)", "2014/03/25#124 追加", 0 ],
			[ 16, "マイクローク", "+5 slots (total 20)", "", 0 ],
			[ 17, "レベルキャップ", "Level 50", "2015/04/28#180 廃止", 1 ],
			[ 17, "カスタムスキルスロット", "+1 slot (total 2)", "2012/06/26#036 追加", 0 ],
			[ 17, "ソウルパートナー CP", "+1 (total 16)", "2014/03/25#124 追加", 0 ],
			[ 17, "ソウルマテリアル最大保有量", "Level 8", "", 0 ],
			[ 18, "継承可能スキルポイント", "+5 points (total 30)", "", 0 ],
			[ 18, "ソウルパートナー CP", "+1 (total 17)", "2014/03/25#124 追加", 0 ],
			[ 18, "ソウルマテリアル蓄積速度", "Level 4", "", 0 ],
			[ 19, "レベルキャップ", "Level 55", "2013/05/28#082 追加<br>2015/04/28#180 廃止", 1 ],
			[ 19, "スキルポイントボーナス", "+1 point (total 3)", "2013/08/30#095 追加", 0 ],
			[ 19, "ソウルパートナー CP", "+1 (total 18)", "2014/03/25#124 追加", 0 ],
			[ 19, "ソウルマテリアル最大保有量", "Level 9", "", 0 ],
			[ 19, "ステータスボーナス", "ALL+1 (total 4)", "", 0 ],
			[ 19, "鑑定額割引", "-15% (total -60%)", "", 0 ],
			[ 20, "レベルキャップ", "Level 60", "2013/08/30#095 追加<br>2015/04/28#180 廃止", 1 ],
			[ 20, "継承可能スキルポイント", "+5 points (total 35)", "", 0 ],
			[ 20, "スキルポイントボーナス", "+3 points (total 6)", "2013/08/30#095 追加", 0 ],
			[ 20, "ソウルマテリアル最大保有量", "Level 10", "", 0 ],
			[ 21, "カスタムスキルスロット", "+1 slot (total 3)", "", 0 ],
			[ 21, "スキルポイントボーナス", "+3 points (total 9)", "2013/08/30#095 追加", 0 ],
			[ 21, "ソウルパートナー CP", "+1 (total 19)", "2014/03/25#124 追加", 0 ],
			[ 21, "ソウルマテリアル蓄積速度", "Level 5", "", 0 ],
			[ 21, "ステータスボーナス", "ALL+1 (total 5)", "", 0 ],
			[ 22, "レベルキャップ", "Level 70", "2014/04/28#129 追加<br>2015/04/28#180 廃止", 1 ],
			[ 22, "経験値ブースト", "Level 35", "", 0 ],
			[ 22, "継承可能スキルポイント", "+3 points (total 38)", "2014/12/16#162 追加", 0 ],
			[ 22, "スキル継承スロット", "+1 slot (total 6)", "2014/12/16#162 追加", 0 ],
			[ 22, "カスタムスキルスロット", "+1 slot (total 4)", "", 0 ],
			[ 22, "スキルポイントボーナス", "+3 points (total 12)", "2013/08/30#095 追加", 0 ],
			[ 23, "スキルポイントボーナス", "+3 points (total 15)", "", 0 ],
			[ 23, "ソウルパートナー CP", "+1 (total 20)", "2014/03/25#124 追加", 0 ],
			[ 23, "ステータスボーナス", "ALL+1 (total 6)", "", 0 ],
			[ 24, "スキルポイントボーナス", "+3 points (total 18)", "", 0 ],
			[ 24, "ソウルパートナー CP", "+1 (total 21)", "2014/03/25#124 追加", 0 ],
			[ 24, "ステータスボーナス", "ALL+1 (total 7）", "", 0 ],
			[ 25, "経験値ブースト", "Level 40", "", 0 ],
			[ 25, "継承可能スキルポイント", "+2 points (total 40)", "2014/12/16#162 追加", 0 ],
			[ 25, "スキルポイントボーナス", "+1 point (total 19)", "", 0 ],
			[ 25, "ソウルマテリアル最大保有量", "Level 11", "", 0 ],
			[ 25, "ステータスボーナス", "ALL+1 (total 8）", "", 0 ],
			[ 25, "モンスター討伐時ゴールド取得量", "10%", "", 0 ],
			[ 26, "スキルポイントボーナス", "+1 point (total 20)", "", 0 ],
			[ 26, "ソウルパートナー CP", "+1 (total 22)", "", 0 ],
			[ 26, "ソウルマテリアル蓄積速度", "Level 6", "", 0 ],
			[ 26, "ステータスボーナス", "ALL+1 (total 9）", "", 0 ],
			[ 27, "スキル継承スロット", "+1 slot (total 7)", "2014/12/16#162 追加", 0 ],
			[ 27, "スキルポイントボーナス", "+2 points (total 22)", "", 0 ],
			[ 27, "ソウルパートナー CP", "+1 (total 23)", "", 0 ],
			[ 27, "ステータスボーナス", "ALL+1 (total 10）", "", 0 ],
			[ 27, "被略奪時間", "+10%", "", 0 ],
			[ 28, "経験値ブースト", "Level 45", "", 0 ],
			[ 28, "継承可能スキルポイント", "+2 points (total 42)", "", 0 ],
			[ 28, "スキルポイントボーナス", "+2 points (total 24)", "", 0 ],
			[ 28, "ソウルパートナー CP", "+1 (total 24)", "", 0 ],
			[ 28, "ソウルマテリアル最大保有量", "Level 12", "", 0 ],
			[ 29, "継承可能スキルポイント", "+2 points (total 44)", "", 0 ],
			[ 29, "スキルポイントボーナス", "+1 point (total 25)", "", 0 ],
			[ 29, "ソウルパートナー CP", "+1 (total 25)", "", 0 ],
			[ 29, "ステータスボーナス", "ALL+1 (total 11）", "", 0 ],
			[ 29, "蘇生成功率", "+2% (total 7%)", "", 0 ],
			[ 30, "継承可能スキルポイント", "+2 points (total 47)", "", 0 ],
			[ 30, "スキルポイントボーナス", "+1 point (total 26)", "", 0 ],
			[ 30, "ソウルパートナー CP", "+1 (total 26)", "", 0 ],
			[ 30, "ソウルマテリアル蓄積速度", "Level 7", "", 0 ],
			[ 30, "ステータスボーナス", "ALL+1 (total 12）", "", 0 ]
		],
		rank = 0,
		removeList = [],
		dead = true,
		view = function () {
			var list,
				filter = function ( record ) {
					for ( var i = 0, length = removeList.length; i < length; i += 1 ) {
						if ( record[ 1 ] === removeList[ i ] ) {
							return false;
						}
					}
					return true;
				};

			if ( dead ) {
				list = BONUSES.filter( filter );
			} else {
				list = BONUSES.filter( function ( record ) {
					if ( record[ 4 ] ) {
						return false;
					}
					return filter( record );
				} );
			}

			$( "#bonuses" ).empty();
			$.each( list, function () {
				var SR = this[ 0 ];

				$( "#bonuses" ).append( "<tr><td>" + ( SR === rank ? "" : "SR " + SR ) + "</td><td>" + this[ 1 ] + "</td><td>" + this[ 2 ] + "</td><td>" + this[ 3 ] + "</td></tr>" );

				rank = SR;
			} );
		};

	$( "#dead>span>span" )
		.click( function () {
			var $this = $( this );

			if ( $this.hasClass( "hidden" ) ) {
				$this.removeClass( "hidden" );
				dead = true;
			} else {
				$this.addClass( "hidden" );
				dead = false;
			}

			view();
		} );

	$( "#categories>span>span" )
		.click( function () {
			var $this = $( this ),
				key = $this.text();

			if ( $this.hasClass( "hidden" ) ) {
				$this.removeClass( "hidden" );
				removeList.splice( removeList.indexOf( key ), 1 );
			} else {
				$this.addClass( "hidden" );
				removeList.push( key );
			}

			view();
		} );

	view();
}() );
