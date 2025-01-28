document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const inputNumber=document.getElementById('input-number');
    const inputNumberValue= inputNumber.value;
    const pinNumber=document.getElementById('pin-number').value;
    const pinNumberType=parseInt(pinNumber)
    // console.log(typeof pinNumberType)

    if(pinNumberType === 1234 && inputNumberValue === '01314761277'){
        window.location.href="home.html";
    }else{
        alert('Your Pin & Phone number is invalid!');
    }
});