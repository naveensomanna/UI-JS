let loginForm = document.getElementById("loginForm");
const lists = document.getElementById("lists");
let data = [];


function renderAdress(email, name) {
  const li = document.createElement("li");
  const emailNode = document.createElement("span");
  const nameNode = document.createElement("span");
  emailNode.classList.add("email")
  emailNode.innerText = email;
  nameNode.innerText = name;

  li.append(emailNode, nameNode);
  lists.appendChild(li);
}


function reset(email, name) {
  email.value = ""
  name.value = ""
}

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let name = document.getElementById("name");

  if (email.value == "" || name.value == "") {
    alert("Please fill the fields");
  } else {
    renderAdress(email.value, name.value)
    reset(email, name);
  }

})
