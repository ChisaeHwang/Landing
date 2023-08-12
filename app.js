document.getElementById("submitButton").addEventListener("click", function () {
  var emailValue = document.getElementById("emailInput").value;

  if (emailValue) {
    alert("전송되었습니다!");
    document.getElementById("emailInput").value = "";
  } else {
    alert("이메일을 입력하세요.");
  }
});
