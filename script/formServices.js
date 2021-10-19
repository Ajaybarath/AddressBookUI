let contactListArr = new Array();
let updatedContactObj;

const save = () => {
    updatedContactObj = getFormData();
    addToLocalStorage();
}

const resetForm = () => {

}

const addToLocalStorage = () => {
    var contactList = JSON.parse(localStorage.getItem("ContactList"))
    let contactLocalData;
    if (contactList) {
        contactLocalData = contactList.find(cntDta => cntDta._id === updatedContactObj._id);
        if (!contactLocalData) {
            contactList.push(updatedContactObj);
        }
        else {
            const index = contactList.map(cntDta => cntDta._id).indexOf(contactLocalData._id);
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
}

const getFormData = () => {
    let name = document.querySelector("#name").value;
    let address = document.querySelector("#address").value;
    let state = document.querySelector('#State').value;
    let zip = document.querySelector("#zip").value;
    let city = document.querySelector("#city").value;
    let phone = document.querySelector("#phone").value;
    let id = getNewId()

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