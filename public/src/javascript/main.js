// Javascript
const input = document.querySelectorAll(
  ".input-field input, .input-field textarea"
);

input.forEach(field => {
  field.addEventListener("change", function() {
    if (this.value !== "") {
      this.parentElement.classList.add("active");
    } else {
      this.parentElement.classList.remove("active");
    }
  });

  field.addEventListener("focus", function() {
    this.parentElement.classList.add("active");
  });
  field.addEventListener("blur", function() {
    if (this.value === "") {
      this.parentElement.classList.remove("active");
    }
  });
});

// Form control
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("check").innerText = "Sending message!";
  let formData = Object.fromEntries(new FormData(this).entries());
  formData = JSON.stringify(formData);
  console.log(formData);
  fetch("/send", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: formData
  })
    .then(response => {
      if (response.status === 200) {
        document.getElementById("check").innerText =
          "Thank you for your message, It has been sent.";
        document.getElementById("check").style.display = "block";
        this.reset();
        input.forEach(field => {
          field.parentElement.classList.remove("active");
        });
        setTimeout(function() {
          document.getElementById("check").innerText = "";
          document.getElementById("check").style.display = "none";
        }, 3000);
      }
    })
    .catch(err => {
      return console.error(err);
    });
});
