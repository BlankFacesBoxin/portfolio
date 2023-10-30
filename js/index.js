$(function() {
  $(".box").each(function () {
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      /* IE */
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = null;
      if (delta < 0) {
        if ($(this).next() != undefined) {
          moveTop = $(this).next().offset().top;
        }
      } else {
        if ($(this).prev() != undefined) {
          moveTop = $(this).prev().offset().top;
        }
      }
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: moveTop + "px",
          },
          {
            duration: 800,
            complete: function () {},
          }
        );
    });
  });
  let $btn = $(".sideMenu")
  $btn.on('click', function() {
    $(".sideMenu").toggleClass("onClick")
    $(".sideMenu i").toggleClass("onColor")
    $btn.toggleClass("onBg")
    $('.bg_text').toggleClass('sideBar')
  })
  
  let $mainTop = $(".mainShow").offset().top;
  console.log($mainTop)

  let $top = $(".first_pofo").offset().top;
  console.log($top)
  //953
  let $top2 = $(".secound_pofo").offset().top;
  console.log($top2)
  //1906
  let $top3 = $(".third_pofo").offset().top;
  console.log($top3)


  $(".mainHome").on("click", function() {
    $(".bg_text").removeClass("sideBar")
    $('html').animate({
      scrollTop : $mainTop
    },600)
  })
  
  $(".greenVet").on("click", function() {
    $(".bg_text").removeClass("sideBar")
    $('html').animate({
      scrollTop : $top
    },600)
  })
  
  $(".royal").on("click", function() {
    $(".bg_text").removeClass("sideBar")
    $('html').animate({
      scrollTop : $top2
    },600)
  })

  $(".samcheng").on("click", function() {
    $(".bg_text").removeClass("sideBar")
    $('html').animate({
      scrollTop : $top3
    },600)
  }) 
})