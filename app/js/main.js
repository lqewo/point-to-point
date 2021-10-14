$(function () {

    $('input, select').styler()

    $('.checkbox-label').on('click', function () {
		$('.temperature').toggleClass('temperature--active')
	})

    $(window).resize(function () {
        if ($(window).width() < 493) {
          $('.cargo--price').removeClass('first');
        }

        else{
          $('.cargo--price').addClass('first');
        }
      });
})