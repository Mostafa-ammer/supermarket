/*start jquery code*/



/************ OWL carousel *****************/




const totop=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    
    if(window.pageYOffset >100){
        totop.classList.add("active");
    }
    else{
          totop.classList.remove("active"); 
    }
})

















$(document).ready(function(){
  $("#user").click(function(){
    $("#choose").toggle();
  });
    
});



$(document).ready(function(){
  $("#show").click(function(){
    $("#list").toggle("slow");
  });
    
});

function hover(){
    
    document.getElementById('img1').src='img/teen2.png';
    
}

function hoverout(){
    
    document.getElementById('img1').src='img/teen.png';
    
}



function hoverapple(){
    
    document.getElementById('img2').src='img/apple2.png';
    
}

function hoveroutapple(){
    
    document.getElementById('img2').src='img/apple.png';
    
}



function hoverstr(){
    
    document.getElementById('img3').src='img/frawla2.png';
    
}

function hoveroutstr(){
    
    document.getElementById('img3').src='img/frawla.png';
    
}


function hovermooz(){
    
    document.getElementById('img4').src='img/mooz2.png';
    
}

function hoveroutmooz(){
    
    document.getElementById('img4').src='img/mooz.png';
    
}














function hoverfresh(){
    
    document.getElementById('img5').src='img/fresh2.png';
    
}

function hoveroutfresh(){
    
    document.getElementById('img5').src='img/Fresh%20pink.png';
    
}



function hoverm(){
    
    document.getElementById('img6').src='img/m2.png';
    
}

function hoveroutm(){
    
    document.getElementById('img6').src='img/m.png';
    
}



function hoverrowman(){
    
    document.getElementById('img7').src='img/frowman2.png';
    
}

function hoveroutrowman(){
    
    document.getElementById('img7').src='img/roman.png';
    
}


function hoverred(){
    
    document.getElementById('img8').src='img/red2.png';
    
}

function hoveroutred(){
    
    document.getElementById('img8').src='img/red.png';
    
}




function change1(){
    
    document.getElementById('imgs1').src='img/red.png';
    
}

function back1(){
    
    document.getElementById('imgs1').src='img/mooz.png';
    
}



function change2(){
    
    document.getElementById('imgs2').src='img/roman.png';
    
}

function back2(){
    
    document.getElementById('imgs2').src='img/m.png';
    
}





function change3(){
    
    document.getElementById('imgs3').src='img/fresh2.png';
    
}

function back3(){
    
    document.getElementById('imgs3').src='img/Fresh%20pink.png';
    
}




function change4(){
    
    document.getElementById('imgs4').src='img/fresh2.png';
    
}

function back4(){
    
    document.getElementById('imgs4').src='img/red.png';
    
}






function change5(){
    
    document.getElementById('imgs5').src='img/fresh2.png';
    
}

function back5(){
    
    document.getElementById('imgs5').src='img/red2.png';
    
}







function change6(){
    
    document.getElementById('imgs6').src='img/fresh2.png';
    
}

function back6(){
    
    document.getElementById('imgs6').src='img/mooz2.png';
    
}





function change7(){
    
    document.getElementById('imgs7').src='img/fresh2.png';
    
}

function back7(){
    
    document.getElementById('imgs7').src='img/m.png';
    
}




function change8(){
    
    document.getElementById('imgs8').src='img/fresh2.png';
    
}

function back8(){
    
    document.getElementById('imgs8').src='img/m2.png';
    
}




function change9(){
    
    document.getElementById('imgs9').src='img/fresh2.png';
    
}

function back9(){
    
    document.getElementById('imgs9').src='img/Fresh%20pink.png';
    
}





$(document).ready(function(){
$("#btn1").click(function(){
    $("#button1content").show(1000);
  $("#button3content").hide(1000);
     $("#button2content").hide(1000);
});
});
$(document).ready(function(){

$("#btn2").click(function(){
    $("#button2content").show(1000);
  $("#button3content").hide(1000);
     $("#button1content").hide(1000);
});

});

$(document).ready(function(){
$("#btn3").click(function(){
    $("#button3content").show(1000);
  $("#button1content").hide(1000);
     $("#button2content").hide(1000);
});

});


$(document).ready(function(){
  $("#img-special1").mouseenter(function(){
   $("#overlay1").show(1000);
  });
});

$(document).ready(function(){
  $("#img-special1").mouseleave(function(){
   $("#overlay1").hide(1000);
  });
});

$(document).ready(function(){
  $("#img-special2").mouseenter(function(){
   $("#overlay2").show(1000);
  });
});

$(document).ready(function(){
  $("#img-special2").mouseleave(function(){
   $("#overlay2").hide(1000);
  });
});




$(document).ready(function(){
  $("#a").mouseenter(function(){
   $("#check1").show();
  });
});

$(document).ready(function(){
  $("#a").mouseleave(function(){
   $("#check1").hide();
  });
});


$(document).ready(function(){
  $("#b").mouseenter(function(){
   $("#check2").show();
  });
});

$(document).ready(function(){
  $("#b").mouseleave(function(){
   $("#check2").hide();
  });
});


$(document).ready(function(){
  $("#c").mouseenter(function(){
   $("#check3").show();
  });
});

$(document).ready(function(){
  $("#c").mouseleave(function(){
   $("#check3").hide();
  });
});


$(document).ready(function(){
  $("#d").mouseenter(function(){
   $("#check4").show();
  });
});

$(document).ready(function(){
  $("#d").mouseleave(function(){
   $("#check4").hide();
  });
});





$(document).ready(function(){
  $('.nears').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    margin:10,
      dots:true,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:4,
            nav:false
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
        }
    }
});
});



function counterdown(){
    var now=new Date();
    var eventdate=new Date(2016,11,25);
    var currenttime=now.getTime();
    var eventtime=eventdate.getTime();
    var remtime= currenttime-eventtime;
    
    var s=Math.floor(remtime/1000);
    var m=Math.floor(s/60);
    var h=Math.floor(m/60);
     var d=Math.floor(h/24);
    
    h %=24;
    m %=60;
    s %=60;

    h=(h<10)? "0"+h:h;
     m=(m<10)? "0"+m:m;
     s=(h<10)? "0"+s:s;
    document.getElementById('days').textContent=d;
    document.getElementById('days').innerText=d;
    document.getElementById('houres').textContent=h;
    document.getElementById('minutes').textContent=m;
    document.getElementById('seconds').textContent=s;
    setTimeout(counterdown,1000);
    
}
counterdown();



$(document).ready(function(){
  $('.special-products').owlCarousel({
    loop:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    margin:10,
      dots:false,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:1,
            nav:true,
        },
        1000:{
            items:2,
            nav:true,
        }
    }
})
});


$(document).ready(function(){
  $('.testmonial').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    margin:10,
      dots:true,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:1,
            nav:false,
        }
    }
})
});


$(document).ready(function(){
  $('.special-products-owl ').owlCarousel({
    loop:false,
    autoplay:false,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    margin:10,
      dots:false,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:2,
            nav:true,
        },
        600:{
            items:2,
            nav:true,
        },
        1000:{
            items:2,
            nav:true,
        }
    }
})
});

$(document).ready(function(){
  $('.brand').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplaySpeed:1000,
    margin:10,
    responsiveClass:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
           
        }
    }
})
});







$(document).ready(function(){
  $('.owl-panner').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    margin:10,
      dots:true,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
        }
    }
})
});



$(document).ready(function(){
  $('.baner-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    margin:10,
      dots:true,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
        }
    }
})
});








//$(document).ready(function(){
//  $(".imgs").mouseenter(function(){
//          $(".imgs").addClass("animated bounceInLeft");
//      
//      
//  });
//});
//







$(document).ready(function(){
    $('.soon-arrive').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    dots: false,
    items:1,
    autoplayTimeout:2000,
    autoplaySpeed:500,
    })
})




















/************************ Start Tabs Slider *********************/
$(document).ready(function(){
    $('.featured').owlCarousel({
    loop:true,
    margin:20,
    dots: false,

    responsive:{
        0:{items:2,nav:true},
        765:{items:3,nav:true},
        990:{items:4, nav:true,}
    }
    })
});


$(document).ready(function(){
    $('.best-seller').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
    nav:true,
    responsive:{
        0:{items:2,nav:true},
        765:{items:3,nav:true},
        990:{items:4, nav:true,}
    }
    
    })
});


$(document).ready(function(){
    $('.top-rated').owlCarousel({
    loop:true,
    margin:20,
    dots: false,

    responsive:{
        0:{items:2,nav:true},
        765:{items:3,nav:true},
        990:{items:4, nav:true,}
    }
    
    })
});

$(document).ready(function(){
    $('.mostviewed').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
        nav:true,
        responsive:{
            0:{items:2,nav:true},
            765:{items:3,nav:true},
            990:{items:4, nav:true,}
        }
    
    })
    
});

/************************ End Tabs Slider *********************/

/****************** start offer slidre ****************/
$(document).ready(function(){
    $('.offer').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:1500,
    autoplayHoverPause:true,
    margin:10,
    dots: false,

    responsive:{
        0:{items:1,nav:true},
        600:{items:1,nav:true},
        1000:{items:1, nav:true,}
    }
    
    })
});







/**********************************About page owl**********************/
/******* our team slider ********/
$(document).ready(function(){
    $('.team').owlCarousel({
    loop:true,
    // autoplay:true,
    // autoplayTimeout:6000,
    // autoplaySpeed:1500,
    autoplayHoverPause:true,
    margin:20,
    dots: false,
    nav:false,
    responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:4}
    }
    
    })
});

/****************** start offer code img change ****************/
$(document).ready(function(){
    $('.small-img').click(function(){
        var imgSrc =  $(this).attr("src");
        $('.top-img').attr('src',imgSrc);
    });
});

/****************** end offer slidre ****************/



/******************** start testmonial slider ******************/

$(document).ready(function(){
    $('.jumbotron').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1500,
    autoplayHoverPause:true,
    
    })
});



// $(document).ready(function(){
//     $('.hellow').owlCarousel({
//     loop:true,
//     items:1,
//     autoplay:true,
//     autoplayTimeout:5000,
//     autoplaySpeed:1500,
//     autoplayHoverPause:true,
    
//     })
// });

/******************** end testmonial slider ******************/

/********************* start top category slider ***************/

$(document).ready(function(){
    $('.categ1').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    
    })
});

$(document).ready(function(){
    $('.categ2').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    
    })
});

$(document).ready(function(){
    $('.categ3').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    
    })
});



/********************* end top category slider ***************/




/************************* start brands slider******************/
$(document).ready(function(){
  $('.brand').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplaySpeed:1000,
    margin:10,
    responsiveClass:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
           
        }
    }
})
});
/************************* end brands slider******************/




/************************* start related products slider******************/

$(document).ready(function(){
    $('.related').owlCarousel({
    loop:false,
    margin:10,
    dots: false,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{items:2},
        600:{items:3},
        1000:{items:4,nav:true,}
    }
    
    })
});
/************************* end related products slider******************/




/***************** end OWL carousel *****************/




$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


/*********************** start jquery code ****************/
$(document).ready(function(){
  
    
  $("#user").click(function(){
    $("#log-regi").toggle('slow');
  });

        
    
  $("#cart , #cart-items").hover(function(){
  $("#cart-items").toggle();
  });

    
    
    
  $("#wish-list , #wish-list-items").hover(function(){
  $("#wish-list-items").toggle();
  });
    
    /*******************************************************/
//    $("#shop").hover(function(){
//  $(".shop-category").toggle('slow');
//  });

});



/**************************************************************************/
/****************** register validation *****************/
$(document).ready(function(){

       $(" #name").blur(function(){
        if($('#name').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-user').css('color','green');
            $('p.name').addClass('d-none');
            
        }else{
            $(this).css('border-color','red');
            $('.register .fa-user').css('color','red');
            $('p.name').removeClass('d-none');
        }
      });
    
    $("#email").blur(function(){
        if($('#email').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-at').css('color','green');
            $('p.email').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.register .fa-at').css('color','red');
            $('p.email').removeClass('d-none');
        }
      });
    
      $("#pass").blur(function(){
        if($('#pass').val() != ""){
            $(this).css('border-color','green');
            $('.register .fa-unlock').css('color','green');
            $('p.pass').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.register .fa-unlock').css('color','red');
            $('p.pass').removeClass('d-none');
        }
      });
    
      $('#re-pass').change(function(){
          if($('#pass').val() == $('#re-pass').val()){
            $(this).css('border-color','green');
            $('.register .fa-undo').css('color','green');
            $('p.re-pass').addClass('d-none');
          }else{
            $(this).css('border-color','red');
            $('.register .fa-undo').css('color','red');
            $('p.re-pass').removeClass('d-none'); 
          }
      });


      $('.register button').click(function(){

        if ($('#name').val() !=''){
                if ($('#email').val() !='') {
                    if ($('#pass').val() !='') {
                        if ($('#re-pass').val() !=''){
                            alert('good');
                        }else{
                        alert('re pass empty');
                        }
                    }else{
                        alert('pass empty');
                    }
                }else{
                    alert('email empty');
                }
            }else{
                alert('name empty');
            }
        
    
        });
    
});


/****************** login validation *****************/
$(document).ready(function(){

    $("#lo-email").blur(function(){
        if($('#lo-email').val() != ""){
            $(this).css('border-color','green');
            $('.login .fa-at').css('color','green');
            $('p.lo-email').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.login .fa-at').css('color','red');
            $('p.lo-email').removeClass('d-none');
        }
      });

      $("#lo-pass").blur(function(){
        if($('#lo-pass').val() != ""){
            $(this).css('border-color','green');
            $('.login .fa-unlock-alt').css('color','green');
            $('p.lo-pass').addClass('d-none');
        }else{
            $(this).css('border-color','red');
            $('.login .fa-unlock-alt').css('color','red');
            $('p.lo-pass').removeClass('d-none');
        }
      });

      $('.login button').click(function(){

        if ($('#lo-email').val() !=''){
                if ($('#lo-pass').val() !='') {alert('good');

                }else{ alert(' pass empty');}

            }else{ alert('email empty');}
        });

});






/**********************************shop page*************** */
$(document).ready(function(){
    $('.filter-icon').click(function(){
        $('#aside').toggleClass('aside-show');
        $('#aside').toggleClass('d-none col-3');
        $('.filter-icon').toggleClass('left-filter-icon');
        // if ($(window).width() > 765) {
        //     alert('hi')
        //     // $('#aside').addClass('d-none col-3');
        // }
    })
});





/**** filter price ****/
$(document).ready(function(){
    $("#myRange").on('input',function(){
      var val=$(this).val();
      $("#price").text(val);
    });
  });






/**********************************cart page ******************* */
$(document).ready(function(){


  
});

var count = parseInt($('#jq-quant').val()),
    price = parseInt($('.price').html()),
    totalPrice = $('#total-price');

$('#plus').click(function () {
    if (count >= 1) {
    $('#jq-quant').val(count += 1);
    totalPrice.html(parseInt(totalPrice.html()) + price);
}
    });





$('#sub').click(function () {
    if (count > 1) {
    $('#jq-quant').val(count -= 1);

    totalPrice.html(parseInt(totalPrice.html()) - price);
}

    });

/**************************single product page ************************* */









/* *********  F.A.Q CODE                      *************** */
$(document).ready(function(){
$("#item-five").click(function(){
    $(".accordion1").fadeIn();
$(".accordion2").hide();
$(".accordion3").hide();
$(".accordion4").hide();
$(".accordion5").hide();
});
$("#item-four").click(function(){
    $(".accordion2").fadeIn();
    $(".accordion1").hide();
$(".accordion3").hide();
$(".accordion4").hide();
$(".accordion5").hide();
});
$("#item-three").click(function(){
    $(".accordion3").fadeIn();
    $(".accordion1").hide();
    $(".accordion2").hide();
    $(".accordion4").hide();
    $(".accordion5").hide();
});
$("#item-two").click(function(){
    $(".accordion4").fadeIn();
    $(".accordion3").hide();
    $(".accordion1").hide();
    $(".accordion2").hide();
    $(".accordion5").hide();
});
$("#item-one").click(function(){
    $(".accordion5").fadeIn();
    $(".accordion4").hide();
    $(".accordion3").hide();
    $(".accordion1").hide();
    $(".accordion2").hide();
});



});
     

/************ contact page */


$(document).ready(function(){
    $(".span").click(function(){
//            $("#show").toggleClass("drobdown");
        
        $("#face").fadeToggle();
      $("#twit").fadeToggle(500);
      $("#inst").fadeToggle(1000);
    });
  });









