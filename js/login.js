document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    

    const pinNumber=document.getElementById('pin-number').value;
    const phoneNumber=document.getElementById('phone-number').value;

    if(phoneNumber === '01314761277' && pinNumber === '1234'){
        window.location.href= "home.html";
    }else{
        alert('your phone & pin invalid');
    }

});

