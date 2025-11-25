import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

export function initQuestionsAccordion() {
  new Accordion(".questions__list", {
    duration: 500,
    showMultiple: false,
    openOnInit: [0],
    elementClass: "questions__item",
    triggerClass: "questions__trigger",
    panelClass: "questions__panel",
    activeClass: "is-open",
    collapse: true,
  });
}
