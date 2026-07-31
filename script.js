// Loading
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);
});

// Tombol Open
const openBtn = document.getElementById("open");

openBtn.addEventListener("click", () => {

    document.getElementById("letter").classList.remove("hidden");

    document.querySelector(".gallery").classList.remove("hidden");

    document.getElementById("love").classList.remove("hidden");

    document.getElementById("ending").classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById("letter").offsetTop,
        behavior: "smooth"
    });

});

// Efek Hati
const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = Math.random()*20+15+"px";

    heart.style.animationDuration = Math.random()*3+3+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,300);

// Fireworks sederhana
const loveBtn = document.getElementById("loveBtn");

loveBtn.addEventListener("click",()=>{

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="💖";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.position="fixed";

        heart.style.fontSize=Math.random()*30+20+"px";

        heart.style.transform=`translate(${(Math.random()-0.5)*800}px, ${(Math.random()-0.5)*800}px)`;

        heart.style.transition="2s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },2500);

    }

    alert("I Love You Forever ❤️");

});

// Efek zoom foto
const photos=document.querySelectorAll(".photos img");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

photo.classList.toggle("zoom");

});
    .zoom{
transform:scale(1.3);
z-index:99;
position:relative;
transition:.4s;
}
