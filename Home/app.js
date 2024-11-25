const LIbtn = document.querySelector(".btn-1");
const ResumeBtn = document.querySelector(".btn-2");

LIbtn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/bala-saravanan007/", "_blank");
});

ResumeBtn.addEventListener("click", () => {
  const path = "Doc/Bala_Resume.pdf";
  window.open(path, "_blank");
});

function show() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "flex";
}

function hide() {
  const hidebar = document.querySelector(".side-bar");
  hidebar.style.display = "none";
}
