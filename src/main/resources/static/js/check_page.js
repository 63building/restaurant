$(document).ready(function(){
	
	$('ul.reservation-search li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.reservation-search li').removeClass('current');
		$('.serve-container').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

class AccountApi {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new AccountApi();
		}
		return this.#instance;
	}

	login() {

		$.ajax({
			async: false,
			type: "post",
			url: "/reserve/check/page",
			contentType: "application/json",
			data: JSON.stringify(),
			dataType: "json",
			success: response => {
				responseData = response.data;
			},
			error: error => {
				console.log(error);
			}
		});
		return responseData;
	}
}