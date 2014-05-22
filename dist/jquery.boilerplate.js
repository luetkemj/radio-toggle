/*
 *  jQuery Boilerplate - v3.3.1
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variable rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "defaultPluginName",
				defaults = {
				bodyClasses: [],
				radios: []
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				// jQuery has an extend method which merges the contents of two or
				// more objects, storing the result in the first object. The first object
				// is generally empty as we don't want to alter the default options for
				// future instances of the plugin
				this.options = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
				init: function () {
						// Place initialization logic here
						// You already have access to the DOM element and
						// the options via the instance, e.g. this.element
						// and this.options
						// you can add more functions like the one below and
						// call them like so: this.yourOtherFunction(this.element, this.options).
						// this.yourOtherFunction();
						// this.findRadioStations();
						this.clickStation( this.options );
				},

				clickStation: function( options ){

					$(".radio-station").on("click", function(){
						clickedStation = $(this).attr("data-station");

						Plugin.prototype.changeStation(clickedStation, options);
					});
				},


				changeStation: function(clickedStation, options){
					console.log(clickedStation);

					$.each( options.radios, function( i, l ){
						if ( clickedStation === l){
						  $("body").toggleClass( "active-"+l );
						}else{
						  $("body").removeClass("active-"+l);
						}
					});

				},






				findRadioStations: function(){
					// $.each( this.options.radios, function( i, l ){
					// 	$("."+l).on("click", function(){

					// 	});
					// });



				}

				// aTest: function(){

				// }

				// // toggleIt: function(){
				// // 	$.each( bodyClasses, function( i, l ){
				//     if (bodyClass === l){
				//       $("body").toggleClass( "active-"+bodyClass );
				//     }else{
				//       $("body").removeClass("active-"+l);
				//     }
				// //   });
				// // }




				// yourOtherFunction: function () {
				// 		// some logic
				// 		console.log( this.options.bodyClasses[1] );

				// 		$.each( this.options.radios, function( i, l ){
				// 			console.log( i );
				// 			console.log( l );
				// 		});
				// }

		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});
		};

})( jQuery, window, document );
