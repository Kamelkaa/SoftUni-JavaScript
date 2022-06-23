function solve() {
 
   const buttonCreate = document.querySelector('body > div > div > aside > section:nth-child(1) > form > button');
   const posts = document.querySelector('body > div > div > main > section');
   const archive =document.querySelector('body > div > div > aside > section.archive-section > ol') ;
  
   buttonCreate.addEventListener('click', createPost);
  
   function createPost(e) {
     e.preventDefault();
  
     let authorEl = document.querySelector('#creator');
     let titleEl = document.querySelector('#title');
     let categoryEl = document.querySelector('#category');
     let contentEl = document.querySelector('#content');
  
     let titleValue = titleEl.value;
  
     const deleteBtn = el('button', 'Delete', {
       className: 'btn delete'
     });
  
     const archiveBtn = el('button', 'Archive', {
       className: 'btn archive'
     });
  
     archiveBtn.addEventListener('click', () =>{
       let olEl = el('li',titleValue);
       archive.appendChild(olEl);
  
       const items = [...archive.querySelectorAll('li')];
       archive.innerHTML = '';
  
       items.sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach(e => archive.appendChild(e));
  
       posts.removeChild(article);
     });
  
     deleteBtn.addEventListener('click', () => {
       posts.removeChild(article);
     });
  
     const article =
       el('article', [
         el('h1', titleEl.value),
         el('p', ['Category: ', el('strong', categoryEl.value)]),
         el('p', ['Creator: ', el('strong', authorEl.value)]),
         el('p', contentEl.value),
         el('div', [deleteBtn, archiveBtn], {
           className: 'buttons'
         })
       ]);
  
     titleEl.value = '';
     categoryEl.value = '';
     authorEl.value = '';
     contentEl.value = '';
  
     posts.appendChild(article);
   }
  
   function el(type, content, attributes) {
     const result = document.createElement(type);
  
     if (attributes !== undefined) {
       Object.assign(result, attributes);
     }
  
     if (Array.isArray(content)) {
       content.forEach(append);
     } else {
       append(content);
     }
  
     function append(node) {
       if (node === null) { node = ' '; }
       if (typeof node === 'string' || typeof node === 'number') {
         node = document.createTextNode(node);
       }
       result.appendChild(node);
     }
     return result;
   }
 }
