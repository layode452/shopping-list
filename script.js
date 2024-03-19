var cart = []
var voids = document.getElementById ('voids');
const click = document.getElementById ('addItem');
var allbtn = document.getElementById ('allbtn')
// const voids = document.getElementById ('void')

function submit(){
    if (floatingInput.value == ''){
        voids.style.display = 'block'
    }else {
        voids.style.display = 'none'
        allbtn.style.display = 'block'
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

function deleteAny(){
    var start = Number(prompt('Which item number do you want to delete?'))
    if(start > cart.length){
        alert('Exceeded the max number in table')
    }
    cart.splice(start-1, 1)
    displayItem()
}

function deleteAll(){
    var confirmation = confirm('Are you sure you want to delete items?')
    if (confirmation == true){
        cart.splice(0, cart.length)
        displayItem()
    }
}

function editItem(){
    var edit = Number(prompt('Which item number do you want to edit?'))
    var replace = prompt('New value')
    cart.splice(edit-1, 1, replace)
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



