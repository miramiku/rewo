( function () {
	"use strict";

	var
		display = {
			show: function () {
				$( ".content > ul" ).each( function () {
					$( this ).show();
				} );
				$( ".sub-guage" ).show();
			},
			hide: function () {
				$( ".content > ul" ).each( function () {
					var $this = $( this );
					if ( $this.children( ":not( :hidden )" ).length === 0 ) {
						$this.hide();
					}
				} );
			}
		},
		tagState = function ( tags ) {
			$.each(
				( function ( arr ) {
					return arr.filter( function ( elm, idx, self ) {
						return self.indexOf( elm ) === idx;
					} );
				}( tags ) ),
				function () {
					var $tag = $( "#tags [data-tag=" + this + "]" ),
						hidden = $( ".content .tag[data-tag=" + this + "]:hidden" ).length;

					if ( hidden === 0 ) {
						$tag
							.removeClass();
					} else {
						$tag
							.addClass( hidden === parseInt( $tag.next().text(), 10 ) ? "hidden" : "intermediate" );
					}
				} );
		};

	$( "#generics > span > span" )
		.on( "click", function () {
			var mode = $( this ).data( "generics" ),
				branch = {
					show: {
						category: "addClass",
						tag: "removeClass"
					},
					hide: {
						category: "removeClass",
						tag: "addClass"
					}
				}[ mode ];

			$( ".content > ul > li" )[ mode ]();
			$( "#categories [data-filter]" )
				.each( function () {
					$( this )[ branch.category ]( "active" );
				} );
			$( "#tags [data-tag]" )[ branch.tag ]( "hidden" );
		} );

	$( "#categories > span > span" )
		.on( "click", function () {
			var $this = $( this ),
				$category = $( "." + $this.data( "filter" ) ),
				branch = {
					show: {
						display: "show",
						my: "addClass"
					},
					hide: {
						display: "hide",
						my: "removeClass"
					}
				}[ !$this.hasClass( "active" ) ? "show" : "hide" ],
				tags = [];

			display[ branch.display ]();
			$category[ branch.display ]();
			$this[ branch.my ]( "active" );

			$category
				.find( ".tag" )
				.each( function () {
					tags.push( $( this ).data( "tag" ) );
				} );

			tagState( tags );
		} )
		.on( "mouseenter", function () {
			var $this = $( this ),
				nowPos = $this.offset();

			$( "#tip-text" ).text( $this.data( "tooltip" ) );
			$( "#tip" )
				.removeClass()
				.addClass( $this.data( "filter" ) )
				.show()
				.offset( { top: nowPos.top + 25, left: nowPos.left - 60 } );
		} )
		.on( "mouseleave", function () {
			$( "#tip" ).hide();
		} );

	$( "#tags [data-tag]" )
		.on( "click", function () {
			var $this = $( this ),
				$item = $( ".tag[data-tag=" + $this.data( "tag" ) + "]" ).parent(),
				branch = $this.hasClass( "hidden" ) ? "show" : "hide",
				tags = [];

			display[ branch ]();
			$item[ branch ]();

			$item
				.find( ".tag" )
				.each( function () {
					tags.push( $( this ).data( "tag" ) );
				} );

			tagState( tags );
		} );
}() );
