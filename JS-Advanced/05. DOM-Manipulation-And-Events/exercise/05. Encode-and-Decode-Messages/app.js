function encodeAndDecodeMessages() {
    const messages = {
        decodedMessage: document.getElementsByTagName('textarea')[0],
        encodedMessage: document.getElementsByTagName('textarea')[1]
    };

    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON' && e.target.textContent.includes('Encode')) {
            let message = messages.decodedMessage.value;
            let encoded = [];

            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                encoded.push(String.fromCharCode(currSymbol + 1));
            }

            messages.decodedMessage.value = '';
            messages.encodedMessage.value = encoded.join('');
        } else if (e.target.tagName == 'BUTTON' && e.target.textContent.includes('Decode')) {
            let message = messages.encodedMessage.value;
            let decoded = [];

            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                decoded.push(String.fromCharCode(currSymbol - 1));
            }

            messages.encodedMessage.value = decoded.join('');
        }
    });
}