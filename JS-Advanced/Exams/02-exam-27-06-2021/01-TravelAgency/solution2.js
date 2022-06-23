window.addEventListener('load', solution);

function solution() {
  const nameField = document.getElementById('fname');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const addressField = document.getElementById('address');
  const codeField = document.getElementById('code');

  const submBtn = document.getElementById('submitBTN');
  submBtn.addEventListener('click', addFielads);

  const editBtn = document.getElementById('editBTN');
  editBtn.addEventListener('click', editInfo);

  const continueBtn = document.getElementById('continueBTN');
  continueBtn.addEventListener('click', completedReservation);

  const infoPreview = document.getElementById('infoPreview');

  function addFielads(event) {
    if (nameField.value != '' && emailField.value != '') {
      infoPreview.innerHTML =
        `<li>Full Name: ${nameField.value}</li>
         <li>Email: ${emailField.value}</li>
         <li>Phone Number: ${phoneField.value}</li>
         <li>Address: ${addressField.value}</li>
         <li>Postal Code: ${codeField.value}</li>`;

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

    const allInfo = infoPreview.querySelectorAll('li');

    nameField.value = allInfo[0].textContent.split(': ')[1];
    emailField.value = allInfo[1].textContent.split(': ')[1];
    phoneField.value = Number(allInfo[2].textContent.split(': ')[1]);
    addressField.value = allInfo[3].textContent.split(': ')[1];
    codeField.value = Number(allInfo[4].textContent.split(': ')[1]);

    while (infoPreview.firstChild) {
      infoPreview.removeChild(infoPreview.firstChild);
    }
  }

  function completedReservation(event) {
    const divParentElement = document.getElementById('block');

    while (divParentElement.firstChild) {
      divParentElement.removeChild(divParentElement.firstChild);
    }

    const h3 = document.createElement("h3");
    h3.textContent = 'Thank you for your reservation!';

    divParentElement.appendChild(h3);
  }
}