function addText() {
    const display = document.getElementById("display").value;
    console.log(display);

    const li = document.createElement("li");
    li.innerHTML = `${display} <button onclick="deleteBtn(this)">Delete</button>`;
    document.getElementById("list-type").appendChild(li);
}

function deleteBtn(e) {
    e.parentElement.remove();
}