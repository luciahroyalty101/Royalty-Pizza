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


    var totalPrice = actualSize + actualCrust + actualTop * actualQu;
    console.log(totalPrice);
    alert("Your order of " + actualQu  + "Pizzas has been received.Your total amount payable is" + totalPrice)

}






function dolly() {
    event.preventDefault();
    var name = $("#nam").val();
    var loca = $("#lct").val();

    alert("THANKS " + name + " ,your order will be delivered at " + loca +" within an hour.The deliverly will cost sh.180.Thank you for chosing Royalty pizza-inn")
}