( function () {
	"use strict";
	var data = {},
		INDEX = {
			CHALLENGE: 0,
			NORM: 1,
			CROSS: 2,
			QUANTITY: 3
		},
		adverb = {
			day: "daily",
			week: "weekly",
			month: "monthly"
		},
		getSpan = {
			day: function ( date ) {
				var month = date.getMonth() + 1,
					day = date.getDate();

				return date.getFullYear() + "." + ( month < 10 ? "0" + month : month ) + "." + ( day < 10 ? "0" + day : day );
			},
			week: function ( date ) {
				var endDate = new Date( date ),
					month = date.getMonth() + 1,
					day = date.getDate(),
					start = date.getFullYear() + "." + ( month < 10 ? "0" + month : month ) + "." + ( day < 10 ? "0" + day : day ),
					end = "";

				endDate.setDate( endDate.getDate() + 6 );
				month = endDate.getMonth() + 1;
				day = endDate.getDate();
				end = endDate.getFullYear() + "." + ( month < 10 ? "0" + month : month ) + "." + ( day < 10 ? "0" + day : day );

				return start + " - " + end;
			},
			month: function ( date ) {
				var month = date.getMonth() + 1;

				return date.getFullYear() + "." + ( month < 10 ? "0" + month : month );
			}
		},
		write = function ( span ) {
			var list = [];

			$.each( data[ adverb[ span ] ], function ( s ) {
				list.push( { span: s, date: new Date( s ) } );
			} );
			list.sort( function ( a, b ) {
				return a.date.getTime() < b.date.getTime() ? 1 : -1;
			} );
			$.each( list, function ( index, seq ) {
				var heading = "<h5>" + getSpan[ span ]( seq.date ) + "</h5>",
					table = "";

				table += "<table><thead><th>課題</th><th></th><th>褒章</th></thead><tbody>";
				$.each( data[ adverb[ span ] ][ seq.span ], function () {
					table += "<tr><td>" + this[ INDEX.CHALLENGE ] + "</td><td>" + this[ INDEX.NORM ] + "</td><td>" + this[ INDEX.CROSS ] + "x" + this[ INDEX.QUANTITY ] + "</td></tr>";
				} );
				table += "</tbody></table>";

				$( "#" + adverb[ span ] ).append( heading + table );
			} );
		};

	$.ajax( {
		type: "GET",
		url: "challenges.json",
		dataType: "json",
		async: true,
		success: function ( input ) {
			data = input;

			// $.each( adverb, function ( span ) {
			// 	write( span );
			// } );
		}
	} );
}() );
