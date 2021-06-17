'use strict';
// получаем переменные
const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');
    
  let todoData = [];
// функция добавления дел  
  const render = function() {
      todoList.textContent = '';
      todoCompleted.textContent = '';
// добавление поля      
      todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
        '</div>';

      if(item.completed) {
        todoCompleted.append(li);
      } else {
        todoList.append(li);
      }
// галочка выбора      
      const btnTodoCompleted = li.querySelector('.todo-complete');
          btnTodoCompleted.addEventListener('click', function(){
              item.completed = !item.completed;
               localStorage.ar = JSON.stringify(todoData);      
            render();
      })
// кнопка корзины
      const btnTodoRemove = li.querySelector('.todo-remove');
          btnTodoRemove.addEventListener('click', function(){
            li.querySelector('.text-todo').remove();
            li.classList.remove('todo-item');
             todoData.splice(todoData.indexOf(item), 1);
            localStorage.ar = JSON.stringify(todoData); 
             render();             
         })
      });
      // загрузка в localStorage
localStorage.ar = JSON.stringify(todoData); 
console.log();
  };
// кнопка добавления
  todoControl.addEventListener('submit', function(event){
    event.preventDefault();
// ввод данных в поле
    let getHeaderInput = function() {
      if (headerInput.value === '') {
          return;
      } else {
        const newTodo = {
          value: headerInput.value, 
          completed: false,
        }; 
      todoData.push(newTodo);
// отчистка поля ввода
      headerInput.value = '';
      }
    }; getHeaderInput();

    render();
  });
// вывод из localStorage
  todoData = JSON.parse(localStorage.ar);
render();
