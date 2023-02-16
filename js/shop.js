let sl = 1;
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