<script>

const correctPin = "1234";
let attempts = 0;

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
      document.getElementById("lockScreen").style.display = "none";
      document.getElementById("siteContent").style.display = "block";
    } else {
      attempts++;
      loader.style.display = "none";

      if (attempts >= 3) {
        error.innerText = "Too many attempts. Locked for 30 seconds.";
        input.disabled = true;

        setTimeout(() => {
          attempts = 0;
          input.disabled = false;
          error.innerText = "";
        }, 30000);

      } else {
        error.innerText = "Wrong PIN (" + attempts + "/3)";
      }
    }

  }, 800);
}

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

</script>
