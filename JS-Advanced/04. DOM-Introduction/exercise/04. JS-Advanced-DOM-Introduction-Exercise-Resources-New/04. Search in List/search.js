function search() {
   let surchedText = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('ul li'));
   let matches = 0;

   for (let i = 0; i < towns.length; i++) {
      if (towns[i].textContent.includes(surchedText)) {
         towns[i].style.fontWeight = 'bold';
         towns[i].style.textDecoration = 'underline';
         matches++;
      } else {
         towns[i].style.fontWeight = 'normal';
         towns[i].style.textDecoration = '';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}
