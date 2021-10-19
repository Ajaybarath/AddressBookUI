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
            <td>Ajay Barath</td>
            <td>Velayuthampalayam, Karur</td>
            <td>Karur</td>
            <td>Tamil Nadu</td>
            <td>629117</td>
            <td>91 9965775758</td>
            <td class="action-content">
                <img src="../assets/icons/delete-black-18dp.svg" id="1" onclick="remove(this)" alt="delete">
                <img src="../assets/icons/create-black-18dp.svg" id="2" onclick="update(this)" alt="delete">
            </td>
        </tr>`;
    }

    document.querySelector('.table-main').innerHTML = innerHtml;

}