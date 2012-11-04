(function ($) {
  $(document).ready(function () {
	  var num = 1;
		$("#quicktabs-navegacion_tolima_vive_digital .item-list li").each(function(){
			$(this).addClass('menu-'+num);
			$('a',this).text('');
			num++;
		});
  })
})(jQuery);