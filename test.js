function sendMail(){
  let parms = {
    name : document.getElementById("message-name").value,
    email : document.getElementById("message-email").value,
    telephone : document.getElementById("message-phone").value,
    message : document.getElementById("message-content").value,
  }
  emailjs.send("service_86te3q4", "template_c65oecn", parms).then(alert("Email Sent!"))
}
 

