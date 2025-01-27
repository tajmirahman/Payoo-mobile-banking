document.getElementById('add-login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('yes');
    const addPin=document.getElementById('add-pin').value;
    const addMoneyInput=document.getElementById('add-money-input').value;
    const mainBlance=document.getElementById('main-blance').value;

    if(addPin === '1234'){
        const sum=addMoneyInput + mainBlance;
        console.log(sum);
    }


});