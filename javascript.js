
const ham = document.querySelector(".hamburger");
ham.addEventListener('click' ,() =>
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}
);