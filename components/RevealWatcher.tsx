"use client";

import { useEffect } from "react";

export default function RevealWatcher() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      const step = Number(group.dataset.stagger) || 90;
      let index = 0;
      group.querySelectorAll<HTMLElement>(".reveal").forEach((child) => {
        if (child.style.getPropertyValue("--reveal-delay")) return;
        child.style.setProperty("--reveal-delay", `${index * step}ms`);
        index += 1;
      });
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewportMiddle = window.innerHeight / 2;
      for (const layer of layers) {
        const speed = Number(layer.dataset.parallax) || 0.12;
        const rect = layer.getBoundingClientRect();
        const drift = (rect.top + rect.height / 2 - viewportMiddle) * speed;
        layer.style.transform = `translate3d(0, ${(-drift).toFixed(1)}px, 0)`;
      }
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    if (layers.length > 0) {
      update();
      window.addEventListener("scroll", request, { passive: true });
      window.addEventListener("resize", request);
    }

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);

  return null;
}
