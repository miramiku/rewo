( function () {
	"use strict";
	var // fields
		database = null,
		mode = {
			simplified: true,
			displayAchieved: false
		},
		// functions
		getNote = function ( note ) {
			switch ( note ) {
				case "":
					return "";
				case "r":
					return "<span class=\"indicator rare\">Rare Creature</span>";
				case "u":
					return "<span class=\"indicator unique\">Unique Creature</span>";
				default:
					return "<span class=\"indicator guardian\">" + note + " Guardian's Gate</span>";
			}
		},
		getNoteCategory = function ( note ) {
			switch ( note ) {
				case "":
					return "";
				case "r":
					return "rare";
				case "u":
					return "unique";
				default:
					return "guardian";
			}
		},
		progress = function ( achieved, enemies ) {
			var parcentage = achieved / enemies * 100,
				allArchieved = parcentage === 100 ? " achieved" : "";

			return "<div class=\"progressbar" + allArchieved + "\">" +
				"<div class=\"progressbar-inner\" style=\"width:" + parcentage + "%;\">" +
				"<div class=\"progressbar-text\">" +
				( parcentage === 100 ? "achieved!" : Math.round( parcentage ) + "%" ) +
				" (" + achieved + "/" + enemies + ")" +
				"</div>" +
				"</div>" +
				"</div>";
		},
		simple = function () {
			var // common variables
				counter = 0,
				isWrite = true,
				html = "",
				dungeon = "",

				// sub routine
				makeLayerHeadings = function ( layer ) {
					return "<h6 id=\"" + layer + "\">" + layer + "</h6><div>";
				},
				makeDungeonHeadings = function () {
					return "<div><h4 id=\"" + dungeon + "\">" + dungeon + "</h4>";
				},
				makeEnemyColumn = function ( enemy, note, achieved ) {
					return "<span class=\"simple-enemy" + ( note === "" ? "" : " " + getNoteCategory( note ) ) + ( achieved ? " achieved" : "" ) + "\">" + enemy + "</span>";
				},
				summaryRow = function ( isWrite, layer, achieved, num ) {
					return "<tr><td>" + ( isWrite ? dungeon : "" ) + "</td><td>" + layer + "</td><td>" + progress( achieved, num ) + "</td></tr>";
				};

			if ( mode.displayAchieved ) {
				$.each( database, function () {
					counter = 0;
					isWrite = true;
					dungeon = this.dungeon;
					html = makeDungeonHeadings();

					$.each( this.layers, function () {
						var achieved = 0;

						html += makeLayerHeadings( this.layer );
						$.each( this.enemies, function () {
							counter += 1;
							html += makeEnemyColumn( this[ 0 ], this[ 1 ], this[ 3 ] );
							achieved += this[ 3 ];
						} );
						html += "</div>";

						$( "#summary" ).append( summaryRow( isWrite, this.layer, achieved, this.enemies.length ) );

						isWrite = false;
					} );

					html += "</div>";

					$( "#" + this.region ).append( html );
				} );
			} else {
				$.each( database, function () {
					var isAllAchieved = true;

					counter = 0;
					isWrite = true;
					dungeon = this.dungeon;
					html = makeDungeonHeadings();

					$.each( this.layers, function () {
						var achieved = 0,
							list = "";

						$.each( this.enemies, function () {
							counter += 1;
							if ( !this[ 3 ] ) {
								list += makeEnemyColumn( this[ 0 ], this[ 1 ], this[ 3 ] );
							}
							achieved += this[ 3 ];
						} );

						if ( list !== "" ) {
							html += makeLayerHeadings( this.layer ) + list + "</div>";
							$( "#summary" ).append( summaryRow( isWrite, this.layer, achieved, this.enemies.length ) );
							isAllAchieved = false;
							isWrite = false;
						}
					} );

					html += "</div>";

					if ( !isAllAchieved ) {
						$( "#" + this.region ).append( html );
					}
				} );
			}
		},
		detail = function () {
			var // const
				tableTerminate = "</tbody></table>",

				// common variables
				counter = 0,
				isWrite = true,
				html = "",
				dungeon = "",

				// sub routine
				makeDeailRow = function ( record, counter ) {
					return "<tr>" +
						"<td>" + ( counter < 10 ? "0" + counter : counter ) + "</td>" +
						"<td" + ( record[ 3 ] ? " class=\"achieved\" " : "" ) + ">" + getNote( record[ 1 ] ) + "<span class=\"enemy-name\">" + record[ 0 ] + "</span></td>" +
						"<td>" + record[ 2 ] + "</td>" +
						"</tr>";
				},
				makeLayerHeadings = function ( layer ) {
					return "<h6 id=\"" + layer + "\">" + layer + "</h6>" +
						"<table class=\"enemies-list\"><thead><tr><th>#</th><th>モブ名</th><th>備考</th></tr></thead><tbody>";
				},
				makeDungeonHeadings = function () {
					return "<div><h4 id=\"" + dungeon + "\">" + dungeon + "</h4>";
				},
				summaryRow = function ( isWrite, layer, achieved, num ) {
					return "<tr><td>" + ( isWrite ? dungeon : "" ) + "</td><td>" + layer + "</td><td>" + progress( achieved, num ) + "</td></tr>";
				};

			if ( mode.displayAchieved ) {
				$.each( database, function () {
					counter = 0;
					isWrite = true;
					dungeon = this.dungeon;
					html = makeDungeonHeadings();

					$.each( this.layers, function () {
						var achieved = 0;

						html += makeLayerHeadings( this.layer );

						$.each( this.enemies, function () {
							counter += 1;
							html += makeDeailRow( this, counter );
							achieved += this[ 3 ];
						} );

						html += tableTerminate;
						$( "#summary" ).append( summaryRow( isWrite, this.layer, achieved, this.enemies.length ) );
						isWrite = false;
					} );

					html += "</div>";

					$( "#" + this.region ).append( html );
				} );
			} else {
				$.each( database, function () {
					var isAllAchieved = true;

					counter = 0;
					isWrite = true;
					dungeon = this.dungeon;
					html = makeDungeonHeadings();

					$.each( this.layers, function () {
						var achieved = 0,
							list = "";

						$.each( this.enemies, function () {
							counter += 1;
							if ( !this[ 3 ] ) {
								list += makeDeailRow( this, counter );
							}
							achieved += this[ 3 ];
						} );

						if ( list !== "" ) {
							html += makeLayerHeadings( this.layer ) + list + tableTerminate;
							$( "#summary" ).append( summaryRow( isWrite, this.layer, achieved, this.enemies.length ) );
							isAllAchieved = false;
							isWrite = false;
						}
					} );

					html += "</div>";

					if ( !isAllAchieved ) {
						$( "#" + this.region ).append( html );
					}
				} );
			}
		},
		trigger = function () {
			$( "#summary, #dimento, #hersant, #sub, #others" ).empty();

			if ( mode.simplified ) {
				simple();
			} else {
				detail();
			}
		};

	$.ajax( {
		type: "GET",
		url: "enemies.json",
		dataType: "json",
		async: true,
		success: function ( data ) {
			database = data.list;
			trigger();
		}
	} );

	// event hundler
	$( "#summary" ).on( "click", "tr", function () {
		$( "body, html" ).animate( { scrollTop: $( "#" + $( this ).children().eq( 1 ).text() ).offset().top }, 500, "swing" );
	} );

	$( "#displayAchieved" ).click( function () {
		mode.displayAchieved = !mode.displayAchieved;

		if ( mode.displayAchieved ) {
			$( this ).text( "採取済みを表示する" );
		} else {
			$( this ).text( "採取済みを表示しない" );
		}

		trigger();
	} );

	$( "#simplified" ).click( function () {
		mode.simplified = !mode.simplified;

		if ( mode.simplified ) {
			$( this ).text( "簡易表示" );
		} else {
			$( this ).text( "詳細表示" );
		}

		trigger();
	} );
}() );
