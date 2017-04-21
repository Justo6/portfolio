(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}]},{},[1])  ;
var sender_email=null;
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
    validateEmail(sender_email);

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
        console.log(response, "Success")
    },
        error: function(response){
        console.log(response, "Failure")
        }
    });
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    check();
    return re.test(email);
    
}

function check() {
    if (validateEmail(email)) {
        console.log("this is a valid email");
    } else{
        console.log("this is not valid email");
    }
}