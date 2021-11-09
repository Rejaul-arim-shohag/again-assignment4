document.getElementById("classicBtnIncrease").addEventListener("click", function () {
    handleTicketChange("classic", true);
    totalCalculate()
    // const inputClassic = document.getElementById("inputClassic");
    // const inputClassicNumber = parseInt(inputClassic.value)
    // const inputClassicNewCount = inputClassicNumber + 1;
    // inputClassic.value = inputClassicNewCount;
    // const total = inputClassicNewCount * 150;

    // document.getElementById("subtotal").innerText = total;
    // const vat = total * 0.1
    // document.getElementById("vat").innerText = vat;
    // const allTotal = total + vat;
    // document.getElementById("allTotal").innerText = allTotal;
});

//classic minus button handler
document.getElementById("classicBtnDecrease").addEventListener("click", function () {
    const inputClassic = document.getElementById("inputClassic");
    const inputClassicNumber = parseInt(inputClassic.value);
    const inputClassicNewCount = inputClassicNumber - 1;
    inputClassic.value = inputClassicNewCount;
    const total = inputClassicNewCount * 150;

    document.getElementById("subtotal").innerText = total;
    const vat = total * 0.1
    document.getElementById("vat").innerText = vat;
    const allTotal = total + vat;
    document.getElementById("allTotal").innerText = allTotal;

});



function handleTicketChange(ticket, isIncrease) {
    //    const ticketInput = document.getElementById(ticket+"Count");
    //    const ticketCount = parseInt(ticketInput.value);
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    } if (isIncrease == false && ticketCount>0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket+"-count").value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == "classic") {
        ticketTotal = ticketNewCount * 150;
    } if (ticket == "economy") {
        ticketTotal = ticketNewCount * 100;
    }

}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
};

function totalCalculate(){
    const classicCount = getInputValue("classic");
    const economyCount = getInputValue("economy");
    const total = classicCount*150+economyCount+100;
    console.log(total)
}



