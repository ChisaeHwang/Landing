import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm("chisae_gmail", "template_6h2hhzo", e.target, "chisae").then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
}

document
  .querySelector("button[type='submit']")
  .addEventListener("click", sendEmail);
