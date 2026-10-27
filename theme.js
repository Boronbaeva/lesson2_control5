const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", function() {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        themeBtn.textContent = "Светлая тема";
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        themeBtn.textContent = "Темная тема";
    }
});