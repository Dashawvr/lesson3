
//TASK 1,2,3,4
//
// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//
// person ={
//     name:  'John',
//     age: 19,
//     email: 'Sincere@april.biz',
//     address: {
//         street: "Skiles Walks",
//         suite: "Suite 351",
//         city: "Roscoeview"},
//     like: ['pianino', 'football','draw']
// };
//
// person2 = {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//         street: "Skiles Walks",
//         suite: "Suite 351",
//         city: "Roscoeview"},
//     like: ['pianino', 'football','draw']
// };
//
// person3 = {
//     key: 345,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     address: {
//     street: "Skiles Walks",
//     suite: "Suite 351",
//     city: "Roscoeview"},
//     like: ['pianino', 'football','draw']
// };
//
// let keys = Object.keys(person);
// let keys2 = Object.keys(person2);
// let keys3 = Object.keys(person3);
// console.log(keys);
// console.log(keys2);
// console.log(keys3);
//
// for (const filed in person) {
//     console.log(filed, person[filed]);
// }
// for (const filed in person2) {
//     console.log(filed, person2[filed]);
// }
// for (const filed in person3) {
//     console.log(filed, person3[filed]);
// }

//TASK 5,6,7,8,9,10

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// car = [
//     {name:'Toyota', year:2001, color:'red',power:3000},
//     {name:'Audi', year:2010, color:'gray', power:50000},
//     {name:'Lambogini', year:2019, color:'yellow', power:30000},
//     {name:'Audi', year:2019, color:'silver', power:10000},
//     {name:'Dogi', year:2017, color:'black', power:1000}
// ];
//
// let car1 = 0;
// while(car1 < car.length){
//     console.info(car[car1].name);
//     console.log(car[car1]);
//     car1++;
// }

// for( let i = 0; i< car.length; i++){
//      console.log(car[i]);
//  }

//
// for (const carv of car) {
//     console.log(carv.name);
// }
//
// cars = [
//     {name:'Toyota', year:2001, color:'red',power:3000,user:{name:'Jack', age: 27, experiance:7}},
//     {name:'Audi', year:2020, color:2008, power:50000, user: {name:'Vasia', age: 20, experiance:5}},
//     {name:'Lambogini', year:2019, color:'yellow', power:30000, user: {name:'Jax', age: 20, experiance:5}},
//     {name:'Audi', year:2019, color:'silver', power:10000, user: {name:'Max', age: 21, experiance:5}},
//     {name:'Dogi', year:2017, color:'black', power:100004, user: {name:'Andriy', age: 19, experiance:1}}
// ];
//
// let cars2 = 0;
// while(cars2 < cars.length) {
//     console.log(cars[cars2].power);
//     console.log(cars[cars2]);
//     cars2++;
// }
//
// for( let i = 0; i< cars.length; i++){
//      console.log(cars[i]);
//  }

// for (const car of cars) {
//     console.log(car.name);
// }

// cities = [
//     {name:'Lviv', population:800000, country:'Ukrine',region:'Podilskiy'},
//     {name:'Khmelnitskiy', population:200000, country:'Ukrine',region:'Podilskiy'},
//     {name:'Frankivsk', population:400000, country:'Ukrine',region:'Podilskiy'},
//     {name:'Vinytsia', population:300000, country:'Ukrine',region:'Podilskiy'},
//     {name:'Lviv', population:800000, country:'Ukrine',region:'Podilskiy'}
//
// ];
//
// let city = 0;
// while(city < cities.length) {
//     console.log(cities[city].name);
//     console.log(cities[city]);
//     city++;
// }

// for( let i = 0; i< cities.length; i++){
//     console.log(cities[i]);
// }

// for (const city1 of cities) {
//     console.log(city1.name);
// }

//TASK 11, 12

// - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
//
// person ={
//     name:  'John',
//     age: 19,
//     email: 'Sincere@april.biz',
//     address: {
//         street: "Skiles Walks",
//         suite: "Suite 351",
//         city: "Roscoeview"},
//     like: ['pianino', 'football','draw']
// };
//
// let string2 = JSON.stringify(person);
// let parse2 = JSON.parse(string2);
//
// console.log(string2);
// console.log(parse2);
//
// person2 = {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//         street: "Skiles Walks",
//         suite: "Suite 351",
//         city: "Roscoeview"},
//     like: ['pianino', 'football','draw']
// };
//
// let string1 = JSON.stringify(person2);
// let parse1 = JSON.parse(string1);
//
// console.log(string1);
// console.log(parse1);
//
// person3 = {
//     key: 345,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     address: {
//         street: "Skiles Walks",
//         suite: "Suite 351",
//         city: "Roscoeview"},
//     like: ['pianino', 'football','draw']
// };
//
// let string = JSON.stringify(person3);
// let parse = JSON.parse(string);
//
// console.log(string);
// console.log(parse);

//TASK 13
// 1- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//2 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// 3- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// 4- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// 5- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// 1
// car = [
//     {name:'Toyota', year:2001, color:'red',power:3000},
//     {name:'Audi', year:2010, color:'gray', power:50000},
//     {name:'Lambogini', year:2019, color:'yellow', power:30000},
//     {name:'Audi', year:2019, color:'silver', power:10000},
//     {name:'Dogi', year:2017, color:'black', power:1000}
// ];
//
// for (const carKey in car) {
//    let str = JSON.stringify(car[carKey]);
//     console.log(str)
// }
// 2
// cars = [
//     {name:'Toyota', year:2001, color:'red',power:3000,user:{name:'Jack', age: 27, experiance:7}},
//     {name:'Audi', year:2020, color:2008, power:50000, user: {name:'Vasia', age: 20, experiance:5}},
//     {name:'Lambogini', year:2019, color:'yellow', power:30000, user: {name:'Jax', age: 20, experiance:5}},
//     {name:'Audi', year:2019, color:'silver', power:10000, user: {name:'Max', age: 21, experiance:5}},
//     {name:'Dogi', year:2017, color:'black', power:100004, user: {name:'Andriy', age: 19, experiance:1}}
// ];
// let cars2=[];
// for (const carsKey in cars) {
//     cars2.JSON.stringify(cars[carsKey]);
//     console.log(cars2);
// }

//3
//
// cities = [
//     {name:'Lviv', population:800000, country:'Ukrine',region:'Podilskiy'},
//     {name:'Khmelnitskiy', population:200000, country:'Ukrine',region:'Podilskiy'},
//     {name:'Frankivsk', population:400000, country:'Ukrine',region:'Podilskiy'},
//     {name:'Vinytsia', population:300000, country:'Ukrine',region:'Podilskiy'},
//     {name:'Lviv', population:800000, country:'Ukrine',region:'Podilskiy'}
//
// ];
//
// for (const component in cities) {
//     let str1 = JSON.stringify(cities[component]);
//     console.log(str1);
//     let str = JSON.parse(str1)
// }
//4 5 ++++++++++++++++
// let users = [
//     {name:'Andriy', age:21, skills:['football', false, 'colorful']},
//     {name:'Misha', age:20, skills:['baseball', true, 'white']},
//     {name:'Danil', age:19, skills:['regbi', false, 'brown']}
// ];
// for (const usersKey of users) {
//     for (const user of usersKey.skills) {
//         console.log(user);
//     }
// }
// let skills = [];
//
// for (const user of users) {
//     for (const skill of user.skills) {
//         skills.push(skill);
//     }
// }
// console.log(skills)
//6===============
//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
//
// for (const user  of users) {
//     for (const user1 of user.skills) {
//         console.log(user1);
//     }
// }
// TASK 20*****===========
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//======20
// let adresses = [];
//
// for (const user of users) {
//     adresses.push(user.address);
// }
//
// console.log(adresses);

//21,22,23=====
// let id =  document.getElementById('container');
// for (const user of users) {
//     let divdiv = document.createElement('div');
//     divdiv.classList.add('user');
//     for (const usersKey1 in user) {
//         let divEement = document.createElement('div');
//         divEement.style.backgroundColor = 'silver';
//         divEement.innerText = user[usersKey1];
//
//         divdiv.appendChild(divEement);
//     }
// id.appendChild(divdiv);
// }

/// TASK=====
///З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

// const usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// const citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
// let usersWithCities = [];
//занадто примітивне і не цікаве
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;
//             usersWithCities.push(user);
//         }
//     }
// }
// воно не працює холєра
// console.log(usersWithCities);
// function mergeArrayObjects(usersWithId,citiesWithId){
//     return usersWithId.map((item,i)=>{
//         if(item.id === citiesWithId[i].user_id){
//             //merging two objects
//             return Object.assign({},item,citiesWithId[i])
//         }
//     })
// }
//а це з костилями надо пофіксити
// console.log(mergeArrayObjects(usersWithId,citiesWithId));
// citiesWithId.forEach(member => {
// concat.push( Object.assign( {}, member,//Object.assign
//          { name: usersWithId.find(m => m.user_id === member.id).status}
//     ))
// });
// console.log(concat);


///TASK--------
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

//====

let id = document.getElementById('id');
let class1 = document.getElementsByClassName('class');
let tag = document.getElementsByTagName('span');

id.textContent = 'Some another text there';
class1.textContent = 'some changes here';
tag.textContent = 'and Some here!';

console.log(id.textContent);
console.log(class1.textContent);
console.log(tag.textContent);

// id.style.width = '200px';
// class1.style.width = '200px';
// tag.style.width = '200px';

///====
let table0 = document.createElement('table');
let tr = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
td1.textContent = 12891;
td2.textContent  = 10;
td3.textContent = 214;
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
table0.appendChild(tr);
console.log(table0);
//==

let table = document.createElement('table');
let tbody = document.createElement('tbody');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

table.appendChild(tbody);
console.log(table);
//++++++
let table1 = document.createElement('table');
let tbody1 = document.createElement('tbody');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    tbody1.appendChild(tr);

}

table1.appendChild(tbody1);
console.log(table1)
//---++---+++__________
let table2 = document.createElement('table');
let tbody2 = document.createElement('tbody');
let prom = +prompt('Enter amount rows:');
let cell = +prompt('Enter amount cells:');

for (let i = 0; i < prom; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < cell; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    tbody2.appendChild(tr);
}

table2.appendChild(tbody2);
console.log(table2)






// JSON
// fetch('https://jsonplaceholder.typicode.com/users').then(usersJson => usersJson.json())
//     .then(users => {
//         console.log(users);
//
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = user.id + " " + user.name + " " +
//                 user.username + " " + user.email + " " + user.address + " "
//                 + user.id + " " + user.name + " " +
//                 + user.username +" "+ user.email +" "+ user.address +" "
//                 + user.address.geo.lat + " " + user.address.geo.lng + " "
//                 + user.phone + " " + user.website + " " + user.company + " "
//                 + user.company.name + " " + user.company.catchPhrase + " " + user.company.bs;
//             document.body.appendChild(div);
//         }
//
//         for (const field in users) {
//             console.log(users[field]);
//         }
//     });
















