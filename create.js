const addBtn = document.querySelector("button");

addBtn.addEventListener("click", () => {
  var title = document.querySelector("input").value;
  var list_title = JSON.parse(sessionStorage.getItem("title"));
  if (!list_title) {
    list_title = [];
  }
  list_title.push(title);
  sessionStorage.setItem("title", JSON.stringify(list_title));
});
