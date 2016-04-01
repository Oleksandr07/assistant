$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input[placeholder], textarea[placeholder]').placeholder();


	//---------------------------        show/hide box        ---------------------------
	$('.box h2').click(function() {
		var $parent = $(this).parent();
		if (!$parent.hasClass('active')) {
			$parent.addClass('active');
			$parent.find('.box-body').slideDown(500);
		} 
		else {
			$parent.removeClass('active');
			$parent.find('.box-body').slideUp(500);
		}
	});
	

	//---------------------------        rating        ---------------------------
	$('.rating').each(function() {
		var rating = $(this).attr('data-rating');
		for (var i = 0; i < 5; i++) {
			if (i < rating) {
				$(this).append('<i class="fa fa-star"></i>')
			} 
			else {
				$(this).append('<i class="fa fa-star-o"></i>')
			};
		};
	});
	$('.rating').delegate('.fa', 'mouseover', function() {
		var num = $(this).index(),
			$parent = $(this).parents('.rating'),
			ratingLength = $(this).parents('.rating').find('.fa').length;
		for (var i = 0; i < ratingLength; i++) {
			if (i<=num) {
				$parent.find('.fa').eq(i).removeClass('fa-star-o').addClass('fa-star');
			}
			else{
				$parent.find('.fa').eq(i).removeClass('fa-star').addClass('fa-star-o')
			}
		}
	});


	//---------------------------        fullMenu        ---------------------------
	function fullMenu() {	
		var summ = 0;
		$('.top_menu ul li').each(function(){
			summ+=$(this).innerWidth();
		});
		$('.top_menu ul li').each(function(){
			$(this).css({
				'width': $(this).width()+(($('.top_menu').width()-summ)/$('.top_menu ul li').length)
			});
		});
	}
	fullMenu();

	$('.box-body').hide();

	//---------------------------        file input        ---------------------------
	$('.custom-file-input').on('change', function() {
        realVal = $(this).val();
        lastIndex = realVal.lastIndexOf('\\') + 1;
        if(lastIndex !== -1) {
            realVal = realVal.substr(lastIndex);
            $(this).prev('.mask').find('.fileInputText').val(realVal);
        }
    });


});