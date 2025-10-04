$(function() {
 //  jQuery('.bxslider').bxSlider({
 //     pager: true,
 //     nextText: '', 
 //     prevText: '',
 //     // auto:true,
 //     // speed:100,  
	// });
 var mobile = window.matchMedia( "(max-width: 666px)" );
if (mobile.matches) {
  jQuery('.bxslider').bxSlider({
       auto:true,
       infiniteLoop:true,
       speed:100,
       pager:false,
   });
 } else {
  jQuery('.bxslider').bxSlider({
       auto:false,
       pager:true,
   });
 }
  	
  var $topTo = $(".top_To")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 3500){
		$topTo.fadeIn();
	}else{
		$topTo.fadeOut();
	}
});

$topTo.on("click", function(){
	$("html,body").animate({scrollTop:0}, 1200)
});
$(document).ready(function() {
   var $navIcon = $('.nav-icon'),
       $mainMenu = $('#main-menu');
    $navIcon.on('click', function() {
    	$(this).toggleClass('button-open');
    	$mainMenu.toggleClass('menu-show');
    });   
});

});

// $(document).ready(function(){
//     var slider = $('.bxslider').bxSlider();
//     var widthMatch = matchMedia(" (max-width: 666px)");
//     var widthHandler = function(matchList) {
//         if (matchList.matches) {
//             slider.reloadSlider({
//                 auto:true,
//                 speed:100.
//             })
//         } else {
//             slider.reloadSlider({
//                 auto:false,
//             })
//         }
//     };
// });