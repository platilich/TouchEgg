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
  let isDark = document.body.classList.toggle("dark")

  button.innerHTML = 'Light Mode'

  localStorage.setItem("theme", isDark ? "dark" : "light")

});