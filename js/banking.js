// update transaction
function add(enter, main) {
    const mainBalance = parseFloat(document.getElementById('balance-total').innerText);
    if (mainBalance - parseFloat(enter.value) >= 0) {
        main.innerText = parseFloat(enter.value) + parseFloat(main.innerText);
        return main.innerText;
    }
}

// update Balance
function balance(newBalance, mainBalance, isAdd) {
    if (isAdd == true) {
        mainBalance.innerText = parseFloat(mainBalance.innerText) + parseFloat(newBalance.value);
    }
    else if (parseFloat(mainBalance.innerText) - parseFloat(newBalance.value) >= 0){
        mainBalance.innerText = parseFloat(mainBalance.innerText) - parseFloat(newBalance.value);
    }
    newBalance.value = '';
    return mainBalance.innerText;
}

// get deposit info
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositTotal = document.getElementById('deposit-total');
    const Total = document.getElementById('balance-total');
    if (depositInput.value > 0) {
        add(depositInput, depositTotal);
        balance(depositInput, Total, true);
    }
    else {
        depositInput.value = '';
    }
})

// get withdraw info
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTotal = document.getElementById('withdraw-total');
    const Total = document.getElementById('balance-total');
    if (withdrawInput.value > 0 ) {
        add(withdrawInput, withdrawTotal);
        balance(withdrawInput, Total, false);
    }
    else {
        withdrawInput.value = '';
    }
})