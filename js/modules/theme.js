// export function initTheme() {
//   const themeToggle = document.getElementById("theme-toggle");
//   if (!themeToggle) return;

//   const savedTheme = localStorage.getItem("theme") || "light";

//   document.body.classList.toggle("dark-theme", savedTheme === "dark");
//   themeToggle.checked = savedTheme === "dark";

//   themeToggle.addEventListener("change", () => {
//     const isDark = themeToggle.checked;
//     document.body.classList.toggle("dark-theme", isDark);
//     localStorage.setItem("theme", isDark ? "dark" : "light");
//   });
// }

export function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  // Встановлюємо початкову тему
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark-theme", savedTheme === "dark");
  themeToggle.checked = savedTheme === "dark";

  // Обробник зміни теми
  themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
