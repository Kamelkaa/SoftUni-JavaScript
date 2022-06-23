function addItem() {
    //Solution 1:
    const elements = {
        itemText: document.getElementById('newItemText'),
        itemValue: document.getElementById('newItemValue'),
        menu: document.getElementById('menu')
    };

    let optionElem = document.createElement('option');
    optionElem.textContent = elements.itemText.value;
    optionElem.value = elements.itemValue.value;

    elements.menu.appendChild(optionElem);

    elements.itemText.value = '';
    elements.itemValue.value = '';

    //Solution 2:
    // let itemText = document.getElementById('newItemText');
    // let itemValue = document.getElementById('newItemValue');

    // let optionElem = document.createElement('option');
    // optionElem.textContent = itemText.value;
    // optionElem.value = itemValue.value;

    // let menu = document.getElementById('menu');

    // menu.appendChild(optionElem);

    // itemText.value = '';
    // itemValue.value = '';
}