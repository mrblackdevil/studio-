$(function() {

// menu hamburger
$(document).ready(function() {
	$('.header__nav-icon').click(function() {
		$('.header__nav-menu').slideToggle(0);
});
});
// Плавный скрол вниз
	jQuery(document).ready(function($) {
		$('a').click(function(event) {
			var elementClick = $(this).attr('href');
			var dest = $(elementClick).offset().top;
			$('html,body').animate({scrollTop: dest}, 1100);
		});
	});

/* Magnific Popup  doc/GitHub        ->  https://github.com/dimsemenov/Magnific-Popup
website how us it                    ->  http://dimsemenov.com/plugins/magnific-popup/documentation.html
js file generator default all in     ->  http://dimsemenov.com/plugins/magnific-popup//
*/
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

/* Slider Slick  doc/GitHub          ->  https://github.com/kenwheeler/slick/
website how us it                 ->  http://kenwheeler.github.io/slick/
*/
$(document).ready(function(){
	$('.portfolio__slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		fade: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});

// Ajax Send Form
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


// Responsive-Tabs doc/GitHub    ->  http://vdw.github.io/Tabslet/
$('.tabs').tabslet({
  mouseevent: 'click',
  attribute: 'href',
  animation: true
});

// Acardion   page --> http://apps.komposta.net/jquery/navgoco/demo/
$(document).ready(function() {
    $("#demo2").navgoco({accordion: true});
});

// jQuery Mask Plugin  ---> https://igorescobar.github.io/jQuery-Mask-Plugin/
// github              ---> https://github.com/igorescobar/jQuery-Mask-Plugin
$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.phone_with_ddd').mask('(00) 0000-0000');
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});




}); // End
