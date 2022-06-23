function solution() {

    const gift = document.querySelector('input');
    const [gifts, sended, discarded] = document.querySelectorAll('section ul');

    document.querySelector('.container').addEventListener('click', (ev) => {
        ev.preventDefault();

        if (ev.target.textContent === 'Add gift') {
            
            const newGift = document.createElement('li');
            newGift.textContent = gift.value;
            gift.value = '';

            const sendBtn = document.createElement('button');
            const discardBtn = document.createElement('button');
            newGift.classList.add('gift');
            sendBtn.setAttribute('id', 'sendButton');
            discardBtn.setAttribute('id', 'discardButton');
            sendBtn.textContent = 'Send';
            discardBtn.textContent = 'Discard';

            newGift.appendChild(sendBtn);
            newGift.appendChild(discardBtn);
            gifts.appendChild(newGift);

            Array.from(gifts.children).sort((a, b) => a.innerText.localeCompare(b.innerText)).forEach(e => gifts.appendChild(e));
        }

        else if (ev.target.textContent === 'Send') {

            let nameGift = document.createElement('li');
            nameGift.textContent = ev.target.parentNode.childNodes[0].textContent;
            nameGift.classList.add('gift');
            sended.appendChild(nameGift);
            ev.target.parentNode.remove();
        }
        else if (ev.target.textContent === 'Discard') {

            let nameGift = document.createElement('li');
            nameGift.textContent = ev.target.parentNode.childNodes[0].textContent;
            nameGift.classList.add('gift');
            discarded.appendChild(nameGift);
            ev.target.parentNode.remove();
        }
    })
} 