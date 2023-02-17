let sl = 1;
// card 1
document.getElementById('btn-one').addEventListener('click', 
function(){
    const productName = document.getElementById('first-text').innerText
    const productPrice = document.getElementById('first-price').innerText
    const productQuantity = document.getElementById('first-quantity').innerText
    
    const sum = parseInt(productPrice)*parseInt(productQuantity);
    TableDisplay(productName, productPrice, productQuantity, sum)
    sl += 1
    disabledButton('btn-one')
    
})

// card 2
document.getElementById('btn-two').addEventListener('click',
 function(e){
    const productName = e.target.parentNode.parentNode.children[0].innerText
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText
    
    const sum = parseInt(productPrice) + parseInt(productQuantity)
    TableDisplay(productName, productPrice, productQuantity, sum)
    sl += 1
    disabledButton('btn-two')

})


// card 3 
document.getElementById('btn-three').addEventListener('click', 
function(){
    const productName = document.getElementById('third-text').innerText
    const productPrice = document.getElementById('third-price').innerText
    const productQuantity = document.getElementById('third-quantity').innerText
    
    const sum = parseInt(productPrice) - parseInt(productQuantity);
    TableDisplay(productName, productPrice, productQuantity, sum)
    sl += 1
    disabledButton('btn-three')
    
})


// card 4 
document.getElementById('btn-four').addEventListener('click',
 function(e){
    const productName = e.target.parentNode.parentNode.children[0].innerText
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText
    
    const sum = parseInt(productPrice) * parseInt(productQuantity)
    TableDisplay(productName, productPrice, productQuantity, sum)
    sl += 1
    disabledButton('btn-four')

})

// card 5
document.getElementById('btn-five').addEventListener('click', 
function(){
    const productName = document.getElementById('five-text').innerText
    const productPrice = document.getElementById('five-price').value
    const productQuantity = document.getElementById('five-quantity').value
    
    const sum = parseInt(productPrice) / parseInt(productQuantity);
    TableDisplay(productName, productPrice, productQuantity, sum)
    sl += 1
    disabledButton('btn-five')
    
})





function TableDisplay (Pname, Pprice, Pquantity, Ptotal){
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${sl}</td>
    <td>${Pname}</td>
    <td>${Pprice}</td>
    <td>${Pquantity}</td>
    <td>${Ptotal}</td>

    `;
    tableContainer.appendChild(tr);
}

function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
  }