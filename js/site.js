(function () {
  var root = document.documentElement;

  // ---- Light/dark toggle: follows the system setting until the visitor picks one
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.dataset.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // ---- Hairline under the header once the page is scrolled
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  if (header) {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---- Highlight the nav link of the section in view
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  var sections = document.querySelectorAll("main section[id]");
  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id = "#" + entry.target.id;
      navLinks.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === id);
      });
    });
  }, { rootMargin: "-35% 0px -60% 0px" });

  sections.forEach(function (s) { observer.observe(s); });
})();
