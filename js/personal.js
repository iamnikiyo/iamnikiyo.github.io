		$(document).ready(function(){
        $(document).on("scroll", onScroll);
        $("#goDown").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
              window.location.hash = hash;
            });
          }
        });
/* BACKGROUND HEADER MOVE (First Background)*/
/*
      var movementStrength = 25;
      var height = movementStrength / $(window).height();
      var width = movementStrength / $(window).width();
      $("#header").mousemove(function(e){
                var pageX = e.pageX - ($(window).width() / 2);
                var pageY = e.pageY - ($(window).height() / 2);
                var newvalueX = width * pageX * -1 - 25;
                var newvalueY = height * pageY * -1 - 50;
                $('#bimage').css("background-position", newvalueX+"px     "+newvalueY+"px");
      });
*/
// Randomize header background
	var number = Math.floor(Math.random()*3);
	$('#bimage').css('background-image',"url(/images/header-images/" + number +".png)");
});

/* Show or Hide menu */
function toggleMenuInterno(){
    $(".menu").toggle("fast").complete(
        $("#externo").toggle()
    );
}
/* Externo */
function toggleMenuExterno(){
    $(".menu").toggle("fast").complete(
        $("#externo").toggle()
    );
}
function onScroll(event){
    if($(document).scrollTop()>$(window).height()-80){
        $("#externo").addClass("active");

    }else{
        $("#externo").removeClass("active");
    }
}
