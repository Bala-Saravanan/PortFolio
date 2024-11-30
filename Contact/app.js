function show() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "flex";
}

function hide() {
  const hidebar = document.querySelector(".side-bar");
  hidebar.style.display = "none";
}

// Replace with your EmailJS User ID

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const name = formData.get("first-name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Send email via EmailJS
  emailjs
    .send("service_57z5vfs", "template_dyvdzkj", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Try again later.");
    });
});
