// This is a javascript function for all the footer.

function suscribed(){
    alert("Thankyou for following us. Stay tuned for more.")
}

// This is a javascript function for the contact form.
function Cformvalidate(){

    var C_firstname = document.forms["contact_form"]["fname"].value;
    var C_lastname = document.forms["contact_form"]["lname"].value;
    var C_email = document.forms["contact_form"]["email"].value;
    var C_phonenumber = document.forms["contact_form"]["number"].value;
    var C_subject = document.forms["contact_form"]["subject"].value;
    var C_message = document.forms["contact_form"]["message"].value;

    if (C_firstname == "" && C_lastname == "" && C_email == "" && C_phonenumber == "" && C_subject == "" && C_message == "") {
        alert("All fields must be filled out");
    }
    else{
        if (C_firstname == "") {
            alert("First Name is required");
        }
        if (C_lastname == "") {
            alert("Last Name is required");
        }
        if (C_email == "") {
            alert("Email is required");
        }
        if (C_phonenumber == "") {
            alert("Phone Number is required");
        }
        if (C_subject == "") {
            alert("Subject is required");
        }
        if (C_message == "") {
            alert("Message description is required");
        }
        if(C_firstname != "" && C_lastname != "" && C_email != "" && C_phonenumber != "" && C_subject != "" && C_message != ""){
            alert("Thank you for contacting us. We will be right back to you soon")
        }
    }
}

                
// This is a javascript function for login and signup forms.

function signup(){
    var S_firstname = document.forms["signup_form"]["fname"].value;
    var S_lastname = document.forms["signup_form"]["lname"].value;
    var S_email = document.forms["signup_form"]["email"].value;
    var S_number = document.forms["signup_form"]["number"].value;
    var S_pass = document.forms["signup_form"]["password"].value;
    var S_cpass = document.forms["signup_form"]["confirmpass"].value;
    var S_box = document.getElementById("agree");

    if (S_firstname == "" && S_lastname == "" && S_email == "" && S_number == "" && S_pass == "" && S_cpass == "" && !S_box.checked){
        alert("All fields must be filled out");
    }
    else{
        if (S_firstname == ""){
            alert("First name is required");
        }
        if (S_lastname == ""){
            alert("Last name is required");
        }
        if (S_email == ""){
            alert("email is required");
        }
        if (S_number == ""){
            alert("Phone Number is required");
        }
        if (S_pass == ""){
            alert("password is required");
        }
        if (S_cpass == ""){
            alert("Confirm your password");
        }
        if (!S_box.checked){
            alert("please check the box");
        }
        if (S_pass != S_cpass){
            alert("passwords are not matching");
        }
        if (S_firstname != "" && S_lastname != "" && S_email != "" && S_number != "" && S_pass 
        != "" && S_cpass != "" && S_box.checked){
            alert("Great, Account signup complete, now, you can login");
        }
    }
}

function login(){
    var L_email = document.forms["login_form"]["email"].value;
    var L_password = document.forms["login_form"]["password"].value;

    if (L_email == "" && L_password == ""){
        alert("Input all the credentials to continue");
    }
    else{
        if (L_email == ""){
            alert("Enter your email address");
        }   
        if (L_password == ""){
            alert("Enter your password");
        }
        if (L_email != "" && L_password != ""){
            window.location.href = "../index.html";
            alert("LOGGEDIN SUCCESSFULLY.")
        }
    }
}







