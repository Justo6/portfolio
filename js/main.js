(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}]},{},[1])  ;
var sender_email=null;
var reg =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function sender_info () {
    var sender_name= $("#sender_name").val();
    var sender_subject= $("#sender_subject").val();
    sender_email=$("#sender_email").val();
    var sender_message=$("#sender_message").val();

    if(sender_name.length===0){
        console.log("Please fill in name");
    }
    if(sender_email.length===0){
        console.log("Please fill in the subject line");
    }
    if(sender_message.length===0){
        console.log("Please fill in the message portion");
    }
    if(sender_subject.length===0){
        console.log("Please fill in the subject line");
    }


    if(sender_name.length>=0){
        for(var i=0; i<sender_name.length; i++){
            if (sender_name.length===1){
                console.log("Name must contain more than one letter");
            }
            if(/^[a-zA-Z0-9- ]*$/.test(sender_name[i]) == false){
                console.log("the name contains illegal characters");
            }
            if(isNaN(i)){
                console.log("This input contains numbers");
            }
        }
    }
    $.ajax({
    url: 'php_mailer/mail_handler.php',
    type: 'post',
    data: {
        "name": sender_name,
        "subject": sender_subject,
        "email": sender_email,
        "message": sender_email
    },
    success: function (response) {
        console.log(response, "Success");

    },
        error: function(response){
        console.log(response, "Failure")
        }
    });
}

 function validate_email(){
     var atpos = sender_email.indexOf("@");
     var dotpos = sender_email.lastIndexOf(".");
     if (atpos<1 || dotpos<atpos+2 || dotpos+2>=sender_email.length) {
         alert("Not a valid e-mail address");
         return false;
     }

 }

