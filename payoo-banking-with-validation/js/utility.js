 function addInputValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
 }

 function showFolderById(id){

    // hide all
    document.getElementById('show-add-form').classList.add('hidden');
    document.getElementById('show-cash-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    // remove 
    document.getElementById(id).classList.remove('hidden');
 }