//1
const name = prompt('Как вас зовут?');
alert(`Вы - ${name}`);
//2
const age = prompt('Год рождения?');
alert(`Вам - ${2023 - age}`);
//3
const length = prompt('Длина квадрата?');
alert(`Периметр - ${length * 4}см`);
//4
const pi = 3.14;
const radius = prompt('Радиус круга?');
alert(`Площадь - ${pi * radius * radius}см в квадрате`);
//5
const S = prompt('Расстояние?');
const t = prompt('Время?');
alert(`Скорость - ${S / t}км/ч`);
//6
const dollar = prompt('Введите доллары:');
alert(`В еврах - ${dollar * 0.93}€`);
//7


console.log('Привет, ' + name + '!')
console.log(2023 - age)
console.log([length * 4] + 'см')
console.log([pi * radius * radius] + 'см в квадрате')
console.log([S / t] + 'км/ч')
console.log([dollar * 0.93] + '€')