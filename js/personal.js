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
