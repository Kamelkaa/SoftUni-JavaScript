function extract(content) {
    const text = document.getElementById(content).textContent;
    let result = '';

    const pattern = /\((.+?)\)/g;

    let matcher = pattern.exec(text);
    while (matcher != null) {
        result += matcher[1] + '; ';
        matcher = pattern.exec(text);
    }

    return result;
}