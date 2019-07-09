// Javascript
const input = document.querySelectorAll(".input-field input");

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
