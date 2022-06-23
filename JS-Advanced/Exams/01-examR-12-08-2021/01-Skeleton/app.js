window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addFurniture);

    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');

    function addFurniture(event) {
        event.preventDefault();

        const yearValue = Number(yearField.value);
        const priceValue = Number(priceField.value);

        if (modelField.value != "" && descriptionField.value != "" && yearValue > 0 && priceValue > 0) {
            const tr = document.createElement("tr");
            tr.classList.add("info");
            tr.innerHTML = `<td>${modelField.value}</td>
                            <td>${priceValue.toFixed(2)}</td>
                            <td><button class="moreBtn">More Info</button>
                                <button class="buyBtn">Buy it</button>
                            </td>`;
            const hideTr = document.createElement("tr");
            hideTr.classList.add("hide");
            hideTr.innerHTML = `<td>Year: ${yearValue}</td><td colspan="3">Description: ${descriptionField.value}</td>`

            furnitureList.appendChild(tr);
            furnitureList.appendChild(hideTr);

            const moreInfoButtons = tr.querySelectorAll("button");
            moreInfoButtons[0].addEventListener("click", showMoreInfo);
            moreInfoButtons[1].addEventListener("click", buyFurniture);
        }

        modelField.value = '';
        yearField.value = '';
        descriptionField.value = '';
        priceField.value = '';
    }

    function showMoreInfo(event) {
        const moreInfoTr = event.target.parentElement.parentElement.nextElementSibling;

        if (event.target.textContent == "More Info") {
            event.target.textContent = "Less Info";
            moreInfoTr.style = "display: contents";
        } else {
            event.target.textContent = "More Info";
            moreInfoTr.style = "display: none";
        }
    }

    function buyFurniture(event) {
        const tr = event.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;

        hideTr.parentElement.removeChild(hideTr);

        const price = Number(tr.querySelectorAll('td')[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

        tr.parentElement.removeChild(tr);
    }
}
    // function e(type, attr, ...content) {
    //     const element = document.createElement(type);

    //     for (let prop in attr) {
    //         element[prop] = attr[prop];
    //     }

    //     for (let item of content) {
    //         if (typeof item == 'string' || typeof item == 'number') {
    //             item = document.createTextNode(item);
    //         }
    //         element.appendChild(item);
    //     }

    //     return element;
    // }
