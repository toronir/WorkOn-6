/* Literal */
'Hi my name #';
100;
/* Literal */



var test2 = [900, 1, 2, 3, 4];


function getRandomNamber(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min;
}


var a = 'To jest string jest'
    /* global */
a = a.replace(/jest/g, 'nie jest');
/* global */

/* sort numbers */
var arrayy = [11, 3, 8, 12, 333, 15]
arrayy.sort(function(a, b) { return a - b });
/* sort numbers */

var arrayyy = ['el 1', 'el 2', 'el 3'];
arrayyy.forEach(function(item, index) {

    console.log('Element ' + item + ' have index ' + index);
    console.log('-----');

})
var sum = arrayy.reduce(function(total, item) {
    return total + item;
})
console.log(sum)
var count = 0;
var end = false;
arrayy.forEach(function(item, index) {
        item > 0 ? count++ : count = 0;

    }

);
count == arrayy.length ? end = true : end = false;
console.log(end)

var persone = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    ege: 30,
    bornCity: 'Warszawa',
    sayHi: function() {
        return 'Hi, my name ' + this.firstName + '' + this.lastName;
    },
    setEmail: function(email) {
        this.email = email;
    }
}



/* text 
var peoples = [{
        firstName: 'Egor',
        secondName: 'Egorovisc',
        age: 20,
    },
    {
        firstName: 'Oleg',
        secondName: 'Olegovich',
        age: 19,
    },
    {
        firstName: 'Alex',
        secondName: 'Alexovich',
        age: 29,
    },
];
var nameArray = [];
peoples.find(function(item) {
    nameArray.push(item.firstName);

});
console.log('name array:');
console.log(nameArray);

var ageSum = 0;
peoples.find(function(item) {
    ageSum = ageSum + item.age;

});
console.log('age sum ' + ageSum);
peoples.sort(function(a, b) {
    return a.age - b.age;
})
console.log('age sort array:')
console.log(peoples)*/


/* var data = new Date(1998, 3);
var now = new Date()

var dif = now - data;



console.log(Math.round(dif / 2628336 / 12 / 1000))



var peoples = {
    firstName: 'Egor',
    secondName: 'Egorovisc',
    age: 20,
}

for (item in peoples) {
    console.log(item + ' ' + peoples[item])
} */


/* for (var i = 0; i <= 1000; i++) {
    i % 2 == 0 ? console.log(i) : console.log('-');
} */

function funckName(param1, param2, param3) {
    console.log(param1)
    console.log(param2)
    console.log(param3)
}




/* IIFE-imidiatli function */
/* var timer = 0;
var now = new Date();
var hourse = now.getHours();
var minute = now.getMinutes();
var seconds = now.getSeconds();


function sec(seconds) {
    seconds > 60 ? seconds = 0 : seconds++;
    console.log(seconds)
}

function min(minute) {
    minute > 60 ? minute = 0 : minute++;
}

function hor(hourse) {
    hourse > 24 ? hourse = 0 : hourse++;
} */

var makeClock = function() {
    var now = new Date();

    var dataString = now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();
    document.getElementById("clock").innerHTML = dataString;

}
setInterval(makeClock, 1000);


console.log(window);

(function() {
    console.log(window);
    var aaa = 'Hi';
})()

var a = [window.innerHeight, innerWidth,
    window.screen.availWidth, window.screen.pixelDepth,
]



console.log(a);


window.fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));

var heading = document.getElementById('h1_hello');
var elment = document.getElementsByClassName('my_class');
var elment = document.getElementsByTagName('div');
var elment = document.querySelector('.my_class');
/*or querySelectorAll */

/* heading.innerHTML = "New string"
 */

/* setInterval(() => {
    var input = document.getElementById('inp_text');
    console.log(input.value);
}, 3000)

heading.style.color = 'red'

var wrapper = document.getElementById('wrapper');

var p = document.createElement('p');

p.innerHTML = "lore ipsum...";
wrapper.appendChild(p);

var p2 = document.createElement('p');

p2.innerHTML = "lore ipsum2...";
wrapper.appendChild(p2);

var p3 = document.createElement('p');

p3.innerHTML = "lore ipsum3...";
wrapper.appendChild(p3);
wrapper.insertBefore(p3, p)
var di = document.createElement('div')
di.innerHTML = "this is div"
wrapper.replaceChild(div, p3)

wrapper.removeChild(p);
 */




document.getElementById('btn')
    .onclick = () => {
        alert();
    }

var myFu = (e) => {
    console.log(this);
    console.log(e)
}

/* document.getElementById('inp_fuild').addEventListener('click', (e) => {

    console.log(this)
    console.log(e)
}) */
document.getElementById('inp_fuild').addEventListener('click', myFu);

document.getElementById('l_link').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Hi');
})
window.addEventListener('load', () => {
    var link = document.getElementById('l_link')
    console.log(link)
})
var p_h = document.createElement('p')
var p_w = document.createElement('p')
p_h.innerHTML = (window.innerHeight);
p_w.innerHTML = (window.innerWidth);
size.appendChild(p_h)
size.appendChild(p_w)
window.addEventListener('resize', () => {

    p_h.innerHTML = (window.innerHeight);
    p_w.innerHTML = (window.innerWidth);
    size.appendChild(p_h)
    size.appendChild(p_w)
})

document.getElementById('result').addEventListener('click', () => {
        var first = document.getElementById('first_number')
        var a = first.value

        var second = document.getElementById('second_number')
        var b = second.value
        var select = document.getElementById('select_op')
        var res = select.value
        var result


        if (res == "+") {
            result = parseInt(a) + parseInt(b);
            alert(result)
        } else if (res == "-") {
            result = parseInt(a) - parseInt(b);
            alert(result)
        } else if (res == "*") {
            result = parseInt(a) * parseInt(b);
            alert(result)
        } else if (res == "/") {
            result = parseInt(a) / parseInt(b);
            alert(result)
        }




    })
    /* var i = 20;
    var new_tr = document.createElement('tr')
    new_tr.setAttribute("id", "table" + i);

    var NewId = new_tr.id;
    var new_th = document.createElement('th')
    new_th.innerHTML = "(window.innerHeight)";

    table_body.appendChild(new_tr)

    document.getElementById(NewId).appendChild(new_th)
    console.log(NewId) */

/* window.fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json)); */
for (i = 0; i <= 3; i++) {
    var new_tr = document.createElement('tr')
    new_tr.setAttribute("id", "table" + i);

    var NewId = new_tr.id;
    var new_th = document.createElement('th')
    new_th.innerHTML = "(window.innerHeight)";

    table_body.appendChild(new_tr)

    document.getElementById(NewId).appendChild(new_th)
    console.log(NewId)
}