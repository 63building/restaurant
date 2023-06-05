<<<<<<< HEAD
// window.onclick = () => {
//   const registerButton = document.getElementById("reserveButton");
//   registerButton.onclick = () => {
//     console.log("클릭됨");
//     var number1 = document.getElementById('mobile1').value;
//     var number2 = document.getElementById('mobile2').value;
//     var number3 = document.getElementById('mobile3').value;

//     var emailTest = document.getElementById('email_1').value;
//     var domain = document.getElementById('email_txt').value;
//     var customerName = document.getElementById('customer_name').value;
//     var resvDate = document.getElementById('check01').value;
//     var resvTime = document.getElementById('check02').value;;
//     var number = number1 +'-' + number2 + '-' +number3;
//     var email = emailTest + '@' + domain;
//     var adult = document.getElementById("count01").innerText;
//     var child = document.getElementById("count02").innerText;;

//     console.log(customerName);
//     console.log(resvDate);
//     console.log(resvTime);
//     console.log(number);
//     console.log(email);
//     console.log(adult);
//     console.log(child);

//   }
// }
=======
window.onload = () =>{
  ComponentEvent.getInstance().addClickEventRegisterButton();

}

const resvObj = {
  customerName: "",
  resvDate: "",
  resvTime: "",
  number: "",  
  email: "",
  adult: "",
  child: "",
  guest: "",
  resvmenu: ""
}

class resvRegisterApi{
  static #instance = null;
  static getInstance() {
    if(this.#instance ==null) {
      this.#instance = new resvRegisterApi();
    }
    return this.#instance;
  }

    registerResv(){
      let successFlag = false;
  
    $.ajax({
      async : false,
      type : "post",
      URL : "http://localhost:8000/api/resv",
      contentType : "application/json",
      data : JSON.stringify(resvObj),
      dataType : "json",
      success : response => {
        console.log(response);
        successFlag = true;
      },
      error : error =>{
        console.log(error);
        resvRegisterService.getInstance().setErrors(error.responseJSON.data);
      }

    });

    return successFlag;
    
  }
}

class resvRegisterService {
  static #instance = null;
  static getInstance() {
    if(this.#instance ==null) {
      this.#instance = new resvRegisterService();
    }
    return this.#instance;
  }

  setResvObjValue(){
    const registerInputs = document.querySelectorAll(".register-input"); //예약정보
    const registerInput_nm = document.querySelectorAll(".cust_nm"); //인원수
    ment.querySelectorAll(".num"); // 대인.소인

    var mobile1 =  $('option[name="mobile1"]:checked').val();
    var mobile2 = document.querySelectorAll(".mobile2").value;
    var mobile3 = document.querySelectorAll(".mobile3").value;

    var email_01 = document.getElementById("#email_1");
    var email_02 = $('option[name="email_2"]:checked').val
    

    resvObj.customerName = registerInput_nm.value;      
    resvObj.resvDate = registerInputs[0].value;
    resvObj.resvTime = registerInputs[1].value;

    resvObj.number = join(mobile1, mobile2, mobile3);
    resvObj.email = join(email_01, email_02);

    // resvObj.adult = registerInput_cus[0].value;
    // resvObj.child = registerInput_cus[1].value;

    resvObj.guest = registerInputs[2].value; //인원 총합
    resvObj.resvmenu = registerInputs[3].value;

  }

  clearErrors(){
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => {
      error.innerHTML ="";
    })
  }
}


class ComponentEvent {
  static #instance = null;
  static getInstance() {
      if(this.#instance == null) {
          this.#instance = new ComponentEvent();
      }
      return this.#instance;
  }

  addClickEventRegisterButton() {
      const registerButton = document.querySelector(".payment-button");

      registerButton.onclick = () => {
        resvRegisterService.getInstance().setResvObjValue();
          const successFlag = resvRegisterApi.getInstance().registerResv();
          
          if(!successFlag) {
            console.log(error);
              return;
          }else{
            console("예약완료되었습니다!");
          }
      }

  }

}
>>>>>>> origin/BookCheck&Cancle
