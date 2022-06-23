window.addEventListener('load', solution);

function solution() {
    const nameField = document.querySelector('#fname');
    const emailField = document.querySelector('#email');
    const phoneField = document.querySelector('#phone');
    const addressField = document.querySelector('#address');
    const codeField = document.querySelector('#code');

    const infoPreview = document.querySelector('#infoPreview');

    const editBtn = document.querySelector('#editBTN');
    editBtn.addEventListener('click', editInfo);
    const continueBtn = document.querySelector('#continueBTN');
    continueBtn.addEventListener('click', finishREservation)

    const submBtn = document.querySelector('#submitBTN');
    submBtn.addEventListener('click', addFields);

    function addFields(event) {
        if (nameField.value != '' && emailField.value != '') {
            const liName = document.createElement('li');
            liName.textContent = `Full Name: ${nameField.value}`;

            const liEmail = document.createElement('li');
            liEmail.textContent = `Email: ${emailField.value}`;

            const liPhone = document.createElement('li');
            liPhone.textContent = `Phone Number: ${phoneField.value}`;

            const liAddress = document.createElement('li');
            liAddress.textContent = `Address: ${addressField.value}`;

            const liCode = document.createElement('li');
            liCode.textContent = `Postal Code: ${codeField.value}`;

            infoPreview.appendChild(liName);
            infoPreview.appendChild(liEmail);
            infoPreview.appendChild(liPhone);
            infoPreview.appendChild(liAddress);
            infoPreview.appendChild(liCode);

            event.target.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;
        }

        nameField.value = '';
        emailField.value = '';
        phoneField.value = '';
        addressField.value = '';
        codeField.value = '';
    }

    function editInfo(event) {
        event.target.disabled = true;
        continueBtn.disabled = true;
        submBtn.disabled = false;

        const allLiElemetns = document.querySelectorAll('li');

        nameField.value = allLiElemetns[0].textContent.split(': ')[1];
        emailField.value = allLiElemetns[1].textContent.split(': ')[1];
        phoneField.value = (allLiElemetns[2].textContent.split(': ')[1]);
        addressField.value = allLiElemetns[3].textContent.split(': ')[1];
        codeField.value = (allLiElemetns[4].textContent.split(': ')[1]);

        while (infoPreview.firstChild) {
            infoPreview.removeChild(infoPreview.firstChild);
          }
    }

    function finishREservation(event) {
        const divParentElement = document.getElementById('block');

        while (divParentElement.firstChild) {
          divParentElement.removeChild(divParentElement.firstChild);
        }
    
        const h3 = document.createElement("h3");
        h3.textContent = 'Thank you for your reservation!';
    
        divParentElement.appendChild(h3);
    }
}
