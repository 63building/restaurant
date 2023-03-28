function requestPay() {
  var price = document.getElementById("price").innerText;

    IMP.init("imp54127217"); //iamport 대신 자신의 "가맹점 식별코드"를 사용
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "merchant_" + new Date().getTime(),
        name: resvObj.resvmenu,
        amount: price,
        buyer_email: resvObj.email,
        buyer_name: resvObj.customerName,
        buyer_tel: resvObj.number,
      },
      function(res) {
        console.log(res);
        $.ajax({
              type : "POST",
              url : "/verifyIamport/" + res.imp_uid
          }).done(function(data) {
           /* 위의 rsp.paid_amount 와 data.response.amount를 
           비교한후 로직 실행 (import 서버검증) */
  
              if(res.paid_amount == data.response.amount){
                  alert("결제 및 결제검증완료");
              ComponentEvent.getInstance().addClickEventRegisterButton();
                  //결제 성공 시 비즈니스 로직
  
              } else {
                  alert("결제 실패");
              }
          });
      });
  }
  