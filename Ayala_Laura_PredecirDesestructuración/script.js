const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar); /* imprime Tesla */
console.log(otherRandomCar); /* imprime Merecedes*/
/* cuando hacemos la  desestructuración se le asigna a randomCar el valor Tesla y a otherRandomCar Mercedes */

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);  /* no esta definido */
console.log(otherName); /* imprime Elon */

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); /* imprime 12345 */
console.log(hashedPassword); 
/* no existe una variable password en el objeto original,aunque le asignamos su valor a la variable hashedPassword imprime undefined */

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); /* imprime false , esta comparando 2 y 5 */
console.log(first == third);  /* imprime true, esta comparando 2 y 2*/

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); /* imprime value */
console.log(secondKey); /* imprime [1, 5, 1, 8, 3, 3] */
console.log(secondKey[0]); /* imprime 1 */
console.log(willThisWork); /* imprime 5 */









