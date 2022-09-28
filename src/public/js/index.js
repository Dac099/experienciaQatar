const modal = document.getElementById("account-modal");
const btn = document.getElementById("signup");
const spanClose = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
spanClose.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if(e.target == modal){
    modal.style.display = "none";
  }
}