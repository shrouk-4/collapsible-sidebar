const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
sidebar.classList.toggle("closed");

  // optional: تغيير الأيقونة
const icon = toggleBtn.querySelector("i");
if (sidebar.classList.contains("closed")) {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
} else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
}
});
