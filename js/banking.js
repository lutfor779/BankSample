// deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    // set deposit amount
    document.getElementById('deposit-total').innerText = parseFloat(document.getElementById('deposit-total').innerText) + parseFloat(document.getElementById('deposit-input').value);

    // update balance
    document.getElementById('balance-total').innerText = parseFloat(document.getElementById('balance-total').innerText) + parseFloat(document.getElementById('deposit-input').value);
    
    //set input field empty
    document.getElementById('deposit-input').value = '';
})

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // set withdraw amount
    document.getElementById('withdraw-total').innerText = parseFloat(document.getElementById('withdraw-total').innerText) + parseFloat(document.getElementById('withdraw-input').value);

    // update balance
    document.getElementById('balance-total').innerText = parseFloat(document.getElementById('balance-total').innerText) - parseFloat(document.getElementById('withdraw-input').value);
    
    //set input field empty
    document.getElementById('withdraw-input').value = '';
})