var REWO = {};

/** page-scroller */
REWO.pageScroller = function () {
	"use strict";

	$( "#rewo" ).on( "click", "a[href^=\"#\"]", function ( e ) {
		var speed = 500,
			href = $( this ).attr( "href" ),
			target = $( href === "#" || href === "" ? "html" : href.replace( ":", "\\:" ) ),
			position = target.offset().top;

		$( "body, html" ).animate( {
			scrollTop: position
		}, speed, "swing" );

		e.preventDefault();
	} );
};

/** boot */
$( document ).ready( function () {
	"use strict";

	REWO.pageScroller();

	$( "[data-fancybox]" ).fancybox( {
		caption: function () {
			return $( this ).attr( "alt" );
		}
	} );

	$( "header" ).css( "background-image", "url(" + $( "header" ).data( "bg" ) + " )" );

	$( "header" )
		.click( function ( e ) {
			if ( $( e.target ).attr( "id" ) === "header-content" ) {
				if ( $( "body" ).hasClass( "hide-header" ) ) {
					$( "body" ).animate(
						{
							width: "1200px"
						}, {
							duration: 500,
							queue: false
						} );
					$( "header" ).animate(
						{
							width: "300px"
						}, {
							duration: 500,
							queue: false,
							complete: function () {
								$( "body" ).removeClass( "hide-header" );
								$( "#header-content *" ).show();
							}
						} );
					$( "main" ).animate(
						{
							marginLeft: "350px",
							width: "850px"
						}, {
							duration: 500,
							queue: false
						} );
				} else {
					$( "#header-content *" ).hide();
					$( "body" ).animate(
						{
							width: "910px"
						}, {
							duration: 500,
							queue: false
						} );
					$( "header" ).animate(
						{
							width: "10px"
						}, {
							duration: 500,
							queue: false,
							complete: function () {
								$( "body" ).addClass( "hide-header" );
							}
						} );
					$( "main" ).animate(
						{
							marginLeft: "50px",
							width: "850px"
						}, {
							duration: 500,
							queue: false
						} );
				}
			}
		} );

	// migrate debbug
	$.each( [ "enemy", "warn", "item", "gold", "keyword", "name", "site", "law", "neu", "cha", "bifurcatio" ], function () {
		var length = $( "." + this ).length;

		if ( length ) {
			$( "article" ).prepend( "<p class=\"migrate-error\">" + this + ": " + length + "</p>" );
		}
	} );
} );
