
(function($) {
	"use strict";


	/*==================================================================
	[ Validate ]*/
	var input = $('.validate-input .input100');

	$('.validate-form').on('submit', function() {
		var check = true;

		for (var i = 0; i < input.length; i++) {
			if (validate(input[i]) == false) {
				showValidate(input[i]);
				check = false;
			}
		}

		return check;
	});


	/*==================================================================
	[ Reset ]*/
	
	$('.validate-form').on('reset', function() {
		
		for (var i = 0; i < input.length; i++) {
			hideValidate(input[i]);
		}

		return check;
	});


	$('.validate-form .input100').each(function() {
		$(this).focus(function() {
			hideValidate(this);
		});
	});

	function validate(input) {

		if ($(input).val().trim() == '') {
			return false;
		}


	}

	function showValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).removeClass('alert-validate');
	}



})(jQuery);