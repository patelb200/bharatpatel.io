let contactForm: HTMLFormElement = <HTMLFormElement>(
  document.getElementById("contactForm")
);

let btnContactForm: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnContactForm")
);

let formSubmitResponse: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("formSubmitResponse")
);

btnContactForm.addEventListener("click", event => {
  if (contactForm.checkValidity()) {
    let formData = new FormData(contactForm);
    formData.append("submit", "true");
    
    fetch("contact.php", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "text/html"
      }
    }).then(res => {
      if (res.status === 200) {
        res.text().then(body => {
          contactForm.reset();
          formSubmitResponse.classList.remove("alert", "alert-danger");
          formSubmitResponse.classList.add("my-3", "alert", "alert-success");
          formSubmitResponse.innerText =
            "Message successfully sent. Thank you!";
        });
      } else {
        formSubmitResponse.classList.remove("alert", "alert-success");
        formSubmitResponse.classList.add("my-3", "alert", "alert-danger");
        formSubmitResponse.innerText =
          "Something when wrong while sending the message!";
      }
    });
  } else {
    formSubmitResponse.classList.remove("alert", "alert-success");
    formSubmitResponse.classList.add("my-3", "alert", "alert-danger");
    formSubmitResponse.innerText =
      "Please fill in all fields and a valid email address.";
  }
});
