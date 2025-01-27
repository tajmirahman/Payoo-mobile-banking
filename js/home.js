document.getElementById('add-login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('yes');
    const addPin=document.getElementById('add-pin').value;
    const addMoneyInput=document.getElementById('add-money-input').value;
    

    if(addPin === '1234'){
        
        const mainBlance=document.getElementById('main-blance').innerText;
        const addBalance=parseFloat(addMoneyInput);
        const totalBalance=parseFloat(mainBlance);
        const newBlance= addBalance + totalBalance;
        document.getElementById('main-blance').innerText= newBlance;
    }else{
        alert('your pin is not correct!')
    }


});