import { animate } from "motion";

export function heroAnimation() {
  const selectors = [
    ".hero-title",
    ".hero-text",
    ".hero-buttons",
    ".hero-meta"
  ];

  selectors.forEach((selector, index) => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (el) {
      animate(
        el,
        { 
          opacity: [0, 1],
          y: [40, 0]
        } as any,
        { duration: 0.8, delay: index * 0.15, ease: "easeOut" }
      );
    }
  });
}