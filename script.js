var cart = []
var voids = document.getElementById("voids");
const click = document.getElementById("addItem");
var allbtn = document.getElementById("allbtn");
// const voids = document.getElementById ('void')

function submit() {
    if (floatingInput.value == "") {
        voids.style.display = "block";
    } else {
        voids.style.display = "none";
        allbtn.style.display = "block";
        cart.push(floatingInput.value);
        document.getElementById("floatingInput").value = "";
        displayItem();
    }
}

function deleteFirst() {
    cart.shift();
    displayItem();
}

function deleteLast() {
    cart.pop();
    displayItem();
}

function addStart() {
    if (firstitem.value == "") {
        errorfirst.style.display = "block";
    } else {
        errorfirst.style.display = "none";
        cart.unshift(document.getElementById("firstitem").value);
        displayItem();
        document.getElementById("firstitem").value = "";
    }
}

function deleteAny() {
    if (delitem.value == "") {
        exceed.style.display = "none";
        delvoid.style.display = "block";
    } else {
        delvoid.style.display = "none";
        var start = Number(document.getElementById("delitem").value);
        if (start > cart.length) {
            exceed.style.display = "block";
            delvoid.style.display = "none";
        } else {
            exceed.style.display = "none";
            cart.splice(start - 1, 1);
            displayItem();
            document.getElementById("delitem").value = "";
        }
    }
}

function deleteAll() {
    var confirmation = confirm("Are you sure you want to delete item?");
    if (confirmation == true) {
        cart.splice(0, cart.length);
        displayItem();
    }
}

function editItem() {
    if (editItems.value == "") {
        erroredits.style.display = "block";
    } else {
        erroredits.style.display = "none";
        var editsn = Number(document.getElementById("editsn").value);
        var replaceItem = document.getElementById("editItems").value;
        cart.splice(editsn - 1, 1, replaceItem);
        displayItem();
        document.getElementById("editsn").value = "";
        document.getElementById("editItems").value = "";
    }
}

function displayItem() {
    show.innerHTML = "";
    var tableHTML = "<table>";
    tableHTML += "<tr>";
    tableHTML += `<th>S/N</th>`;
    tableHTML += `<th>Items</th>`;
    tableHTML += "</tr>";
    for (var i = 0; i < cart.length; i++) {
        tableHTML += "<tr>";
        tableHTML += `<td style = "width:120px;"><small>${i + 1}</small></td>`;
        tableHTML += `<td> 
                <p>${cart[i]}</p>
            </td>`;
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";

    document.getElementById("show").innerHTML = tableHTML;
}
