const LIbtn = document.querySelector(".btn-1");
const ResumeBtn = document.querySelector(".btn-2");

LIbtn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/bala-saravanan007/", "_blank");
});

ResumeBtn.addEventListener("click", () => {
  const path = "Doc/Bala_Resume.pdf";
  window.open(path, "_blank");
});
