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

				loadProjects();

				$('#carousel-1').bind('slid.bs.carousel', function (e) {
				    var item = $('#carousel-1 .active .carousel-caption h1')[0].innerText;

						loadProjectInfo(item);

				});
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

// Loading projects info to carousel

function loadProjects(){
	$.getJSON("js/data.json",function(json){
		for(let i = 0;i<json.works.length;i++){
				$('<li data-target="#carousel-1" data-slide-to="'+i+'"></li>').appendTo('#carousel-1 .carousel-indicators');
		}
		$('.carousel-indicators li:first-child()').addClass('active');

		for(index in json.works){
			var item = $('<div class="item"></div>');
			var img = $('<img src="'+json.works[index].image+'" class="img-responsive"/>');
			var desc = $('<p>'+json.works[index].desc+'</p>');
			var caption = $('<div class="carousel-caption"></div>');
				var captionTitle = $('<h1>'+json.works[index].title+'</h1>');

			img.appendTo(item);
			captionTitle.appendTo(caption);
			desc.clone().appendTo(caption)
			caption.appendTo(item);
			item.appendTo('#carousel-1 .carousel-inner');

		}
		$('#carousel-1 .carousel-inner .item:first-child()').addClass('active');
		loadProjectInfo($('#carousel-1 .active .carousel-caption h1')[0].innerText);
	});
}
	function loadProjectInfo(title){
		// project-info div
		if($('.carousel-wrapper .project-info')[0] != undefined)
			$('.carousel-wrapper .project-info')[0].remove();
		$.getJSON("js/data.json",function(json){
			for(index in json.works){
				if(json.works[index].title == title){
					var projectInfo = $('<section class="col-md-4 col-xs-12 col-sm-12 project-info"></div>');
					var desc = $('<p>'+json.works[index].longDesc+'</p>');
					$('<h2>About Project</h2>').appendTo(projectInfo);
					$('<hr>').appendTo(projectInfo);
					$('<h3>Description</h3>').appendTo(projectInfo);
					$(desc).appendTo(projectInfo);
					$('<hr>').appendTo(projectInfo);
					$('<h3>Languages</h3>').appendTo(projectInfo);
					var tech = $('<p></p>');
					var text = "";
					for(let k = 0;k<json.works[index].tech.length;k++){
						if(k!=json.works[index].tech.length -1)
							text += json.works[index].tech[k]+", ";
						else
							text += json.works[index].tech[k];
					}
					tech.append(text);
					tech.appendTo(projectInfo);
					projectInfo.appendTo('.carousel-wrapper');
				}
			}
		});
	}

	$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });
  }

  revealOnScroll();
});
