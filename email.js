import emailjs from "emailjs-com";

// emailjs 초기화
emailjs.init("chisae");

const sendEmail = () => {
  let templateParams = {
    email: document.getElementById("emailInput").value,
  };

  console.log(templateParams);

  emailjs.send("chisae_gmail", "template_6h2hhzo", templateParams).then(
    function (response) {
      console.log("Success!", response.status, response.text);
      alert("이메일이 성공적으로 전송되었습니다!");
    },
    function (error) {
      console.log("Failed...", error);
      alert("이메일 전송 실패. 다시 시도해 주세요.");
    }
  );
};

// 버튼 클릭 이벤트 추가
document
  .querySelector("button[type='submit']")
  .addEventListener("click", function (e) {
    e.preventDefault(); // form 전송을 막기 위해
    sendEmail();
  });
