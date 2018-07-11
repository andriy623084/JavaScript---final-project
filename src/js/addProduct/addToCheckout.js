
var linktoCheckout = document.getElementById('linkToCheckout');
var counter = 0;
var countProduct = document.getElementsByClassName('products__blocks_price');

function productPrice(b){
    var a = b;
    counter++;
    var total = 0;
    if (counter <5 ){
        checkoutTotal(a.currentTarget.parentElement.parentElement.id, a.currentTarget.parentElement.parentElement.innerHTML)
    }else {
        alert('something went wrong')
    }
}
//to add popular products
function productPricePopular(b) {
    var a = b;
    counter++;
    if (counter <5 ){
        checkoutTotal(a.currentTarget.parentElement.id, a.currentTarget.parentElement.innerHTML)
    }else {
        alert('something went wrong')
    }
}

//catching product
function checkoutTotal(productPrice,productChilds){
    var priceCheckout = productPrice;
    var product1Childs = productChilds;
    if(counter===1){
        var objectProduct = {price1:priceCheckout,productbody1: product1Childs};
        var usersChoise = JSON.stringify(objectProduct);
        localStorage.setItem("userdata1", usersChoise);
        checkCountProducts(1); // counting items in checkout
    }else if(counter === 2){
        var objectProduct2 = {price2:priceCheckout,productbody2: product1Childs};
        var usersChoise2 = JSON.stringify(objectProduct2);
        localStorage.setItem("userdata2", usersChoise2);
        checkCountProducts(2); // counting items in checkout
    }else if(counter === 3){
        var objectProduct3 = {price3:priceCheckout,productbody3: product1Childs};
        var usersChoise3 = JSON.stringify(objectProduct3);
        localStorage.setItem("userdata3", usersChoise3);
        checkCountProducts(3); // counting items in checkout
    }else if(counter > 3){
        alert("possible to buy only 3 products per order")
    }
}

//function to check is it any product added to LocalStorage
function checkCountProducts(number) {
    var addProduct = number;
    // localStorage.clear();
    if(addProduct===1){
        $("#trolley").html('1');
    }else if(addProduct===2){
        $("#trolley").html('2')
    }else if(addProduct===3){
        $("#trolley").html('3')
    }else{
        $("#trolley").html('0')
    }
}
