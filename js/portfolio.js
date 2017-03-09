// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {$('body').on('click', 'a.scrollable', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
  event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-fixed-top'});
$(document).ready(function() {
  emailjs.init("user_cHwOetRKbvaczpM99yjXl");
  var myform = $("form#myform");
  myform.submit(function(event){
  	event.preventDefault();

  	var params = myform.serializeArray().reduce(function(obj, item) {
       obj[item.name] = item.value;
       return obj;
    }, {});

    console.log("----> " + params.email);
    if (isEmail(params.email) === false) {
      alert("please provide a valid E-Mail address");
      return null;
    }

    var service_id = "daveyxga_gmail_com";
    var template_id = "daveyx_ga_email_template";
    myform.find("button").text("Sending...");
    emailjs.send(service_id,template_id,params)
    	.then(function(){
         alert("Sent!");
         myform.find("button").text("Send");
       }, function(err) {
         alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
         myform.find("button").text("Send");
      });
    return false;
  });

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
});
