window.onload  = () => {
  ComponentEvent.getInstance().addClickEventRegisterButton();
}

function requestPay() {
  IMP.init("imp54127217"); //iamport 대신 자신의 "가맹점 식별코드"를 사용
  IMP.request_pay(
    {
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: "merchant_" + new Date().getTime(),
      name: "결제테스트",
      amount: 100,
      buyer_email: resvObj.email,
      buyer_name: resvObj.customerName,
      buyer_tel: resvObj.number,

    }, function (rsp) {
      console.log(rsp);
      ComponentEvent.getInstance().addClickEventRegisterButton();
      if (rsp.success) {
        var msg = "결제가 완료되었습니다.";
        alert(msg);
        location.href ="http://localhost:8000/menulist"
        
      } else {
        var msg = "결제에 실패하였습니다.";
        msg += "에러내용 : " + rsp.error_msg;
        alert(msg);
      }
    }
  );
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
