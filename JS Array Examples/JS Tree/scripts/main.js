var items, parent, itemsArray;

itemsArray = [];
parent = document.querySelector("#parent"),
    items = parent.querySelectorAll(".item");

items.forEach((item) => {
    itemsArray.push(item);
});

parent.innerHTML = "";

function addChild(ev) {
    var target = ev.target;
    var element = document.createElement("ul");
    var li = document.createElement("li");
    li.textContent = target.textContent;
    element.appendChild(li);
    target.appendChild(element);
    refresh();
}

refresh();

function refresh() {
    parent.innerHTML = "";
    itemsArray.forEach((item) => {
        parent.appendChild(item);
        parent.addEventListener("click", addChild);
    });
}

