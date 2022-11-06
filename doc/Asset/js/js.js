// Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")


// Event Listeners
todoButton.addEventListener('click', addTodo);
todolist.addEventListener('click', deleteCheck)


// Functions
function addTodo(event){
  event.preventDefault();
  // Create todoDiv that was meant to be inside the html

  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  // Create the li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  // next up is to append (add) the newTodo we just created inside the todoDiv.

  todoDiv.appendChild(newTodo);
  // So now we have a div with an li as the todo items.

  // Next we need a Delete button and a completed or check mark button.

  const completedButton = document.createElement('button');
  // completedButton.innerText = 'just a string';

  // The above is absolutely correct. But what if we want to add inside this button, an (i) tag we created earlier in the html? e.g
  // completedButton.innerText = '<i class="fas fa-check"></i>';

  // The above won't work as it will just render it as text rather than an icon. But if we use innerHtml, it will be rendered correctly as an icon. e.g

  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  // So now, we've added to the button the (i) tag.
  completedButton.classList.add('complete-btn');
  // Now let's append this button inside the todoDiv
  todoDiv.appendChild(completedButton);


  // Let's do the same for the trash or delete button.


  const trashButton = document.createElement('button');

  trashButton.innerHTML = '<i class="fas fa-trash"></i>';

  trashButton.classList.add('trash-btn');

  todoDiv.appendChild(trashButton);

  // So now, we have the list items, the check button and the trash button, all inside our div just like we explained in the html file.

  // next up, we are going to now take the todoDiv and attach it inside the main ul in our html file...remember that in our html, we said all the list and delete and check boxes should be inside the ul.


  // Append todoDiv to list.

  todolist.appendChild(todoDiv);

  // clear todoInput value to nothing so that we won't always have the texts inside the input after we finish adding.

  todoInput.value = "";
}



function deleteCheck(e){
  const item = e.target;

  // delete todo
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }

  // check mark todo....This is to mark or check our list as done

   if(item.classList[0] === "complete-btn"){
    const todo = item.parentElment;
    todo.classList.toggle("completed");
   }
}