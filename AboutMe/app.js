const revealBtn = document.querySelector(".btn-1");
const hiddenContent = document.querySelector(".hidden");

revealBtn.addEventListener("click", (e) => {
  hiddenContent.classList.toggle("hidden");
  hiddenContent.classList.contains("hidden")
    ? (revealBtn.innerText = "Read More")
    : (revealBtn.innerText = "Read Less");
});
