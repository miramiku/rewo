( function () {
	"use strict";

	var quiz = 0,
		current = 0;

	$( ".quiz > p:first-child" ).each( function () {
		quiz += 1;
		$( this ).parent().data( "num", quiz );
		$( this ).prepend( "<span class=\"num\"><span>#" + ( quiz < 10 ? "0" + quiz : quiz ) + "</span></span>" );
	} );

	$( "#rewo" )
		.on( "click", ".ans", function () {
			var num = $( this ).parentsUntil( ".quiz" ).parent().data( "num" );

			// if ( current !== num ) {
			// 	current = num;
			// 	$( ".evidence" ).hide();
			// 	$( this ).parent().next().fadeIn( "fast", "swing" );
			// } else if ( current === num ) {
			// 	current = 0;
			// 	$( ".evidence" ).fadeOut( "fast", "swing" );
			// }
		} );

	$( ".evidence" ).show();
}() );
