function x(y) {
    return y * 5;
}

function f(t, n){
    // t - функция, которая принимает 1 численный аргумент
    // n - любое число
    return n + t(n);
}
console.log (f(x, 3));//18
// лямбда - выражения
// любую функцию можно заменить на лямбду и наоборот
// кроме случаев когда функция или лямбда объявлена внутри объекта
console.log (f((a) => a*a, 10 )); //f((a) => { return a*a; });


// ООП
// Инкапсуляция -можем создать объект часть свойств которого можно скрыть, передать и т.д
// Способы создания объекта

// способ 1
let cat = {
    name: 'Tom',
    age: 5,

    meow: () => console.log('meooooooow')  // то же самое function (){}
};

cat.age = 10;
console.log (cat);
cat.meow();

// каждый объект в js это - ассоциативный массив (примерно как HashMap из java, 
//где в качестве ключа используется название поля бъекта)

cat['name'] = 'Kitty';//меняем имя через асоциативный массив
cat['color'] = 'black';// несуществующее свойство добавляется таким образом
cat.play = (toy) => console.log ('cat is playing with ' + toy);

console.log(cat);
cat ['meow'](); // вызываем метод
cat ['play'] ('ball');

// в js наследование нет, есть Прототипирование
let cat2 = {};
cat2.__proto__ = cat;//свойство от которого мы наследуемся
console.log(cat2);
cat2.meow();
let cat3 = {
    meow: () => console.log('haw')
};
 
Object.setPrototypeOf(cat3, cat2);// - то же что и - cat3.__proto__= cat2;
cat3.play('mouse');
cat3.meow();
console.log(cat3);
// вызов метода из родительского объекта
cat3.__proto__.meow();

 // 2 способ создания объектов
function Dog(name = '???'){
// это конструктор
//let name = 'Bobik';
this.name = name;
this.haw = () => console.log('haw');//добавляем метод

}

let dog = new Dog('Bobik');
console.log(dog);
dog.haw();

// 3 способ
class User {

    // # -это приватность
    #secret;//объявляем приватное свойство
    name;//объявляем свойство
    age;

   // конструктор может быть только один и никаких перегрузок
   constructor (name){
    this.name = name;
    this.#secret = 'cake is a lie';

   }

  // getSecret(){
 //   return this.#secret;
  // }

    pay(){ //объявляем метод

        console.log('$$$$$$');
    } 
    static info(){
        console.log('USER');
    }
}

let user = new User('Vasya');
console.log(User);
user.pay();
//console.log(user.#secret);
User.info();
//user.info();-так не работает

//наследование калассов
class Student extends User{
    constructor(){
        super('Petia');
    }
    pay(){ //переопределяем метод без @Overraide
        super.pay();
        console.log('$');
    } 

}
let s = new Student();
console.log(s);
s.pay();

console.log(typeof[1,2,3]);//Object
console.log(typeof s);//Object
console.log(typeof f);//function
console.log(typeof Student);//function
