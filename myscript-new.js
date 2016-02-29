 var $ = jQuery;
$(document).ready(function(){
	$('#submit-page').click(function(){
		$('#form-page').css("display", "block");
		$('#home-page').css("display", "none");
	});
	var count = 1;  
	$('#submit-button').click(function(){
		var Cname = ($.trim($('#form-page #cname').val()));
		var Model = ($.trim($('#form-page #model').val()));
		var Mileage = ($.trim($('#form-page #mileage').val()));
		var Colour = $('#form-page #colour').val();
		if (Cname == "" || Model == "" || Mileage == "") {
			//alert ('Enter Value');
		}
		else {
			$('#form-page #cname').val('');
			$('#form-page #model').val('');
			$('#form-page #mileage').val('');
			$('#form-page #colour').val('');
			$('#home-page').append('<div id="image'+count+'"	 class="image"></div> ');
			$('#home-page').css("display", "block");
			$('#form-page').css("display", "none");
			var dynamic_id = 'image'+ count;	
			$('#home-page #' + dynamic_id).html('<a href="#">' +Cname+ '</a>');
			$('#detail-page').append('<div id="image'+count+'" style="display:none"></div> ');
			$('#detail-page #' + dynamic_id).html("<div>" +Cname+ "</div><div>" +Model+ "</div><div>" +Mileage+ "</div><div>" +Colour+ "</div>");
			count++;
			$('.image').click(function(){ 
				$('#home-page').css("display", "none");
				$('#form-page').css("display", "none");
				var _id = $(this).attr('id');
				$('#detail-page').css("display", "block");
				$('#detail-page #' + _id).css("display", "block");
				$('#home-link').click(function(){ 
					$('#detail-page #' + _id).css("display", "none");
					$('#detail-page').css("display", "none");
					$('#form-page').css("display", "none");
					$('#home-page').css("display", "block");
				});
			});
	   
		}
	});   	
 });	
