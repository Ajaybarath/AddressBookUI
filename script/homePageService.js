let addressBookListArr = new Array();

window.addEventListener('DOMContentLoaded', (event) => {

    localStorage.removeItem('editEmp')
    if (siteProperties.useLocalStorage == true) {
        addressBookListArr = getAddressBookDataFromLocalStorage();
        console.log(addressBookListArr)
        createInnerHtml();
    }
    else {
        addressBookListArr = getAddressBookDataFromServer();
        console.log(addressBookListArr)
    }

    console.log("content loaded")
})

const getAddressBookDataFromLocalStorage = () => {
    return localStorage.getItem('ContactList') ? JSON.parse(localStorage.getItem('ContactList')) : [];
}

const getAddressBookDataFromServer = () => {
    const getURL = siteProperties.serverUrl;
    makePromiseCall("GET", getURL, true)
        .then(responseText => {
            console.log("Get user data: " + responseText)
            addressBookListArr = JSON.parse(responseText);
            createInnerHtml();
        })
        .catch(error => {
            console.log("Get Error status: " + JSON.stringify(error))
            createInnerHtml();
        })
}

const createInnerHtml = () => {
    const headerHtml = ` <tr>
                            <th>FullName</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Phone Number</th>
                        </tr>`;

    let innerHtml = `${headerHtml}`;

    for (const contact of addressBookListArr) {
        innerHtml = ` ${innerHtml}
        <tr>
            <td>${contact._name}</td>
            <td>${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phone}</td>
            <td class="action-content">
                <img src="../assets/icons/delete-black-18dp.svg" id=${contact.id} onclick="deleteContact(this)" alt="delete">
                <img src="../assets/icons/create-black-18dp.svg" id=${contact.id} onclick="updateContact(this)" alt="delete">
            </td>
        </tr>`;
    }

    document.querySelector('.table-main').innerHTML = innerHtml;

}

const deleteContact = (node) => {
    let contactLocalData = addressBookListArr.find(cntDta => cntDta.id == node.id);
    if (!contactLocalData) {
        return;
    }

    console.log(node.id)
    const index = addressBookListArr.map(cntDta => cntDta.id).indexOf(contactLocalData.id);
    addressBookListArr.splice(index, 1);
    localStorage.setItem("ContactList", JSON.stringify(addressBookListArr))
    createInnerHtml();

}

const updateContact = (node) => {
    let contactLocalData = addressBookListArr.find(cntDta => cntDta.id == node.id);
    if (!contactLocalData) {
        return;
    }

    localStorage.setItem('editEmp', JSON.stringify(contactLocalData))
    window.location.replace(siteProperties.formPage);

}