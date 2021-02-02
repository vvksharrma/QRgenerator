
var qrdata = document.getElementById('qr-data');
var qrcode= new QRCode(document.getElementById("qrcode"));
// var clear = document.getElementById('clear');
function generateQR(){

    var data = qrdata.value;
    qrcode.makeCode(data);
    
}

var qrimg = document.querySelector("#qrcode>img");
console.log(qrimg);


// function qrclear(){
//     qrcode.clear();
// }





// var qrcode = new QRCode("test", {
//     text: "http://jindo.dev.naver.com/collie",
//     width: 128,
//     height: 128,
//     colorDark : "#000000",
//     colorLight : "#ffffff",
//     correctLevel : QRCode.CorrectLevel.H
// });