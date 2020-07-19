// H15_1
var textarea = document.getElementById("my_textarea");

textarea.value = localStorage.getItem("textarea_text");

textarea.oninput = function() {
  localStorage.setItem("textarea_text", this.value);
  console.log(this.value);
};


//H15_2
if (localStorage.getItem("user") === "")
  {
    document.location.href = localStorage.getItem("my_path") + "index.html";
  }

document.getElementById("user_name").innerHTML =
   `<div class="user_name">Текущий пользователь : ${localStorage.getItem("user")} </div>`;

var button_ok = document.getElementById("log_cancel");

button_ok.onclick = function() {
    logout();
};   

function logout() {
    localStorage.setItem("user", "");
    document.location.href = localStorage.getItem("my_path") + "index.html";
  }


