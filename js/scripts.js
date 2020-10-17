function orderPizza() {
    event.preventDefault();
    // console.log(selectedSize)
    var selectedCrust = document.getElementById("crust").value;
    // alert (selectedCrust)

    var selectedSize = document.getElementById("size").value;
    var actualSize = parseInt(selectedSize);
    var actualCrust = parseInt(selectedCrust);
    console.log(actualSize);
    console.log(actualCrust);

    var actualTop = 0;
    var topping = document.querySelectorAll('input[name="topping"]');
    for (const top of topping) {
        if (top.checked) {
            actualTop = parseInt(top.value);
            break;
        }
    }
    console.log(actualTop);

    
    var qu = document.getElementById("usr").value;
    var actualQu = parseInt(qu);
    console.log(actualQu);
    

    // var onions = 0;
    // var addOnions = document.getElementById("topping").value;
    // if (addOnions.checked === true) {
    //     onions = 60;
    // }
    // var bacon = 0;
    // var addBacon = document.getElementById("topping").value;
    // if (addBacon.checked === true) {
    //     bacon = 70;
    // }
        
    // var extraCheese = 0;
    // var addExtraCheese = document.getElementById("topping").value;
    // if (addExtraCheese.checked === true) {
    //     extraCheese = 80;
    // }
    // var sausage = 0;
    // var addSausage = document.getElementById("topping").value;
    // if (addSausage.checked === true) {
    //     sausage = 90;
    // }
   
    var totalPrice= actualSize + actualCrust + actualTop * actualQu;
    console.log (totalPrice);
    alert("Your order of " + actualQu +"Pizzas has been received.Your total amount payable is"+ totalPrice + "")
    
}

// alert("Your order of" +getAmount() + "has been received.Your total amount payable is"+ totalPrice + "")

