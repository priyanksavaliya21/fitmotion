$(window).resize(function () {
  slider123();
  slider111();
  kurse_day_title();
});

$(document).ready(function () {
  // function call
  slider123();
  slider111();
  kurse_day_title();

  //wow
  new WOW().init();

  //Smooth Scroll Js
  $("body").impulse({
    range: 150,
  });

  // slide up down_property class----------------------------------------------------
  if (window.innerWidth < 1199) {
    $(".btn").click(function () {
      $("#border").toggleClass("menu_open");
      $(this).toggleClass("border-0");
    });
  } else {
    $("#border").removeClass("menu_open");
    $(".btn").removeClass("border-0");
  }
  //submenu code in header--------------------------------------

  if (window.innerWidth < 1199) {
    $(".btn").click(function () {
      $(".submenu2").slideToggle("fast");
    });
  } else {
    $(".submenu2").css("display", "none!important");

    console.log("hiii_x");
  }
  // --------------------------------------------------------------------

  $(" #nav-icon3 ").click(function () {
    $(this).toggleClass("open");
    $("nav").toggleClass("down");
    $("html").toggleClass("cm-overflow");
  });

  $("#bar_move").click(function () {
    $(".contact_menu").toggleClass("active_slide");
  });

  $("#submission , .product_card .btn-1").click(function () {
    swal({
      title: "Welcome!",
      text: "your form has been submitted!",
      icon: "success",
      button: "Done",
    });
  });


  
  $(".btn-product_card").click(function () {
    swal({
      title: "Welcome!",
      text: "your order has been confirmed!",
      icon: "success",
      button: "Done",
    });
  });

  $(".btn_sec-11_block .btn-1 , .page-4-section-3  .btn-1").click(function () {
    swal("Are You Ready For an Appointment ?", {
      buttons: ["Noo!", "Yes!"],
    });
  });

  $(".page-6-section-4 .btn-2").click(function () {
    swal("Are You Ready For Download?", {
      buttons: ["Noo!", "Yes!"],
    });
  });

  $(".page-6-section-4 .btn-1").click(function () {
   
    swal(" Nice, Get Your Books Now!");
  });

  $(".sidebar").hover(function () {
    $(".sidebar").toggleClass("active_slide_right");
  });
  $(".bg_layer").hover(function () {
    $(".sidebar").toggleClass("active_slide_right");
  });

  // -----------------------------course--html filter--and--tabs-js------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------

  //drop down js
  $(".dropdown-menus ul li a").on("click resize", function () {
    var drop_down_data_value = $(this).attr("data-value");

    $(this)
      .parents(".dropdown-menus")
      .find(".days_right_all p")
      .attr("data-value", drop_down_data_value);
    $(this)
      .parents("li")
      .find("a")
      .addClass("active")
      .parents("li")
      .siblings()
      .find("a")
      .removeClass("active");

    check_training();
  });
  // ---------------------------------------------------------------

  //drop down js
  $(".drop_down_menu").click(function () {
    $(".all_kurse_inner_section ul").toggleClass("show_menu");
    $(".all_kurse_inner_section ul > li").click(function () {
      $(".drop_down_menu p").text($(this).text());
      $(".all_kurse_inner_section ul").removeClass("show_menu");
    });
  });

  //day list js
  $(".day_list ul li a").on("change click", function () {
    $(this)
      .addClass("active")
      .parents("li")
      .siblings()
      .find("a")
      .removeClass("active");
  });

  //right kaurse table js
  $(".all_kurse_inner_section ul li a").on("change click", function () {
    $(this)
      .addClass("active")
      .parents("li")
      .siblings()
      .find("a")
      .removeClass("active");
  });

  // ---------------------------------------------------------
  //mobile drop_down click function
  function check_training() {
    var traning_value = $(".days_right_all .day").attr("data-value");
    var day_value = $(".days_right_all .all_right").attr("data-value");

    var merge_class = day_value + "_" + traning_value;

    $(".kursplan_time_main_section .kursplan_container")
      .find("." + merge_class)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }

  //slideup function in service page---------------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------

  //moretext js
  $(".moreless-button").click(function () {
    $(this).parents(".main_more_text").siblings().find(".moretext").slideUp();
    $(this).parents(".owl-item").siblings().find(".moretext").slideUp();
    $(this).parents(".main_more_text").find(".moretext").slideToggle();
    setTimeout(function () {
      $(".owl-carousel").trigger("refresh.owl.carousel");
    }, 470);

    $(this).parents("call_4").siblings().find(".moretext").slideUp();

    if ($(this).find("span").text() == "weniger") {
      $(this).find("span").text("mehr dazu");
      $(this).find("svg").removeClass("angle_rotact");
    } else {
      $(this).find("span").text("weniger");
      $(this).find("svg").addClass("angle_rotact");
    }
  });

  // ---------luckwheel----roteat--------------------------------------------------------------------------------------------

  $(".rotateRight").on("click", function () {
    rotateRight();
  });

  //  image rotate
  function rotateRight() {
    var angle = $(".rotateMe").data("angle") + 2700 || 2100;
    $(".rotateMe").css({ transform: "rotate(" + angle + "deg)" });
    $(".rotateMe").data("angle", angle);
  }
  // ---------------------------------------------------------------------

  $(".Bewertungen_slider .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z" transform="translate(19.527 20.679) rotate(180)"/>\n' +
        "</svg>\n",
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z"/>\n' +
        "</svg>\n",
    ],
    dots: false,
    margin: 500,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      576: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // ----------course_slider ----page-6-------------------------------------------------------

  $(".course_slider .owl-carousel").owlCarousel({
    loop: true,
    navText: [
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z" transform="translate(19.527 20.679) rotate(180)"/>\n' +
        "</svg>\n",
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z"/>\n' +
        "</svg>\n",
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 30,
        dots: true,
      },
      375: {
        items: 1,
        stagePadding: 45,
        margin: 30,
        dots: true,
      },
      401: {
        items: 1,
        stagePadding: 50,
        margin: 40,
        dots: true,
      },
      576: {
        items: 2,
        stagePadding: 10,
        margin: 30,
      },
      768: {
        items: 2,
        stagePadding: 50,
        margin: 40,
      },
      992: {
        items: 2,
        stagePadding: 100,
        margin: 40,
      },
      1200: {
        items: 3,
        stagePadding: 60,
        margin: 40,
      },
      1361: {
        items: 3,
        stagePadding: 100,
        margin: 50,
      },
      1441: {
        items: 3,
        stagePadding: 100,
        margin: 60,
      },
      1601: {
        items: 3,
        stagePadding: 110,
        margin: 80,
      },
      1801: {
        items: 3,
        stagePadding: 140,
        margin: 100,
      },
    },
  });

  // ----------------studio_slider2---------------------------------------
  $(".gallary_slider_block .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    dots: false,
    stagePadding: 400,
    navText: [
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z" transform="translate(19.527 20.679) rotate(180)"/>\n' +
        "</svg>\n",
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z"/>\n' +
        "</svg>\n",
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
        margin: 30,
        center: false,
        dots: true,
      },
      401: {
        items: 1,
        stagePadding: 70,
        margin: 30,
        center: false,
        dots: true,
      },
      576: {
        items: 2,
        stagePadding: 80,
        margin: 30,
        center: false,
      },
      768: {
        items: 1,
        stagePadding: 120,
      },
      992: {
        items: 1,
        stagePadding: 160,
      },
      1200: {
        items: 1,
        stagePadding: 200,
      },
      1361: {
        items: 1,
        stagePadding: 250,
      },
      1531: {
        items: 1,
        stagePadding: 300,
      },
      1601: {
        items: 1,
        stagePadding: 400,
      },
    },
  });

  // ----------------studio_slider1---------------------------------------
  $(".studio_slider1 .owl-carousel").owlCarousel({
    navText: [
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z" transform="translate(19.527 20.679) rotate(180)"/>\n' +
        "</svg>\n",
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z"/>\n' +
        "</svg>\n",
    ],
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 70,
        margin: 15,
      },
      375: {
        items: 1,
        stagePadding: 70,
        margin: 30,
      },
      400: {
        items: 1,
        stagePadding: 100,
        margin: 30,
      },
      450: {
        items: 2,
        stagePadding: 50,
        margin: 30,
      },
      576: {
        items: 2,
        stagePadding: 40,
        margin: 20,
      },
      768: {
        items: 2,
        stagePadding: 60,
        margin: 20,
      },
      992: {
        items: 3,
        stagePadding: 60,
        margin: 25,
      },
      1200: {
        items: 4,
        stagePadding: 80,
        margin: 25,
      },
      1441: {
        items: 4,
        stagePadding: 100,
        margin: 35,
      },
      1601: {
        items: 4,
        stagePadding: 120,
        margin: 40,
      },
      1801: {
        items: 4,
        stagePadding: 165,
        margin: 60,
      },
    },
  });

  // ------------------------------------------------------------
  $(".slider_block .owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8.281" height="14.483" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z" transform="translate(19.527 20.679) rotate(180)"/>\n' +
        "</svg>\n",
      "\n" +
        '<svg xmlns="http://www.w3.org/2000/svg" width="8.281" height="14.483" viewBox="0 0 8.281 14.483">\n' +
        '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z"/>\n' +
        "</svg>\n",
    ],
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      576: {
        items: 2,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
        stagePadding: 0,
        margin: 0,
      },
      1440: {
        items: 2,
        stagePadding: 15,
        margin: 30,
      },
      1600: {
        items: 2,
        stagePadding: 70,
        margin: 40,
      },
      1800: {
        items: 2,
        stagePadding: 140,
        margin: 40,
      },
      1900: {
        items: 2,
        stagePadding: 210,
        margin: 40,
      },
    },
  });

  //ready end here
});

//------loader_code--------------------------------------------
$(window).on("load", function () {
  $(".lds-hourglass").fadeOut("slow");
  $("body").toggleClass("cm-overflow_loader");
});

var get_select = document.querySelectorAll(" .nav .color_hover ");
console.log(get_select);
get_select.forEach((index) => {
  index.addEventListener("click", function () {
    document.querySelector(".parent_nav").classList.remove("active");
    document.querySelector("html").classList.remove("cm-overflow");
  });
});

//service page slider in small screen--------------------------------------------------

function slider123() {
  var checkWidth = $(window).width();

  var owlPost = $(".mySlider");

  if (checkWidth >= 768) {
    if (typeof owlPost.data("owl.carousel") != "undefined") {
      owlPost.data("owl.carousel").destroy();
    }

    owlPost.removeClass("owl-carousel");
  } else if (checkWidth <= 767) {
    owlPost.addClass("owl-carousel");

    owlPost.owlCarousel({
      navText: [
        "\n" +
          '<svg xmlns="http://www.w3.org/2000/svg" width="8.281" height="14.483" viewBox="0 0 8.281 14.483">\n' +
          '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z" transform="translate(19.527 20.679) rotate(180)"/>\n' +
          "</svg>\n",
        "\n" +
          '<svg xmlns="http://www.w3.org/2000/svg" width="8.281" height="14.483" viewBox="0 0 8.281 14.483">\n' +
          '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z"/>\n' +
          "</svg>\n",
      ],
      loop: true,
      margin: 200,
      nav: true,
      //  autoplay:true,
      // autoplayTimeout:1000,
      // autoplayHoverPause:true,
      autoHeight: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 1,
        },
        675: {
          items: 1,
        },
        767: {
          items: 1,
        },
      },
    });
  }
}

//news page slider in small screen--------------------------------------------------

function slider111() {
  var checkWidth = $(window).width();

  var owlPost = $(".news_slider");

  if (checkWidth >= 992) {
    if (typeof owlPost.data("owl.carousel") != "undefined") {
      owlPost.data("owl.carousel").destroy();
    }

    owlPost.removeClass("owl-carousel");
  } else if (checkWidth <= 991) {
    owlPost.addClass("owl-carousel");

    owlPost.owlCarousel({
      navText: [
        "\n" +
          '<svg xmlns="http://www.w3.org/2000/svg" width="8.281" height="14.483" viewBox="0 0 8.281 14.483">\n' +
          '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z" transform="translate(19.527 20.679) rotate(180)"/>\n' +
          "</svg>\n",
        "\n" +
          '<svg xmlns="http://www.w3.org/2000/svg" width="8.281" height="14.483" viewBox="0 0 8.281 14.483">\n' +
          '  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z"/>\n' +
          "</svg>\n",
      ],
      loop: true,
      margin: 20,
      nav: true,
      autoHeight: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
      },
    });
  }
}

// ---------------------------------------------------------
//mobile drop_down click function

function kurse_day_title() {
  if ($(window).width() <= 575) {
    $(function () {
      $(".day_list ul li a").each(function (i) {
        len = $(this).text().length;
        if (len > 2) {
          $(this).text($(this).text().substr(0, 2) + ".");
        }
      });
    });
  } else if ($(window).width() > 575) {
    $(function () {
      var make_array = [];
      $(".day_list ul li a").each(function () {
        make_array.push($(this).attr("data-value"));
      });

      $(".day_list ul li").each(function (index) {
        $(this).find("a").text(make_array[index]);
      });
    });
  }
}

// ------cursor js--------------------------------------------------------------------------------------------

const updateProperties = (elem, state) => {
  elem.style.setProperty("--x", `${state.x}px`);
  elem.style.setProperty("--y", `${state.y}px`);
  elem.style.setProperty("--width", `${state.width}px`);
  elem.style.setProperty("--height", `${state.height}px`);
  elem.style.setProperty("--radius", state.radius);
  elem.style.setProperty("--scale", state.scale);
};

document.querySelectorAll(".cursor").forEach((cursor) => {
  let onElement;

  const createState = (e) => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 30,
      height: 30,
      radius: "50%",
    };

    const computedState = {};

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect();
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius;

      computedState.x = left + width / 2;
      computedState.y = top + height / 2;
      computedState.width = width;
      computedState.height = height;
      computedState.radius = radius;
    }

    return {
      ...defaultState,
      ...computedState,
    };
  };

  document.addEventListener("mousemove", (e) => {
    const state = createState(e);
    updateProperties(cursor, state);
  });
  // document.querySelectorAll('.carousel__button').forEach(elem => {
  //   elem.addEventListener('mouseenter', () => (onElement = elem))
  //   elem.addEventListener('mouseleave', () => (onElement = undefined))
  // })
});

// -----------------text-animation---------------------------------------------------------------------------------------
var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.1;
var sBetweenWord = 0.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  var charIndex = 0;
  var maxCharIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML += text[charIndex];
    if (charIndex == maxCharIndex) {
      clearInterval(typeInterval);
      setTimeout(function () {
        deleting(textIndex, text);
      }, sBetweenWord * 1000);
    } else {
      charIndex += 1;
    }
  }, sPerChar * 1000);
}

function deleting(textIndex, text) {
  var minCharIndex = 0;
  var charIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML = text.substr(0, charIndex);
    if (charIndex == minCharIndex) {
      clearInterval(typeInterval);
      textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
      setTimeout(function () {
        typing(textIndex, textArr[textIndex]);
      }, sBetweenWord * 1000);
    } else {
      charIndex -= 1;
    }
  }, sPerChar * 1000);
}

// -------------------------------------------------------------
Fancybox.bind('[data-fancybox="gallery"]', {
  Image: {
    zoom: false,
    wheel: "close",
  },

  // Custom animations
  showClass: "fancybox-zoomIn",
  hideClass: "fancybox-zoomOut",
});
