document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // cash out money
     document.getElementById('cash-money-form').classList.remove('hidden');

    //  add money
    document.getElementById('add-money-form').classList.add('hidden');
     
});

document.getElementById('cash-send-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutMoneyInput= document.getElementById('cash-money-input').value;
    const cashPin=document.getElementById('cash-pin').value;
    
    if(cashPin === '1234'){
        const mainBlance=document.getElementById('main-blance').innerText;
        const newBlance=mainBlance - cashOutMoneyInput;
        // console.log(newBlance);

        document.getElementById('main-blance').innerText=newBlance
    }

    

});
