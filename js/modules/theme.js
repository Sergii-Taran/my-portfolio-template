export function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  let savedTheme = localStorage.getItem("theme");

  if (!savedTheme) {
    savedTheme = "light";
    localStorage.setItem("theme", "light");
  }

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
  } else {
    document.body.classList.remove("dark-theme");
    themeToggle.checked = false;
  }

  themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;
    document.body.classList.toggle("dark-theme", isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
