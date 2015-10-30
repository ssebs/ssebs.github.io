 function sticky_relocate() {
     var window_top = $(window).scrollTop();
     var div_top = $('#anchor').offset().top;
     if (window_top > div_top) {
         $('#nav').addClass('stick');
         $('#anchor').css("height", "6em");
     } else {
         $('#nav').removeClass('stick');
         $('#anchor').css("height", "100%");
     }
 }

 $(function () {
     $(window).scroll(sticky_relocate);
     sticky_relocate();
 });
