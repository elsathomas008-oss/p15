function toggleTheme() {
    const btn = document.getElementById("theme-btn");
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
        btn.innerHTML = "&#9728; Light Mode";
    } else {
        btn.innerHTML = "&#9790; Dark Mode";
    }
}