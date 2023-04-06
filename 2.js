// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли
// у переданного объекта свойство с данным именем. Функция должна возвращать true или false.


const User = {
    age: 10,
    name: 'John'
};

const first = 'name'
const second = '10'


function checkFunc(i, User) {
    return i  in User;
}
console.log(checkFunc(first, User))
console.log(checkFunc(second, User))