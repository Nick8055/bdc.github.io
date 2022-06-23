$(document).ready(function () {
  /* ------------ sticky nav --------------------- */
  $(".sticky-nav-js").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "90px;",
    }
  );

  /* ------------ scroll to --------------------- */
  $(".logo").click(function () {
    $("html,body").animate({ scrollTop: $("#page-top").offset().top }, 1000);
  });

  $(".logo-black").click(function () {
    $("html,body").animate({ scrollTop: $("#page-top").offset().top }, 1000);
  });

  $(".about-nav").click(function () {
    $("html,body").animate({ scrollTop: $("#About").offset().top }, 1000);
  });

  $(".doctors-nav").click(function () {
    $("html,body").animate({ scrollTop: $("#doctors").offset().top }, 1000);
  });

  $(".services-nav").click(function () {
    $("html,body").animate({ scrollTop: $("#Services").offset().top }, 1000);
  });

  $(".gallery-nav").click(function () {
    $("html,body").animate({ scrollTop: $("#gallery").offset().top }, 1000);
  });

  $(".testimonials-nav").click(function () {
    $("html,body").animate(
      { scrollTop: $("#testimonials").offset().top },
      1000
    );
  });

  $(".address-nav").click(function () {
    $("html,body").animate({ scrollTop: $("#contact").offset().top }, 1000);
  });

  /* ------------ Burger Menu Nav --------------------- */

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
