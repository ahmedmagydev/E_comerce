
$("#image").animate({
    width:"400px"
  },3000)
  
  



a=JSON.parse(localStorage.user)
console.log(a)






let email = $("#email");

email.on("blur",validation );

  function validation () {

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let email1=$("#email").val()
    console.log(email1)


    if (!regex.test(email.value) || email.value == "") {
        $("#emailvalid").html("Email isn't valid");
        $("#emailvalid").css({"background-color": "yellow", "color": "red"});
        
      } else {
        console.log("iij")
        $("#emailvalid").html("Email is valid");
        $("#emailvalid").css({"background-color": "whiht", "color": "green"});
      }
      return email1
    }
    





  // Validate Password
  $("#passcheck").hide();
  let passwordError = true;
  $("#password").keyup(function () {
    validatePassword();
  });
  function validatePassword() {
    let password = $("#password").val();
 
    if (password.length < 3 || password.length > 15) {
      $("#passcheck").show();
      $("#passcheck").html(
        "**length of your password must be between 3 and 15"
      );
      $("#passcheck").css("color", "red");
      passwordError = false;
      return false;
    } else {
      passwordError=true
      $("#passcheck").hide();
    }
    return password
  }


arr1=[]
function login(){
  a.forEach(el => {
console.log(el.password)
// email1=el.email
// console.log(email1)


// password=el.password
    if(email==el.email && password==el.password){
user1={
  email:el.email,
  password:el.password

}
arr1.push(user1)
sessionStorage.setItem("user1",JSON.stringify(arr1))
location.replace("../project.html")
console.log("ahmed")
    }
    else{
  $("#error").html("your password or email is not true")
  $("#error").css({"background-color": "yellow", "color": "red"});
    }
  });
}



$("#submitbtn").click(function (e) {
  e.preventDefault()
  validatePassword() 
  login()
location.replace("../project.html")
  
});