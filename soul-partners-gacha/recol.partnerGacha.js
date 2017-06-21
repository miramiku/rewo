( function () {
	"use strict";
	var list = [],
		date = new Date( 2015, 3, 26 ),
		GENUS = 0,
		GRADE = 1,
		MEDAL = 2,
		grade = {
			"white": 0,
			"yellow": 1,
			"green": 2,
			"blue": 3,
			"red": 4,
			"count": {
				white:  { normal: 0, medal: 0, birth: 0 },
				yellow: { normal: 0, medal: 0, birth: 0 },
				green:  { normal: 0, medal: 0, birth: 0 },
				blue:   { normal: 0, medal: 0, birth: 0 },
				red:    { normal: 0, medal: 0, birth: 0 }
			}
		},
		genus = {
			"インプ": "imp",
			"オーク": "orc",
			"グレイブミスト": "gravemist",
			"ゴブリン": "goblin",
			"コボルド": "kobold",
			"ゴメス": "gomez",
			"ジャイアントクラブ": "giantcrab",
			"ジルダ": "gilda",
			"スケルトン": "skeleton",
			"スコーピオン": "scorpion",
			"ゾンビ": "zombie",
			"ドラゴンフライ": "dragonfly",
			"バルトロ": "baltor",
			"バンパイアバッド": "vampirebat",
			"ピクシー": "pixie",
			"ルーキス": "lucis",

			"order": [
				"インプ", "オーク", "グレイブミスト", "ゴブリン", "コボルド",
				"ゴメス", "ジャイアントクラブ",	"ジルダ", "スケルトン", "スコーピオン",
				"ゾンビ", "ドラゴンフライ", "バルトロ", "バンパイアバッド", "ピクシー",
				"ルーキス"
			],
			"count": {
				imp:        { normal: 0, medal: 0, birth: 0 },
				orc:        { normal: 0, medal: 0, birth: 0 },
				gravemist:  { normal: 0, medal: 0, birth: 0 },
				goblin:     { normal: 0, medal: 0, birth: 0 },
				kobold:     { normal: 0, medal: 0, birth: 0 },
				gomez:      { normal: 0, medal: 0, birth: 0 },
				giantcrab:  { normal: 0, medal: 0, birth: 0 },
				gilda:      { normal: 0, medal: 0, birth: 0 },
				skeleton:   { normal: 0, medal: 0, birth: 0 },
				scorpion:   { normal: 0, medal: 0, birth: 0 },
				zombie:     { normal: 0, medal: 0, birth: 0 },
				dragonfly:  { normal: 0, medal: 0, birth: 0 },
				baltor:     { normal: 0, medal: 0, birth: 0 },
				vampirebat: { normal: 0, medal: 0, birth: 0 },
				pixie:      { normal: 0, medal: 0, birth: 0 },
				lucis:      { normal: 0, medal: 0, birth: 0 }
			}
		},
		nil = { normal: 0, medal: 0, birth: 0 },
		avg = { normal: 0, medal: 0, birth: 0 },
		sum = { normal: 0, medal: 0, birth: 0 },
		getDateString = function ( date ) {
			var month = date.getMonth() + 1,
				day   = date.getDate();

			return date.getFullYear() + "." + ( month < 10 ? "0" + month : month ) + "." + ( day < 10 ? "0" + day : day );
		},
		getDateHTML = function( date ) {
			return "<span class=\"date\">" + getDateString( date ) + "</span>";
		},
		proc = function () {
			genus.order.sort( function ( a, b ) {
				var x = genus.count[ genus[ a ] ].normal + genus.count[ genus[ a ] ].medal + genus.count[ genus[ a ] ].birth,
					y = genus.count[ genus[ b ] ].normal + genus.count[ genus[ b ] ].medal + genus.count[ genus[ b ] ].birth;

				return x > y ? -1 : x < y ? 1 : 0;
			} );
			$.each( genus.order, function() {
				var normal = genus.count[ genus[ this ] ].normal,
					medal  = genus.count[ genus[ this ] ].medal,
					birth  = genus.count[ genus[ this ] ].birth,
					mix    = normal + medal + birth;

				$( "#genus" ).append( "<tr><td>" + this + "</td>" + "<td>" + normal + "</td>" + "<td>" + medal + "</td>" + "<td>" + birth + "</td>" + "<td>" + mix + "</td></tr>" );
			} );

			$.each( grade.count, function( key, val ) {
				$( "#count-" + key + "-normal" ).text( val.normal                         );
				$( "#count-" + key + "-medal"  ).text(              val.medal             );
				$( "#count-" + key + "-birth"  ).text(                          val.birth );
				$( "#count-" + key + "-mix"    ).text( val.normal + val.medal + val.birth );
			} );

			$.each( [ "genus", "grade" ], function() {
				$( "#sum-" + this + "-normal" ).text( sum.normal                         );
				$( "#sum-" + this + "-medal"  ).text(              sum.medal             );
				$( "#sum-" + this + "-birth"  ).text(                          sum.birth );
				$( "#sum-" + this + "-mix"    ).text( sum.normal + sum.medal + sum.birth );
			} );

			$( "#count-sum-normal"  ).text( sum.normal                                                              );
			$( "#count-sum-medal"   ).text(              sum.medal                                                  );
			$( "#count-sum-birth"   ).text(                          sum.birth                                      );
			$( "#count-nil-normal"  ).text(                                      nil.normal                         );
			$( "#count-nil-medal"   ).text(                                                   nil.medal             );
			$( "#count-nil-birth"   ).text(                                                               nil.birth );
			$( "#count-sum-mix"     ).text( sum.normal + sum.medal + sum.birth                                      );
			$( "#count-nil-mix"     ).text(                                      nil.normal + nil.medal + nil.birth );
			$( "#count-days-normal" ).text( sum.normal                         + nil.normal                         );
			$( "#count-days-medal"  ).text(              sum.medal                          + nil.medal             );
			$( "#count-days-birth"  ).text(                          sum.birth                          + nil.birth );
			$( "#count-days-mix"    ).text( sum.normal + sum.medal + sum.birth + nil.normal + nil.medal + nil.birth );

			// avg
			$( "#avg-normal" ).text( (   avg.normal                           /   sum.normal                           ).toFixed( 2 ) );
			$( "#avg-medal"  ).text( (                avg.medal               /                sum.medal               ).toFixed( 2 ) );
			$( "#avg-birth"  ).text( (                            avg.birth   /                            sum.birth   ).toFixed( 2 ) );
			$( "#avg-mix"    ).text( ( ( avg.normal + avg.medal + avg.birth ) / ( sum.normal + sum.medal + sum.birth ) ).toFixed( 2 ) );

			// list
			$.each( list, function () {
				$( "#list" ).append(
					this.genus ?
					"<span class=\"data" + ( this.date.getDate() === 25 ? " birth" : this.medal ? " medal" : "" ) + "\">" + getDateHTML( this.date ) + "<span class=\"grade " + this.grade + "\"></span>" + this.genus + "</span>" :
					"<span class=\"data nil\">" + getDateHTML( this.date ) + "<span class=\"grade\"></span>データなし</span>"
				);
			} );
		};

	$.ajax( {
		type: "GET",
		url: "/data/partnerGacha.json",
		dataType: "json",
		async: true,
		success: function( data ) {
			data.list.reverse();

			$.each( data.list, function () {
				var day = "";

				list.push( {
					date:  new Date( date ),
					genus: this[ GENUS ],
					grade: this[ GRADE ],
					medal: this[ MEDAL ]
				} );

				day = date.getDate() === 25 ? "birth" : this[ MEDAL ] ? "medal" : "normal";

				if ( this[ GENUS ] !== null ) {
					genus.count[ genus[ this[ GENUS ] ] ][ day ] += 1;
					grade.count[ this[ GRADE ] ][ day ] += 1;
					avg[ day ] += grade[ this[ GRADE ] ];
					sum[ day ] += 1;
				} else {
					nil[ day ] += 1;
				}

				date.setDate( date.getDate() + 1 );
			} );

			proc();
		}
	} );
} () );
