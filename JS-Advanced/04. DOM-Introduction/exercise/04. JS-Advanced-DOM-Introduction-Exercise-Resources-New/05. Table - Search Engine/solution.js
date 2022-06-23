function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value.toLowerCase();
      let elements = Array.from(document.querySelectorAll('tbody tr'));

      for (let i = 0; i < elements.length; i++) {
         let element = elements[i].textContent.toLowerCase();

         if (element.includes(input)) {
            elements[i].classList.add('select');
         } else {
            elements[i].classList.remove('select');
         }
      }
   }
}