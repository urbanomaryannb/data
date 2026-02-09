const correctPin = "mburbano.36";
let attempts = 0;

const pinInput = document.getElementById("pinInput");
const unlockBtn = document.getElementById("unlockBtn");
const togglePin = document.getElementById("togglePin");
const loader = document.getElementById("loader");
const error = document.getElementById("pinError");

pinInput.focus();

pinInput.addEventListener("keyup",e=>{
 if(e.key==="Enter") checkPin();
});

unlockBtn.addEventListener("click",checkPin);

togglePin.onclick=()=>{
 pinInput.type = pinInput.type==="password"?"text":"password";
};

function checkPin(){

 loader.style.display="block";
 error.innerText="";

 setTimeout(()=>{

  if(pinInput.value===correctPin){
   document.getElementById("lockScreen").style.display="none";
   document.getElementById("siteContent").style.display="block";
  } else {

   attempts++;
   loader.style.display="none";

   if(attempts>=3){
    error.innerText="Locked for 30 seconds.";
    pinInput.disabled=true;

    setTimeout(()=>{
     attempts=0;
     pinInput.disabled=false;
     error.innerText="";
    },30000);
   } else {
    error.innerText="Wrong PIN";
   }
  }

 },800);
}

/* CERT MODAL */

document.querySelectorAll(".view-btn").forEach(btn=>{
 btn.onclick=()=>{
  document.getElementById("certModal").style.display="flex";
  document.getElementById("certImage").src = btn.dataset.img;
 };
});

document.querySelector(".close").onclick=()=>{
 document.getElementById("certModal").style.display="none";
};

document.getElementById("certModal").onclick=e=>{
 if(e.target.id==="certModal") e.currentTarget.style.display="none";
};
