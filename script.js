<script>
const correctPin = "1234"; // CHANGE THIS PIN

function checkPin() {
  const input = document.getElementById("pinInput").value;
  if (input === correctPin) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("siteContent").style.display = "block";
  } else {
    document.getElementById("pinError").innerText = "Wrong PIN";
  }
}
</script>
