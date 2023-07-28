window.addEventListener("keypress",function(e){//엔터를 누르면 save함수 동작
  if(e.keyCode==13){
    save();
  }
});
function check(id,pw){
  this.id=id;
  this.pw=pw;
}
const login = new Array();
function save(){
  var id=document.querySelector("#id");
  var pw=document.getElementById("pw");
  if (value_check([id,pw])) return;
}
function value_check(input){
  const msg=["아이디를 입력하세요","비밀번호를 입력하세요"];

    for(var i=0; i<input.length; i++){
      if(input[i].value==''){
        alert(msg[i]);
        input[i].focus();
        return true;
      }
    }
    return false;
}
function init(input){

};