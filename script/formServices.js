const save = () => {
    getFormData()
    alter("saveButton Clicked")
}

const resetForm = () => {

}

const getFormData = () => {
    let name = document.querySelector("#name")
    let address = document.querySelector("#address")
    let state = document.querySelector("#state")
    let zip = document.querySelector("#zip")
    let city = document.querySelector("#city")
    let phone = document.querySelector("#phone")
    let id = getNewId()

    let adderssBook = new AdderssBook(id, name, address, city, state, zip, phone);

    console.log(adderssBook)

}

const getNewId = () => {
    let contactId = localStorage.getItem("ContactId");
    contactId = !contactId ? 1 : (contactId + 1);
    localStorage.setItem("ContactId", contactId);
    return contactId;
}