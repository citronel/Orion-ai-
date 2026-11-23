const statusLine = document.querySelector("#system-status");

console.info("ORION booted");

if (statusLine) {
  statusLine.textContent = "SYSTEM ONLINE";
}
