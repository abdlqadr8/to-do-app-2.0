  //Add To-do Pop-up window
  const addBtn = document.querySelector('.add-btn');
  const closeBtn = document.querySelector('.close-btn');
  const wrap = document.querySelector('.wrapper');

  addBtn.addEventListener('click', () => {
      wrap.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
      wrap.style.display = 'none';
  });

  const addForm = document.querySelector('.add-form');
  const ul = document.querySelector('ul');

  addForm.addEventListener('submit', e => {
      e.preventDefault()

      const value = addForm.todo.value;

      const li = document.createElement('li');
      li.textContent = value;
      ul.append(li);

      wrap.style.display = 'none';

  });

  //Edit/Delete option
  const option = document.querySelector('.option');
  const optCloseBtn = document.querySelector('.opt-close');
  const optForm = document.querySelector('.opt-form');
  const list = document.querySelectorAll('li');
  
  ul.addEventListener('click', e => {

      let prevValue = e.target.innerText;
      optForm.edit.setAttribute('value', prevValue)

      if (e.target.tagName === 'LI') {
          option.style.display = 'block';

          optForm.addEventListener('submit', e => {
              e.preventDefault();
              const newValue = optForm.edit.value;
              console.log(newValue)


          });
      }
  });

  optCloseBtn.addEventListener('click', () => {
      option.style.display = 'none';
  });