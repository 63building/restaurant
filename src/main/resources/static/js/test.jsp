function test() {
	$.ajax({
		type : "GET",
		url : "get/do",
		data : {
			kor : "${kor}",
			us : "${us}"
		},
		error : function(error) {
			console.log("error");
		},
		success : function(data) {
			console.log("success");

		}
	});
}