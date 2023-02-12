/// step: 1 add click event handler eith the submit button.
document.getElementById('btn-submit').addEventListener('click', function(){
    /// step:2  get the email address inside the email input field.
    /// always remember to use value  to get text from an input field.
     const emailField = document.getElementById('User-email');
     const email = emailField.value;
     // step:3 get password
     // a.set id on the html element.
     // b.get the element.
     // c.get the value from the element.

     const passwordField = document.getElementById('user-password');
     const password = passwordField.value;

     //step:4 verify email and password and check whether valid user or not.
     if(email === 'tanvir@gmail.com' && password === '123456789'){
        window.location.href = 'bank.html';
     }
     else{
        alert('Tui password vule gecos!! Tui shesh')
     }
     
})