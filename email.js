const sendEmail = () => {
  emailjs.init("chisae");
  let templateParams = {
    email: document.getElementById("emailInput").value,
  };
  console.log(templateParams);
  emailjs.send("chisae_gmail", "template_6h2hhzo", templateParams).then(
    function (response) {
      console.log("Success!", response.status, response.text);
      setStatus("success");
    },
    function (error) {
      console.log("Failed...", error);
      setStatus("fail");
    }
  );
};
