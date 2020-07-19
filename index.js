// console.log("cookie");
// console.log(document.cookie);
// document.cookie = "user=John";
// document.cookie = "pass=1111";

// let name = "my name";
// let value = "John Smith";

// document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
// console.log(document.cookie);

// //let date = new Date(Date.now() + 86400e3);
// //console.log(date.toUTCString());
// //document.cookie = "long_user = kate; expires=" + date; // действует до указанной даты
// //document.cookie = "long_user2 = kate2; max-age=3600"; // действует в течении указанного срока
// console.log(document.cookie);

// console.log("LocalStorage SessionStorage");
// localStorage.setItem("name", "Aleks");
// console.log(localStorage.getItem("name"));

// sessionStorage.setItem("name2", "Oleg");
// console.log(sessionStorage.getItem("name2"));

// console.log(localStorage.length);
// console.log(sessionStorage.length);

// H15_2
let my_path = location.pathname;
my_path = my_path.slice(0,my_path.lastIndexOf("index.html"));
console.log(my_path);
localStorage.setItem("my_path", my_path);

let log_pass = [["admin", "real_pass"], ["user", "1111"], ["user2", "1234"]];

if (localStorage.getItem("user") !== "") {
    document.location.href = localStorage.getItem("my_path") + "content.html";
  }


// авторизация пользователя
function authorization(login, pass) {
  log_pass.forEach(element => {
    if (element[0] === login) {
      if (element[1] === pass) {
        console.log(`${login} is authorization`);
        localStorage.setItem("user", login);
      }
    }
  });

  if (localStorage.getItem("user") === "") {
    console.log(`${login} isn't authorization`);
  }
  // переход на контент
  if (localStorage.getItem("user") !== "") {
    document.location.href = localStorage.getItem("my_path") + "content.html";
  }
}



var button_ok = document.getElementById("log_ok");

button_ok.onclick = function() {
  let login = document.getElementById("login").value;
  let pass = document.getElementById("pass").value;

  authorization(login, pass);
};
