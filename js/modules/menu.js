export function initMenu() {
  const burgerBtn = document.getElementById("burger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("menu-close-btn");
  const navLinks = document.querySelectorAll(".mobile-menu__link");

  burgerBtn?.addEventListener("click", () => {
    mobileMenu?.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  closeBtn?.addEventListener("click", () => {
    mobileMenu?.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      mobileMenu?.classList.remove("active");
      document.body.classList.remove("no-scroll");
    })
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu?.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
}
