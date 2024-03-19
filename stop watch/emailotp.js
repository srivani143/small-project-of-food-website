
function SendOTP() {
	const email = document.getElementById('email');
	const otpverify = document.getElementsByClassName('otpverify')[0];
    

    let otp_val = Math.floor(Math.random() * 10000);
    let emailbody = `<h2>Your OTP is </h2>${otp_val}`;

	Email.send({
    SecureToken : " 424852b1-6510-4c08-8d80-8eebb223435b",
    To : email.value,
    From : "polukasanthosh@573gmail.com",
    Subject : "Email OTP Using JS",
    Body : emailbody,
}).then(
 
  message => {
  	if (message === "ok") {
  		alert("OTP to your email" + email.value);

  		otpverify.style.display = "flex"
  		const otp_inp = document.getElementById('otp_inp');
  		const otp_btn = document.getElementById('otp-btn');

  		otp_btn.addEventListener('click', () => {
  			if(otp_inp.value == otp_val) {
  				alert("Email address verifed...")
  			}
  			else{
  				alert("Invalid OTP");
  			}
  		})
  	}
  }
);
}
