const list_title = JSON.parse(sessionStorage.getItem("title"));
let id = 0;

function createNewItem(title) {
  id += 1;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.setAttribute("id", id);
  li.setAttribute("class", "content-item");
  var div = document.createElement("div");
  div.setAttribute("class", "content-box");
  var editBtn = document.createElement("button");
  editBtn.setAttribute("class", "content-btn edit");
  editBtn.appendChild(document.createTextNode("Edit"));
  var rmvBtn = document.createElement("button");
  rmvBtn.setAttribute("class", "content-btn rmv");
  rmvBtn.appendChild(document.createTextNode("Remove"));
  var p = document.createElement("p");
  p.appendChild(document.createTextNode(title));
  li.appendChild(div);
  li.appendChild(editBtn);
  li.appendChild(rmvBtn);
  li.appendChild(p);
  console.log(li);
  ul.appendChild(li);
}

if (list_title) {
  list_title.map((title) => {
    console.log(title);
    createNewItem(title);
  });
  sessionStorage.removeItem("title");
}

const allItem = document.querySelectorAll(".content-item");
console.log(allItem);
for (var index = 0; index < allItem.length; index++) {
  allItem[index].addEventListener("click", function () {
    this.classList.toggle("active");
  });
  allItem[index].querySelector(".rmv").addEventListener("click", function () {
    this.closest(".content-item").remove();
  });
}
