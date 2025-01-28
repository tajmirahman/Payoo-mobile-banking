document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const cashInput = addInputValueById('cash-input');
    const cashPin = addInputValueById('cash-pin');

    if (isNaN(cashInput)) {
        alert('Is not a number !');
        return
    }

    if (cashPin === 1234) {


        const blance = document.getElementById('current-blance').innerText;
        const currentBlance = parseFloat(blance);
        const newBlance = currentBlance - cashInput;

        if (blance < cashInput) {
            alert('Taka Nai');
            return
        }

        document.getElementById('current-blance').innerText = newBlance;

        // Transaction History
        const div=document.createElement('div');
        div.classList.add('bg-red-500');
        div.innerHTML= `
        <p class="text-white p-2"> Withdraw: ${cashInput} tk. Blance: ${newBlance}</p>`
        
        document.getElementById('transaction-container').appendChild(div);




    } else {
        alert('Pin Is invalid !')
    }


});
