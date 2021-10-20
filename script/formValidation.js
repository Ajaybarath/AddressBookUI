window.addEventListener('DOMContentLoaded', (event) => {
   
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let nameRegex = RegExp("[A-Z][a-zA-Z]{2,}")
        if (nameRegex.test(name.value))
            nameError.textContent = "";
        else nameError.textContent = "Name is incorrect";
    })

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        let addressRegex = RegExp("[a-zA-Z]{3,}[' '][a-zA-Z]{3,}[' '][a-zA-Z]{3,}")
        if (addressRegex.test(address.value))
            addressError.textContent = "";
        else addressError.textContent = "Address is invalid";
    })

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        let phoneRegex = RegExp("^([+]?([0-9]{2})?([6-9]{1}[0-9]{9}))$")
        if (phoneRegex.test(phone.value))
         phoneError.textContent = "";
        else phoneError.textContent = "phone is incorrect";
    })

})