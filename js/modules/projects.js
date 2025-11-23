export function initProjects() {
  const hiddenCards = document.querySelectorAll(".projects__item--hidden");
  const loadMoreBtn = document.querySelector(".projects__load-more-btn");

  if (!loadMoreBtn || hiddenCards.length === 0) return;

  let index = 0;
  const batch = 3;

  loadMoreBtn.addEventListener("click", () => {
    const slice = Array.from(hiddenCards).slice(index, index + batch);

    slice.forEach((card) => {
      card.classList.remove("projects__item--hidden");
      card.classList.add("projects__item--visible");
    });

    index += batch;

    if (index >= hiddenCards.length) {
      loadMoreBtn.style.display = "none";
    }
  });
}
