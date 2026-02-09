document.querySelectorAll(".view-btn").forEach(btn=>{
 btn.onclick=()=>{
  certModal.style.display="flex";
  certImage.src = btn.dataset.img;
 };
});

document.querySelector(".close").onclick=()=>{
 certModal.style.display="none";
};

certModal.onclick=e=>{
 if(e.target===certModal) certModal.style.display="none";
};
