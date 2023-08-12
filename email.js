import emailjs from "emailjs-com";

// emailjs 초기화
emailjs.init("chisae");

document.getElementById("submitButton").addEventListener("click", function (e) {
  e.preventDefault(); // form 전송을 막기 위해

  var emailValue = document.getElementById("emailInput").value;

  if (emailValue) {
    let templateParams = {
      email: emailValue,
    };

    emailjs.send("chisae_gmail", "template_6h2hhzo", templateParams).then(
      function (response) {
        console.log("Success!", response.status, response.text);
        alert("이메일이 성공적으로 전송되었습니다!");
        document.getElementById("emailInput").value = ""; // 이메일 입력값 지우기
      },
      function (error) {
        console.log("Failed...", error);
        alert("이메일 전송 실패. 다시 시도해 주세요.");
      }
    );
  } else {
    alert("이메일을 입력하세요.");
  }
});
