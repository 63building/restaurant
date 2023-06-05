<<<<<<< HEAD
=======
<<<<<<< HEAD
    
   function resvValueCheck(){
    var number1 = document.getElementById('mobile1').value;
    var number2 = document.getElementById('mobile2').value;
    var number3 = document.getElementById('mobile3').value;

    resvObj.number = number1 +'-' + number2 + '-' +number3;
    resvObj.customerName = document.getElementById('customer_name').value;

    resvObj.guest = resvObj.adult + resvObj.child;

    resvObj.request = document.getElementById('bul01').value;

   }
   
    const resvObj = {
        customerName : "",
        resvDate :"",
        resvTime : "",
        number : "",
        email : "",
        adult : "",
        child : "",
        guest : "",
        request : "",
        menu : "",
        amount : ""
    }



function requestPay() {

    IMP.init('imp54127217'); //iamport 대신 자신의 "가맹점 식별코드"를 사용
    IMP.request_pay({
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid : 'merchant_'+new Date().getTime(),
      name : '결제테스트',
      amount: resvObj.amount,
      buyer_email: "test",
      buyer_name: "test",
      buyer_tel: "test",
    }, function (rsp) { // callback
        if (rsp.success) {
            console.log(resvObj);
            $.ajax({
                async : false,
                type : "post",
                url: "http://localhost:8000/api/payment/complete",
                contentType: 'application/json',
                data: JSON.stringify(resvObj),
                dataType : "json",
                success : response => {
                    console.log(response);
                    successFlag = true;
                }                
            })
            location.href = "/menulist" ;
        } else {
            alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
        }
    });

}
=======
>>>>>>> origin/Reserve
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
<<<<<<< HEAD
  
=======
  
>>>>>>> origin/BookCheck&Cancle
>>>>>>> origin/Reserve
