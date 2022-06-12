const likeButtons = document.querySelectorAll(".like-btn");
function handlelike(event){
    event.target.classList.toggle("active");
}
likeButtons.forEach((likeButtons) => {
    likeButtons.addEventListener("click",handlelike);
});