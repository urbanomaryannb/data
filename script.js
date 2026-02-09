<script>
 
alert("NEW PIN ACTIVE");
const correctPin = "mburbano.36"; // CHANGE YOUR PIN HERE
let attempts = 0;

/* AUTO UNLOCK IF SESSION EXISTS */
if(sessionStorage.getItem("unlocked")==="yes"){
 document.getElementById("lockScreen").style.display="none";
 document.getElementById("siteContent").style.display="block";
}

/* AUTO FOCUS */
document.getElementById("pinInput").focus();

/* ENTER KEY SUBMIT */
document.getElementById("pinInput").addEventListener("keyup", function(e) {
  if (e.key === "Enter") checkPin();
});

/* EYE TOGGLE */
document.getElementById("togglePin").onclick = function() {
  const input = document.getElementById("pinInput");
  input.type = input.type === "password" ? "text" : "password";
};

function checkPin() {

  const input = document.getElementById("pinInput");
  const loader = document.getElementById("loader");
  const error = document.getElementById("pinError");

  loader.style.display = "block";
  error.innerText = "";

  setTimeout(() => {

    if (input.value === correctPin) {

      sessionStorage.setItem("unlocked","yes");
      document.getElementById("lockScreen").style.display = "none";
      document.getElementById("siteContent").style.display = "block";

    } else {

      attempts++;
      loader.style.display = "none";

      input.classList.add("shake");
      setTimeout(()=>input.classList.remove("shake"),300);

      if (attempts >= 3) {

        error.innerText = "Too many attempts. Locked for 30 seconds.";
        input.disabled = true;

        setTimeout(() => {
          attempts = 0;
          input.disabled = false;
          error.innerText = "";
        }, 30000);

      } else {

        error.innerText = "Wrong PIN";
      }
    }

  }, 800);
}

/* CERTIFICATE MODAL */

function openCert(src) {
  document.getElementById("certModal").style.display = "flex";
  document.getElementById("certImage").src = src;
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeCert();
});

document.getElementById("certModal").addEventListener("click", function(e) {
  if (e.target === this) closeCert();
});

function openSettings() {
  document.getElementById("settingsPanel").style.display = "flex";
}

function closeSettings() {
  document.getElementById("settingsPanel").style.display = "none";
}

</script>
