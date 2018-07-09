var catchBody = document.getElementsByTagName('body');
catchBody.onload= parseProducts();

// parsing the product from LocalStorage
function parseProducts() {
    if(localStorage.getItem('userdata1')){
        var productinLocal = localStorage.getItem('userdata1');
        var collectData = JSON.parse(productinLocal);
        var append = $("#checkout-product1").append('<div class="products__blocks" id="' + collectData.price1 + '">'+'<button id="btn-product1">X</button>'+collectData.productbody1+'</div>');
        var currentProduct1 = document.getElementById(collectData.price1);
            //next function is deleting product from lockalStorage
        $('#btn-product1').click(function () {
            localStorage.removeItem("userdata1");
            currentProduct1.remove()
            });
    }
    if (localStorage.getItem('userdata2')){
        var productinLocal2 = localStorage.getItem('userdata2');
        var productNumber2 = 'userdata2';
        var collectData2 = JSON.parse(productinLocal2);
        var append2 = $("#checkout-product2").append('<div class="products__blocks" id="' + collectData2.price2 + '">'+'<button id="btn-product2">X</button>'+collectData2.productbody2+'</div>');
        var currentProduct2 = document.getElementById(collectData2.price2);
        //next function is deleting product from lockalStorage
        $('#btn-product2').click(function () {
            localStorage.removeItem("userdata2");
            currentProduct2.remove()
        })
    }
    if (localStorage.getItem('userdata3')){
        var productinLocal3 = localStorage.getItem('userdata3');
        var collectData3 = JSON.parse(productinLocal3);
        var append3 = $("#checkout-product3").append('<div class="products__blocks" id="' + collectData3.price3 + '">'+'<button id="btn-product3" >X</button>'+collectData3.productbody3+'</div>');
        var currentProduct3 = document.getElementById(collectData3.price3);
        //next function is deleting product from lockalStorage
        $('#btn-product3').click(function () {
            localStorage.removeItem("userdata3");
        })
    }
}


//Counting the price
function checkUser(){
    if(localStorage.getItem('user')){
        localStorage.clear('userdata1','userdata2','userdata3')

    }
}

