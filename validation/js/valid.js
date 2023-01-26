
$("#image").animate({
  width:"400px"
},3000)



$(document).ready(function () {
    // Validate Username
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
      validateUsername();
      
    });
   
    function validateUsername() {
      let usernameValue = $("#usernames").val();
     if (usernameValue.length < 3 || usernameValue.length > 15) {
        $("#usercheck").show();
        $("#usercheck").html("unvalide username must be from 3 or more");
        usernameError = false;
        return false;
      } else {
        $("#usercheck").hide();
        usernameError=true
        return true
      }
    }
   
















    // Validate Email
    const email = $("#email");
    email.on("blur",validateEmail);
    
   
    function validateEmail () {
      let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
      let s = email.val();
      if (regex.test(s)) {
        email.removeClass("is-invalid");
        emailError = true;
      } else {
        email.addClass("is-invalid");
        emailError = false;
      }
    }













    // Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
      validatePassword();
    });
    function validatePassword() {
      let passwordValue = $("#password").val();
   
      if (passwordValue.length < 3 || passwordValue.length > 15) {
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
    }
   











    // Validate Confirm Password
    $("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#conpassword").keyup(function () {
      validateConfirmPassword();
    });
    function validateConfirmPassword() {
      let confirmPasswordValue = $("#conpassword").val();
      let passwordValue = $("#password").val();
      if (passwordValue != confirmPasswordValue) {
        $("#conpasscheck").show();
        $("#conpasscheck").html("**Password didn't Match");
        $("#conpasscheck").css("color", "red");
        confirmPasswordError = false;
        return false;
      } else {
        $("#conpasscheck").hide();
        confirmPasswordError=true
      }
    }
   

arr1=[]

  function valid(){

    reg={
      username:$("#usernames").val(),
      email:email.val(),
      password:$("#password").val(),
      confpassword:$("#conpassword"),
    }
    arr1.push(reg)
    localStorage.setItem("user",JSON.stringify(arr1))
    }





    // Submit button
    $("#submitbtn").click(function (e) {
      e.preventDefault()
      validateUsername();
      validatePassword();
      validateConfirmPassword();
      validateEmail();
      console.log(usernameError )
      console.log(emailError )
      console.log(passwordError )
      console.log(confirmPasswordError)
      
      if (
        usernameError == true &&
        passwordError == true &&
        confirmPasswordError == true &&
        emailError == true
      
          
      ) {
       
        valid()
        location.assign("./login.html")
        return true;
      } else {
        return false;
      }
    });
  });








