document.getElementById('add-money-btn').addEventListener('click',function(){
    const addMoneyForm=document.getElementById('add-money-form');
    addMoneyForm.classList.remove('hidden');

    document.getElementById('cash-money-form').classList.add('hidden');
});