var sitekey = '6LfMqz0UAAAAADWsX2DPOMP7XETM6xJGXpMC0lt1';
var recaptcha0,recaptcha0_1,recaptcha1,recaptcha2,recaptcha4,recaptcha4_1,recaptcha4_2,recaptcha4_3,recaptcha4_4,recaptcha4_5,recaptcha5;
var onloadReCaptchaInvisible = function() {
  if ( $( "#recaptcha1" ).length ){ recaptcha1 = grecaptcha.render('recaptcha1', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha1",
    "size": "invisible"
  });
  };
  if ( $( "#recaptcha2" ).length ){recaptcha2 = grecaptcha.render('recaptcha2', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha2",
    "size": "invisible"
  });}
  if ( $( "#recaptcha4" ).length ){recaptcha4 = grecaptcha.render('recaptcha4', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha4",
    "size": "invisible"
  });}
  if ( $( "#recaptcha5" ).length ){recaptcha5 = grecaptcha.render('recaptcha5', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha5",
    "size": "invisible"
  });}
  if ( $( "#recaptcha0" ).length ){recaptcha0 = grecaptcha.render('recaptcha0', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha0",
    "size": "invisible"
  });}
  if ( $( "#recaptcha0_1" ).length ){recaptcha0_1 = grecaptcha.render('recaptcha0_1', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha0_1",
    "size": "invisible"
  });}
  if ( $( "#recaptcha4_1" ).length ){recaptcha4_1 = grecaptcha.render('recaptcha4_1', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha4_1",
    "size": "invisible"
  });}
  if ( $( "#recaptcha4_2" ).length ){recaptcha4_2 = grecaptcha.render('recaptcha4_2', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha4_2",
    "size": "invisible"
  });}
  if ( $( "#recaptcha4_3" ).length ){recaptcha4_3 = grecaptcha.render('recaptcha4_3', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha4_3",
    "size": "invisible"
  });}
  if ( $( "#recaptcha4_4" ).length ){recaptcha4_4 = grecaptcha.render('recaptcha4_4', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha4_4",
    "size": "invisible"
  });}
  if ( $( "#recaptcha4_5" ).length ){recaptcha4_5 = grecaptcha.render('recaptcha4_5', {
    "sitekey": sitekey,
    "callback": "onSubmitReCaptcha4_5",
    "size": "invisible"
  });}
};

function onSubmitReCaptcha0(token) {
  var idForm = 'form0';
  sendForm(idForm, 'template/php/form0.php', recaptcha0);
}
function onSubmitReCaptcha1(token) {
  var idForm = 'form1';
  sendForm(idForm, 'template/php/form1.php', recaptcha1);
}
function onSubmitReCaptcha2(token) {
  var idForm = 'form2';
  sendForm(idForm, 'template/php/form0_1.php', recaptcha2);
}
function onSubmitReCaptcha4(token) {
  var idForm = 'form4';
  sendForm(idForm, 'template/php/form4.php', recaptcha4);
}
function onSubmitReCaptcha5(token) {
  var idForm = 'form5';
  sendForm(idForm, 'template/php/form5.php', recaptcha5);
}
function onSubmitReCaptcha0_1(token) {
  var idForm = 'form0_1';
  sendForm(idForm, 'template/php/form0_1.php', recaptcha0_1);
}
function onSubmitReCaptcha4_1(token) {
  var idForm = 'form4_1';
  sendForm(idForm, 'template/php/form4.php', recaptcha4_1);
}
function onSubmitReCaptcha4_2(token) {
  var idForm = 'form4_2';
  sendForm(idForm, 'template/php/form4.php', recaptcha4_2);
}
function onSubmitReCaptcha4_3(token) {
  var idForm = 'form4_3';
  sendForm(idForm, 'template/php/form4.php', recaptcha4_3);
}
function onSubmitReCaptcha4_4(token) {
  var idForm = 'form4_4';
  sendForm(idForm, 'template/php/form4.php', recaptcha4_4);
}
function onSubmitReCaptcha4_5(token) {
  var idForm = 'form4_5';
  sendForm(idForm, 'template/php/form4.php', recaptcha4_5);
}

var prepareDataForm = function(feedbackForm, captchaID) {
    // создаём экземпляр объекта FormData
   // var formData = new FormData(feedbackForm);
	var formData = $("#"+feedbackForm).serialize();
	//console.log(formData);
    // добавим ответ invisible reCaptcha
    //formData.append('g-recaptcha-response', grecaptcha.getResponse(captchaID));
    return formData;
}

var sendForm = function(feedbackForm, url, captchaID) {
  $.ajax({
    type: "POST",
    url: url,
    data: prepareDataForm(feedbackForm, captchaID),
	async: true,
	dataType: 'json',
	// processData: false,
	// contentType: false,
    success: function(data) {
		if(data.ok) {
			if(feedbackForm=='form0') {
				$('#call_me .abs_block').fadeIn("normal");
				setTimeout(function(){$('#call_me .abs_block').fadeOut('normal')},2000);
				setTimeout(function(){$('#call_me').arcticmodal('close')},2000);
				$('#form0').trigger("reset");
			}
			if(feedbackForm=='form0_1') {
				$('#zakaz_me .abs_block').fadeIn("normal");
				setTimeout(function(){$('#zakaz_me .abs_block').fadeOut('normal')},2000);
				setTimeout(function(){$('#zakaz_me').arcticmodal('close')},2000);
				$('#form0_1').trigger("reset");
			}
			if(feedbackForm=='form1') {
				$('.get_price .abs_block').fadeIn("normal");
				var i= $('.get_price input[name="name"]').val();
				$('.get_price .abs_block .namm').text(i);
				setTimeout(function(){$('.get_price .abs_block').fadeOut('normal')},4000);
				$('#form1').trigger("reset");
			}
			if(feedbackForm=='form2') {
				$('.otziv_block .abs_block').fadeIn("normal");
				setTimeout(function(){$('.otziv_block .abs_block').fadeOut('normal')},2000);
				$('#form2').trigger("reset");
			}
			if(feedbackForm=='form4' || feedbackForm=='form4_1' || feedbackForm=='form4_2' || feedbackForm=='form4_3' || feedbackForm=='form4_4' || feedbackForm=='form4_5') {
				$('#'+feedbackForm).closest('.form0_block').find('.abs_block').fadeIn("normal");
				setTimeout(function(){$('.b-modal').arcticmodal('close')},2000);
				setTimeout(function(){$('.opt_me').arcticmodal('close')},2000);
				setTimeout(function(){$('.rozn_me').arcticmodal('close')},2000);
				setTimeout(function(){$('.b-modal .abs_block').fadeOut('normal')},2000);
				$('#'+feedbackForm).trigger("reset");
			}
			if(feedbackForm=='form5') {
				$('#call_me1 .abs_block').fadeIn("normal");
				var q= $('#call_me1 input[name="name"]').val();
				$('#call_me1 .abs_block .namm').text(q);
				setTimeout(function(){$('#call_me1 .abs_block').fadeOut('normal')},2000);
				setTimeout(function(){$('#call_me1').arcticmodal('close')},2000);
				$('#form5').trigger("reset");
			}
		}
	}
  });
}

$('.btn11').click (function(){
  $(this).toggleClass('open');
  $('.main_menu nav').slideToggle();
});

$(window).scroll(function () {
		var pos = $(this).scrollTop()+10;
		var destination1 = $('#header').outerHeight();
		if(pos>destination1) 
			$('.main_menu').addClass('active');
		else
			$('.main_menu').removeClass('active');
	});
	
$(".input-mask").inputmask("+7 (999) 999-99-99");

$(document).ready(function(){
	function falidator(item) {
		check = true;
		$(item).find('.required').each(function() {
			if($(this).hasClass('required') && $(this).val() == '') {
				check = false;
				$(this).css('border', '1px red solid' );
			} else {
				$(this).css('border', '1px #b7b7b7 solid');
			}
		});
		if(check) {
			return true;
		} else {
			return false;
		}
	}
	

	/**************************/
	$("#form0").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha0);
		return false;
	});
	/**************************/
	/**************************/
	$("#form0_1").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha0_1);
		return false;
	});
	/**************************/
	/**************************/
	$("#form1").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha1);	
		return false;
	});
	/**************************/
	/**************************/
	$("#form2").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha2);	
		return false;
	});
	/**************************/	
	/**************************/
	$("#form3").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		var userCaptchaInput = $("#form3 input[name='captcha_validation']").val();
		var validCaptcha = $("#form3 input[name='captcha']").val();
		if (userCaptchaInput != validCaptcha) 
		{
			$("#form3 input[name='captcha_validation']").val('');
			$("#form3 input[name='captcha_validation']").css('border', '1px red solid');
			e.preventDefault();
			return false;
		}
		else 
		{
			$("#form3 input[name='captcha_validation']").css('border', '1px #b7b7b7 solid');
		}
		$.ajax({ 
			type: "POST", 
			url: "template/php/form3.php",
			data: $("#form3").serialize(),
			success: function(html) { 
			
			}
		});
		$('.otziv_block .abs_block').fadeIn("normal");
		setTimeout(function(){$('.otziv_block .abs_block').fadeOut('normal')},2000);
		$('#form3').trigger("reset");
		return false;
	});
	/**************************/
	/**************************/
	$("#form4").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha1);	
		return false;
	});
	/**************************/
	/**************************/
	$("#form4_1").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha4_1);	
		return false;
	});
	/**************************/
	/**************************/
	$("#form4_2").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha4_2);	
		return false;
	});
	/**************************/
	/**************************/
	$("#form4_3").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha4_3);	
		return false;
	});
	/**************************/
	/**************************/
	$("#form4_4").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha4_4);	
		return false;
	});
	/**************************/
	/**************************/
	$("#form4_5").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha4_5);	
		return false;
	});
	/**************************/
	/**************************/
	$("#form5").submit(function(event){
		event.preventDefault();
		if(!falidator(this)) return false;
		grecaptcha.execute(recaptcha5);	
		return false;
	});
	/**************************/
});
	
$(document).ready(function() {

	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		},
		padding:0
	});

});

function filter() {
 var diameter = '.'+$('#diameter_block input:radio:checked').val();
 var liquidType = '.'+$('#liquid_type_block input:radio:checked').val();
    if(diameter=='.on'){diameter='';}
    if(liquidType=='.on'){liquidType='';} 
 $('#filterList .block').hide(); 
    $('#filterList .block'+diameter+liquidType).show();
}

$(document).ready(function(){
    $('#menu input:radio').change(filter).change();
});

$('.call_me').click(function(){
	$('#call_me').arcticmodal()
});

$('.call_me1').click(function(){
	$('#call_me1').arcticmodal()
});

$('.zakaz_me').click(function(){
	$('#zakaz_me').arcticmodal()
});

$('.opt_me_button').click(function(){
	$(this).parent().parent().parent().find('.opt_me').arcticmodal();
});

$('.rozn_me_button').click(function(){
	$(this).parent().parent().parent().find('.rozn_me').arcticmodal();
});

$('.vide_button').click(function(){
	$('#video_modal').arcticmodal()
});

