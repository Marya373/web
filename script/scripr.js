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