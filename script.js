var cart = []
const click = document.getElementById ('addItem')
const voids = document.getElementById ('void')

function submit(){
    if (floatingInput.value == ''){
        click.addEventListener('click', () =>{
            voids.classList.remove('d-none');
            voids.classList.add('d-block');
        });
    }else {
        cart.push(floatingInput.value)
        document.getElementById('floatingInput').value = ''
        displayItem()
    }
}

function deleteFirst(){
    cart.shift()
    displayItem()
}

function deleteLast(){
    cart.pop()
    displayItem()
}

function addStart(){
    cart.unshift(document.getElementById('floatingInput').value)
    displayItem()
}

function displayItem(){
    show.innerHTML = ''
    var tableHTML = '<table>'
            tableHTML += '<tr>'
            tableHTML += `<th>S/N</th>`
            tableHTML += `<th>Items</th>`
            tableHTML += '</tr>'
    for (var i=0; i < cart.length; i++){
            tableHTML += '<tr>'
            tableHTML += `<td style = "width:120px;"><small>${i+1}</small> </td>`
            tableHTML += `<td> ${cart[i]}</td>`
            tableHTML += '</tr>'
        }

    tableHTML +='</table>'

    document.getElementById('show').innerHTML = tableHTML;
}



