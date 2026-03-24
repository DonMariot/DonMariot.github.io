import { animate } from "motion";

export function revealSections() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    animate(
      section,
      { opacity: [0, 1], y: [40, 0] } as any,
      { duration: 0.8, delay: 0.2, easing: "ease-out" } as any
    );
  });
}