let addressBookListArr = new Array();

window.addEventListener('DOMContentLoaded', (event) => {
    localStorage.removeItem('editEmp')
    addressBookListArr = getAddressBookDataFromLocalStorage();
    console.log(addressBookListArr)
    createInnerHtml();
    console.log("content loaded")
})

const getAddressBookDataFromLocalStorage = () => {
    return localStorage.getItem('ContactList') ? JSON.parse(localStorage.getItem('ContactList')) : [];
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
                <img src="../assets/icons/delete-black-18dp.svg" id=${contact._id} onclick="deleteContact(this)" alt="delete">
                <img src="../assets/icons/create-black-18dp.svg" id=${contact._id} onclick="deleteContact(this)" alt="delete">
            </td>
        </tr>`;
    }

    document.querySelector('.table-main').innerHTML = innerHtml;

}

const deleteContact = (node) => {
    let contactLocalData = addressBookListArr.find(cntDta => cntDta._id == node.id);
    if (!contactLocalData) {
        return;
    }

    console.log(node.id)
    const index = addressBookListArr.map(cntDta => cntDta._id).indexOf(contactLocalData._id);
    addressBookListArr.splice(index, 1);
    localStorage.setItem("ContactList", JSON.stringify(addressBookListArr))
    createInnerHtml();

}