(function ($) {
	Drupal.behaviors.tolimavivedigital = {
    attach: function (context, settings) {
      var num = 1;
			$("#quicktabs-navegacion_tolima_vive_digital > .item-list li").each(function(){
				$(this).addClass('menu-'+num);
				$('a',this).text('');
				num++;
			});
			var num = 1;
			$("#quicktabs-proyecto > .item-list li").each(function(){
				$(this).addClass('menu-proyecto-'+num);
				//$('a',this).text('');
				num++;
			});

			var num = 1;
			$("#quicktabs-servicios > .item-list li").each(function(){
				$(this).addClass('menu-servicios-'+num);
				//$('a',this).text('');
				num++;
			});
			$('.views-slideshow-controls-text-previous a').text('');
			$('.views-slideshow-controls-text-next a').text('');
			$('.view-galeria-home .group-right .field-name-body').jScrollPane();
    }
  };
  /*$(document).ready(function () {
	  
  })*/
})(jQuery);