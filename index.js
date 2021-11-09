document.getElementById("classic-increase").addEventListener("click", function () {
    handleTicketChange("classic", true)
    totalTicket()
});

document.getElementById("classic-decrease").addEventListener("click", function () {
    handleTicketChange("classic", false)
    totalTicket()
})

document.getElementById("economy-increase").addEventListener("click", function () {
    handleTicketChange("economy", true);
    totalTicket()
});

document.getElementById("economy-decrease").addEventListener("click", function () {
    handleTicketChange("economy", false);
    totalTicket()
});

function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketNewCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    // let ticketTotal = 0;
    // if (ticket == "classic") {
    //     ticketTotal = ticketNewCount * 150;
    // } if (ticket == "economy") {
    //     ticketTotal = ticketNewCount * 100;
    // }
    
    ticketInput.value = ticketNewCount;
}

function totalTicket(){
    const classicCount = document.getElementById("classic-count").value;
    const economyCount = document.getElementById("economy-count").value;
    const totalTicketCost = classicCount*150+economyCount*100;
    document.getElementById("subtotal").innerText = totalTicketCost;
    const totalVat = totalTicketCost*0.1;
    document.getElementById("vat").innerText = totalVat;
    const allTotalCost  = totalTicketCost+totalVat;
    document.getElementById("allTotal").innerText = allTotalCost;

}

document.getElementById("bookNow").addEventListener("click", function (){
    document.getElementById("confirm-page").style.display = "block"
    document.getElementById("main-content").style.display = "none"
})


// confirm-page

// function handleTicketChange(isIncrease){
//     const classicInput = document.getElementById("classic-count");
//     const classicCount = parseInt( classicInput.value);
//     let classicNewCount = classicCount;
//     if(isIncrease==true){
//         classicNewCount = classicCount + 1;
//     } if(isIncrease==false && classicCount>0){
//         classicNewCount = classicCount-1;
//     }
//     classicInput.value = classicNewCount;
// }

// //economy functionality 
// document.getElementById("economy-increase").addEventListener("click", function(){
//     handleEconomyTicketChange(true);
// });

// document.getElementById("economy-decrease").addEventListener("click", function (){
//     handleEconomyTicketChange(false);
// })
// function handleEconomyTicketChange(isIncrease){
//     const economyInput = document.getElementById("economy-count");
//     const economyCount = parseInt(economyInput.value);
//     let economyNewCount = economyCount;
//     if(isIncrease==true){
//         economyNewCount = economyCount+1;
//     }
//     if(isIncrease==false && economyCount>0){
//         economyNewCount = economyCount-1;
//     }
//     economyInput.value = economyNewCount;
// }

//7