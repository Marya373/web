let name2 = "Добро пожаловать на мою первую страницу!";

function hello(){
        let result = "Привет! " + name2;
        alert(result);
}
hello();

if (confirm("Вам есть 18 лет?")){
        alert("Добро пожаловать!");
} else {
        alert("Придется зайти немного попозже");
}

function  getInput(){
        var input = document.getElementById("myInput").value;
        if (document.getElementById("myInput").value === ""){
                alert("Вы ничего не ввели.");
        }else{
                alert(input);
        }
}

let page = document.querySelector(".page");
let button1 = document.querySelector(".teme_button");
button1.onclick = function(){
        page.classList.toggle("light_teme");
       page.classList.toggle("dark_teme");

}

function getInput1(){
        var input = document.getElementById("my_email").value;
        if (document.getElementById("my_email").value === ""){
                alert("Вы ввели не верный адрес");
        }else{
                alert("Ваше сообщение отправлено!");
        }
}
