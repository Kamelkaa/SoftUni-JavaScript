function fromJSONToHTMLTable(input) {
    let arr = JSON.parse(input);
    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let result = '  <tr>';
        let keys = Object.keys(arr[0]);

        for (let key of keys) {
            result += `<th>${escapeHtml(key)}</th>`;
        }
        result += '</tr>';

        return result;
    };

    function makeValueRow(obj) {
        let result = '  <tr>';
        let values = Object.values(obj);

        for (let value of values) {
            result += `<td>${escapeHtml(value)}</td>`;
        }
        result += '</tr>';

        return result;
    };

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    };

    console.log(outputArr.join('\n'));
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);