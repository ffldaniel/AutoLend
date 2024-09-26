jQuery(document).ready(function () {

  // mean menu
    jQuery('.main-nav').meanmenu({
      meanMenuContainer: '.main-nav-wrap',
      meanScreenWidth: "991",
      onePage: true,
      meanContract:'',
      meanExpand: '',
    });


  // slides

  $('#videoSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots:false,
    arrows:true,
    prevArrow:$('.video-prev'),
    nextArrow:$('.video-next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#carPgBnrSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots:false,
    arrows:true,
    prevArrow:$('.tesla-bnr-slider-nav'),
    nextArrow:$('.tesla-bnr-slider-next'),
    fade: true,
  });

  $('#teslaDetlsSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots:true,
    arrows:true,
    prevArrow:$('.tesla-detls-slider-nav'),
    nextArrow:$('.tesla-detls-slider-next'),
    autoplay: false,
    autoplaySpeed: 4000,
    speed:1000,
    pauseOnHover:false,
  });




  $("input[type=range]").on("input", function(event) {
    const slider = $(this);
    const tempSliderValue = event.currentTarget.value;
    
    const progress = (tempSliderValue / slider.attr("max")) * 100;
    
    slider.css("background", `linear-gradient(to right, #0073e6 ${progress}%, #f4f3ee ${progress}%)`);
  });



  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


 $('[data-bs-toggle="popover"]').popover({
    html: true,
  }).on('shown.bs.popover', function(e) {
    var el = $(e.target);
    var po = $('#' + el.attr('aria-describedby'));
    var poh = po.find('.popover-body');
    poh.append('<div class="popover-close" style="cursor:pointer;">&times;</div>');
    var cb = poh.find('.popover-close');
    var bpo = bootstrap.Popover.getInstance(e.target);
    cb.on('click', function(e) {
      bpo.hide();
    });
  });



  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
  });


});