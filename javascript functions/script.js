// get price value
function getProduct(){
  return document.getElementById('product').value;
}

// get price value
function getPrice(){
  return document.getElementById('price').value;
}

// get quantity
function getQuantity(){
  return document.getElementById('quantity').value;
}

// get cash
function getCash(){
  return document.getElementById('cash').value;
}

//button functions
// get purchase total

function getTotal(){
  if(getProduct() == "" || getPrice() == "" || getQuantity() ==""){
    $(".msg1").text("Error. Please provide missing info.");
  }
  else if(isNaN(getPrice()) || isNaN(getQuantity())){
    $(".msg2").text("Error. Please input a number.");
  }
  else{
    return document.getElementById('result1').innerHTML = getPrice() * getQuantity();
  }
}

// save to display summary

function save(){
  if(getTotal() <= getCash()){
    document.getElementById("SumProduct").innerHTML = getProduct();
    document.getElementById("SumPrice").innerHTML = getPrice();
    document.getElementById("SumQty").innerHTML = getQuantity();
    document.getElementById("SumTotal").innerHTML = getTotal();
    document.getElementById("SumCash").innerHTML = getCash();
    document.getElementById("SumChange").innerHTML = getCash() - getTotal();
  }else{
    $(".msg3").text("Insufficient Cash!")
  }
}