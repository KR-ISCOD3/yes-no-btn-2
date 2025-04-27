const btnNo = document.getElementById("btn-no");
var btnYes = document.getElementById('btn-yes');
const container = document.querySelector(".container");

btnYes.onclick = () => {
    window.open("https://youtu.be/nADTbWQof7Y?si=llezg8FH9InXBzmB", "_self");
};
btnNo.onclick = () =>{
    for(let i = 0; i < 5;i++){

       const widthran = window.innerWidth;
       const heightran = window.innerHeight;

       const randomX = Math.floor(Math.random() * (widthran-100));
       const randomY = Math.floor(Math.random() * (heightran-50));


       const yesbtn = document.createElement("button");
       yesbtn.className = "animate__animated animate__bounceIn"
       yesbtn.id = "btn-yes";
       yesbtn.textContent = "Yes";
       yesbtn.style.position = "absolute";

       
       yesbtn.style.top = `${randomY}px`;
       yesbtn.style.left = `${randomX}px`;

       container.appendChild(yesbtn);

    }

    // After creating all 5 buttons, attach click event to all "btn-yes"
    const allYesButtons = document.querySelectorAll("#btn-yes");
    allYesButtons.forEach(button => {
        button.onclick = () => {
            window.open("https://youtu.be/nADTbWQof7Y?si=llezg8FH9InXBzmB", "_self");
        };
    });
}

