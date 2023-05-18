const startEls = document.querySelectorAll(".fa-star");
const emojiEls = document.querySelectorAll(".fa-regular");

const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];


startEls.forEach((starEl,index) => {
    starEl.addEventListener("click" , () =>{
        updateRating(index);
    });
});

function updateRating(index){
    startEls.forEach((starEL,idx) =>{
        if(idx < index + 1){
            starEL.classList.add("active");
        }else{
            starEL.classList.remove("active");
        }
    });

    emojiEls.forEach((emojiEl)=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index];
    });
}