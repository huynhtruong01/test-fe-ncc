const btnSideBar = document.querySelector(".btn__sidebar")
if (btnSideBar) {
    btnSideBar.addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("active")
    })
}
