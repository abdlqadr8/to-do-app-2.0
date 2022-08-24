const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const del = document.querySelector('.del');

const generateTodo = thread => {
    const html = ` 
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${thread}</span>
            <span>
                <i class="fa-solid fa-pen-to-square edit"></i> <i class="fa-solid fa-trash-can delete" data-bs-toggle="modal" data-bs-target="#mymodal"></i>
            </span>
        </li>
    `;

    list.innerHTML += html;
};

//Add to do
addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const thread = e.target.add.value.trim();

    if (thread.length) {
        generateTodo(thread);
        addTodo.reset();
    }
});

//Delete To do
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        del.addEventListener('click', () => {
            e.target.closest('li').remove();
        }); 
    }
});


// list.addEventListener('click', e => {
//     if (e.target.classList.contains('edit')) {
//         let text = e.target.closest('li').innerText;
//         editTodo.new.setAttribute('value', text);

//         editTodo.addEventListener('submit', e =>{
//             e.preventDefault();
//             console.log("yes")
//             editTodo.reset();
            
//         });
//     }

// });