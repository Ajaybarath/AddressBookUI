let contactListArr = new Array();
let updatedContactObj;
let isUpdate = false;
let contactIdToUpdate = 0;

window.addEventListener('DOMContentLoaded', (event) => {
    checkForUpdate();
})

const save = () => {
    updatedContactObj = getFormData();
    try {
        if (siteProperties.useLocalStorage == true) {
            addToLocalStorage();
        }
        else {
            addToServer();
        }
    }
    catch (e) {
        alert(e)
    }

}

const resetForm = () => {
    setValue('#name', '');
    setValue('#address', '');
    setValue('#State', 'Select State');
    setValue('#city', 'Select City');
    setValue('#zip', '');
    setValue('#phone', '');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const addToServer = () => {
    let postUrl = siteProperties.serverUrl;
    let methodCall = "POST"
    if (isUpdate) {
        methodCall = "PUT";
        postUrl = siteProperties.serverUrl + updatedContactObj.id;
    }

    makePromiseCall(methodCall, postUrl, false, updatedContactObj)
        .then(responseText => {
            console.log("Get user data: " + responseText)
            alert(updatedContactObj)
            alert("saved successfully")
            resetForm();
            localStorage.removeItem('editEmp')
            window.location.replace(siteProperties.homePage)

        })
        .catch(error => {
            throw error;

        })
}

const addToLocalStorage = () => {
    var contactList = JSON.parse(localStorage.getItem("ContactList"))
    let contactLocalData;
    if (contactList) {
        contactLocalData = contactList.find(cntDta => cntDta.id === updatedContactObj.id);
        if (!contactLocalData) {
            contactList.push(updatedContactObj);
        }
        else {
            const index = contactList.map(cntDta => cntDta.id).indexOf(contactLocalData.id);
            contactList[index] = updatedContactObj;
        }

    }
    else {
        contactList = [updatedContactObj]
    }

    alert(updatedContactObj.toString())
    localStorage.setItem("ContactList", JSON.stringify(contactList))
    alert("saved successfullf")
    resetForm();
    window.location.replace(siteProperties.homePage)
}

const getFormData = () => {
    let name = document.querySelector("#name").value;
    let address = document.querySelector("#address").value;
    let state = document.querySelector('#State').value;
    let zip = document.querySelector("#zip").value;
    let city = document.querySelector("#city").value;
    let phone = document.querySelector("#phone").value;
    let id;

    if (siteProperties.useLocalStorage == true) {
        if (isUpdate == true)
            id = contactIdToUpdate;
        else
            id = getNewId();

    }
    else {
        if (isUpdate == true)
            id = contactIdToUpdate;
    }


    try {
        let adderssBook = new AdderssBook(id, name, address, city, state, zip, phone);
        console.log(adderssBook)
        return adderssBook;
    }
    catch (e) {
        alert(e)
    }

}

const getNewId = () => {
    let contactId = localStorage.getItem("ContactId");
    contactId = !contactId ? 1 : (parseInt(contactId) + 1);
    localStorage.setItem("ContactId", contactId);
    return contactId;
}

const checkForUpdate = () => {
    const contactJsonData = localStorage.getItem('editEmp');
    isUpdate = contactJsonData ? true : false;
    if (!isUpdate) return;

    updatedContactObj = JSON.parse(contactJsonData);
    contactIdToUpdate = updatedContactObj.id;
    setForm();
}

const setForm = () => {
    setValue('#name', updatedContactObj._name);
    setValue('#address', updatedContactObj._address);
    setValue('#State', updatedContactObj._state);
    setValue('#city', updatedContactObj._city);
    setValue('#zip', updatedContactObj._zip);
    setValue('#phone', updatedContactObj._phone);
}