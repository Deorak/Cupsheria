(function(){
        emailjs.init({
          publicKey: "53zbAOSIO2Ie4Cyz0",
        });
    })();

function sendMail(event){
  console.log("inside function");
  if (event) event.preventDefault();
  let parms = {
    name : document.getElementById("message-name").value,
    email : document.getElementById("message-email").value,
    telephone : document.getElementById("message-phone").value,
    message : document.getElementById("message-content").value,
    cart : sessionStorage.getItem("cart") || "empty"
  }
  console.log(parms);
  emailjs.send("service_86te3q4", "template_c65oecn", parms)
    .then(() => {
      alert("Email Sent!");
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Failed to send email");
    });
}
 

