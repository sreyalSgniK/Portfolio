const els = document.querySelectorAll(".hidden");
const ob = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        ob.unobserve(e.target);
      }
    }),
  { threshold: 0.15 },
);
els.forEach((el) => ob.observe(el));
