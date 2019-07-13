//object

// get price value
function price(){
     return Number(document.getElementById('price').value);
}

// get quantity
function quantity(){
    return Number(document.getElementById('quantity').value);
}


// get total
function getTotal(){
  document.getElementById('total').innerHTML = "Total: " + (quantity() * price())
}

// get cash
// function cash(){
//    return Number(document.getElementById('cash').value);
//}

//display summary




