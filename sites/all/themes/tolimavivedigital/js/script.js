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
			if(window.location.pathname != "/tolimavivedigital/"){				
				$('#quicktabs-tabpage-navegacion_tolima_vive_digital-0').addClass('p-not-front');
			}
			/*$('.p-pre_footer-middle .contextual-links-region .content a').click(function(){
				$('#quicktabs-navegacion_tolima_vive_digital .item-list li a').each(function(){					
					if($(this).attr('href') == '/tolimavivedigital/plandetecnologia?qt-navegacion_tolima_vive_digital=3#qt-navegacion_tolima_vive_digital'){
						$(this).click();
					}
				});
				return false;
			});*/
    }

    
  };
  /*$(document).ready(function () {
	  
  })*/
})(jQuery);