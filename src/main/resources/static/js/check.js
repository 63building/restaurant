window.onload = () => {
	CheckService.getInstance().setReserveData();
}

const searchObj = {
    reserveId: "",
    reserveName: "",
    reserveDate: "",
    reserveTime: "",
    number: "",
    email: "",
    adult: "",
    child: "",
    guest: ""
}

class CheckApi {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new CheckApi();
		}
		return this.#instance;
	}

	getCheckList() {
		let returnData = null;

		$.ajax({
			async: false,
			type: "get",
			url: "http://localhost:8000/api/search/contents",
			contentType: "application/json",
			data: JSON.stringify(),
			dataType: "json",
			success: response => {
				console.log(response);
                returnData = response.data;
			},
			error: error => {
				console.log(error);
			}
		});
		return returnData;
	}

}



class CheckService{
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new CheckService();
		}
		return this.#instance;
	}

	setReserveData() {
		const responseData = CheckApi.getInstance().getCheckList();
		
		// checkListBody = innerHTML = "";
		
		responseData.forEach((data, index) => {
			const checkListBody = document.querySelector(".reserve-contents1 tbody");
			checkListBody.innerHTML += `
				<tr>                       
					<th>성명(한글)</th>
					<td>${data.reserveName}</td> 
				</tr>
				<tr>                       
					<th>예약번호</th>
					<td>${data.reserveId}</td>
				</tr>
				<tr>
					<th>연락처</th>
					<td>${data.number}</td>
				</tr>        
				<tr>
					<th>이메일</th>
					<td>${data.email}</td>
				</tr>  
			`;
		});
	}
	
	
}

