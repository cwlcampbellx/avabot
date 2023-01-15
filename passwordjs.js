let password = "yoursecretpassword";

function hideText() {
  let text = document.getElementById("text-input").value;
  document.getElementById("hidden-text").innerHTML = text;
  document.getElementById("password-container").style.display = "block";
}

function showText() {
  let input = document.getElementById("password-input").value;
  if (input === password) {
    document.getElementById("hidden-text").style.display = "block";
  } else {
    alert("Incorrect password");
  }
}
