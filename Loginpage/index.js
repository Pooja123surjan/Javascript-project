const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      //Js code to show and hide password and to change icon
      pwShowHide.forEach((eyeIcon) => {
        eyeIcon.addEventListener("click", () => {
          pwFields.forEach((pwField) => {
            if (pwField.type === "password") {
              pwField.type = "text";
              pwShowHide.forEach((icon) => {
                icon.classList.replace("uil-eye-slash", "uil-eye");
              });
            } else {
              pwField.type = "password";
              pwShowHide.forEach((icon) => {
                icon.classList.replace("uil-eye", "uil-eye-slash");
              });
            }
          });
        });
      });

      // coode to appear over signup and login form
      signUp.addEventListener("click", (e) => {
        e.preventDefault();
        container.classList.add("active");
      });
      login.addEventListener("click", (e) => {
        e.preventDefault();
        container.classList.remove("active");
      });