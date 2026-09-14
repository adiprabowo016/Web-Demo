/* ============================================================
   script.js  -  Shared dynamic behaviours for the portfolio
   Loaded on every page just before </body>.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Injected UI: scroll progress + back-to-top ---------- */
  function injectUI() {
    var progress = document.createElement("div");
    progress.id = "scrollProgress";
    document.body.appendChild(progress);

    var topBtn = document.createElement("button");
    topBtn.id = "backToTop";
    topBtn.type = "button";
    topBtn.setAttribute("aria-label", "Back to top");
    topBtn.innerHTML = "&uarr;";
    document.body.appendChild(topBtn);

    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 2. Sticky glass header ---------- */
  function makeHeaderSticky() {
    var brand = document.getElementById("mainheader");
    if (!brand) return null;
    var header = brand.closest(".container-lg") || brand.parentElement;
    if (header) header.classList.add("site-header");
    return header;
  }

  /* ---------- 3. Scroll handlers ---------- */
  function onScroll(header) {
    var scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || 0;
    var docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    var bar = document.getElementById("scrollProgress");
    if (bar) bar.style.width = percent + "%";

    var topBtn = document.getElementById("backToTop");
    if (topBtn) topBtn.classList.toggle("show", scrollTop > 300);

    if (header) header.classList.toggle("scrolled", scrollTop > 20);
  }

  /* ---------- 4. Reveal-on-scroll via IntersectionObserver ---------- */
  function initReveal() {
    var elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
    );
    if (!elements.length) return;

    // No IntersectionObserver support -> just show everything.
    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = el.getAttribute("data-delay");
          if (delay) el.style.transitionDelay = delay + "ms";
          el.classList.add("visible");
          obs.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 5. Typing effect for the hero role ---------- */
  function initTyping() {
    var target = document.getElementById("typed-role");
    if (!target) return;

    var roles = JSON.parse(target.getAttribute("data-roles") || "[]");
    if (!roles.length) {
      roles = ["Software Quality Assurance.", "Web Developer.", "QA Engineer."];
    }
    var typeSpeed = 70;
    var eraseSpeed = 40;
    var holdTime = 1600;
    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function tick() {
      var current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        target.textContent = current.substring(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, holdTime);
          return;
        }
        setTimeout(tick, typeSpeed);
      } else {
        charIndex--;
        target.textContent = current.substring(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(tick, 350);
          return;
        }
        setTimeout(tick, eraseSpeed);
      }
    }
    tick();
  }

  /* ---------- 6. Highlight the active nav link based on URL ---------- */
  function highlightActiveNav() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll("#navitem .nav-link");
    links.forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;
      var isActive =
        href === path ||
        (path === "" && href === "index.html") ||
        (path === "index.html" && href === "index.html");
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  /* ---------- 7. Boot ---------- */
  function boot() {
    injectUI();
    var header = makeHeaderSticky();
    initReveal();
    initTyping();
    highlightActiveNav();

    onScroll(header);
    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
          onScroll(header);
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
