document.getElementById('add-send-money').addEventListener('click', function (event) {

    event.preventDefault();

    const inputAddMoney = addInputValueById('input-add-money');
    const inputAddPin = addInputValueById('input-add-pin');

    if (isNaN(inputAddMoney)) {
        alert('Is not a number !');
        return
    }

    if (inputAddPin === 1234) {

        const currentBlance = document.getElementById('current-blance').innerText;
        const currentBlanceNumber = parseFloat(currentBlance);
        const newBlance = currentBlanceNumber + inputAddMoney;
        document.getElementById('current-blance').innerText = newBlance;

        

        // Transaction History
        const p=document.createElement('p');
        p.innerText=`send: ${inputAddMoney} tk. Total Blance: ${newBlance}`;

        document.getElementById('transaction-container').appendChild(p);
    

    } else {
        alert('Pin is Invalid!');
    }

})