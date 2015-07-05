$(document).ready(function() {

	//Вызов бокового меню
	(function() {
		var $body = document.body
		, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

		if ( typeof $menu_trigger !== 'undefined' ) {
			$menu_trigger.addEventListener('click', function() {
				$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

	}).call(this);

	//Анимация иконки бокового меню
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});

	//Анимация иконки поиска
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	var isOpen = false;
	submitIcon.click(function(){
		if(isOpen == false){
			searchBox.addClass('searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('searchbox-open');
			inputBox.focusout();
			isOpen = false;
			}
		});
		submitIcon.mouseup(function(){
			return false;
		});
		searchBox.mouseup(function(){
			return false;
		});
		$(document).mouseup(function(){
			if(isOpen == true){
				$('.searchbox-icon').css('display','block');
				submitIcon.click();
			}
		});
	function buttonUp(){
		var inputVal = $('.searchbox-input').val();
		inputVal = $.trim(inputVal).length;
		if( inputVal !== 0){
			$('.searchbox-icon').css('display','none');
		} else {
			$('.searchbox-input').val('');
			$('.searchbox-icon').css('display','block');
		}
	}

	//Фексированное меню при скролле
	var stickyNavTop = $('.blog-top-mnu').offset().top;
	var stickyNav = function(){
	var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$('.blog-top-mnu, header').addClass('fixed')
			$('.slider').addClass('mar-top');
		} else {
			$('.blog-top-mnu, header').removeClass('fixed')
			$('.slider').removeClass('mar-top');
		}
	};

	stickyNav();

	$(window).scroll(function() {
	stickyNav();
	});

	

	//Слайдер
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		adaptiveHeight: true,
		auto: true,
		pause: 5000,
		randomStart: true,
	});

	// Masonry плитка для статей
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
	});

	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});