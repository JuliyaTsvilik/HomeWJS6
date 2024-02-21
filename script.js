// Создать в html форму с тремя инпутами (имя, фамилия, возраст).
// Написать скрипт, который при отправке формы выводит собранные данные в консоль.

// const FirstName = document.querySelector('.FirstName')
// const LastName = document.querySelector('.LastName')
// const Age = document.querySelector('.Age')
// const button = document.querySelector ('.Send')

// button.addEventListener("click", function(event){
// event.preventDefault()
// console.log(FirstName.value)
// console.log(LastName.value)
// console.log(Age.value)
// }
// )

// Доработать процесс таким образом,
//  чтобы при отправке формы данные из нее добавлялись в массив users 
// в виде объекта.

// const FirstName = document.querySelector('.FirstName');
// const LastName = document.querySelector('.LastName');
// const Age = document.querySelector('.Age');
// const button = document.querySelector ('.Send');
// const users = [];

// button.addEventListener("click", function(event){
// event.preventDefault();
// console.log(FirstName.value);
// console.log(LastName.value);
// console.log(Age.value);
// const user = {
//     FirstName: FirstName.value,
//     LastName: LastName.value,
//     Age: Age.value
// }
// users.push(user);
// showUsers()

// });
// function showUsers() {
//     console.log(users);
// }


// Реализовать функцию rerender. 
// Эта функция очищает контейнер с карточками и создает множество карточек с
//  пользователями из массива. Настроить rerender при добавлении нового пользователя.




// // 

// const users =[];
// const main = document.querySelector("main");

// function rerender() {
//     // main.innerHTML = '';
//     users.forEach(user => {
//         main.innerHTML += `
//             <div class="user">
//                 <h1>${user.name}</h1>
//                 <p>${user.age}</p>
//             </div>
//         `;
//     });
// }

// rerender();

// const newUser = { name: 'Nik', age: 27}
// users.push(newUser);

// rerender();

// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива 
// удалялся пользователь по id и вызывался rerender.


Что -то я запуталась в этой задаче думаю над решением, предыдущая задача мне кажется
тое не совсем правильно сделана/// 
