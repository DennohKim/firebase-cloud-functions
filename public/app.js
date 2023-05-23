document.addEventListener("DOMContentLoaded", function () {
  let app = firebase.app();

  fetch("http://localhost:5001/cloud-functions-dc47a/us-central1/api/cat").then(console.log);
});
