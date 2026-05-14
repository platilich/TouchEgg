let button = document.getElementById("toggleDark")



// загрузка темы из куки
let savedTheme = localStorage.getItem("theme")
if (savedTheme) {
    document.body.classList.add(savedTheme);
    
    if (savedTheme == 'dark') { // чтобы коректно отображалася кнопка
      button.innerHTML = 'Light Mode'
    }
    
    else {
      button.innerHTML = 'Dark Mode'
    }
}


button.addEventListener("click", function(){
  let isDark = document.body.classList.toggle("dark") // если класс .dark не применен применяем, если он есть удаляем


  button.innerHTML = isDark ? "Light Mode" : "Dark Mode" // если isDark равен True, то тогда кнопка с надписью Light Mode, а если isDark == false, то тогда пишем Dark Mode

  localStorage.setItem("theme", isDark ? "dark" : "light") // если isDark сохраняем тему dark, если у false то пишем light

});