(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const profileImage = document.querySelector(".profile-photo[data-placeholder='true']");
  if (profileImage) {
    profileImage.addEventListener("error", () => {
      const svg = [
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>",
        "<rect width='200' height='200' fill='%23eef3f8'/>",
        "<circle cx='100' cy='76' r='34' fill='%23b8c7d8'/>",
        "<path d='M42 178c8-38 35-60 58-60s50 22 58 60' fill='%23b8c7d8'/>",
        "<text x='100' y='194' text-anchor='middle' font-family='Arial' font-size='16' fill='%2368707d'>Siyue Ren</text>",
        "</svg>"
      ].join("");

      profileImage.src = "data:image/svg+xml;charset=UTF-8," + svg;
    }, { once: true });
  }

  const moreNewsButton = document.querySelector(".more-news-button");
  const moreNews = document.querySelector("#more-news");

  if (moreNewsButton && moreNews) {
    moreNews.classList.remove("open");
    moreNewsButton.setAttribute("aria-expanded", "false");
    moreNewsButton.textContent = "Click Here for More News ...";

    moreNewsButton.addEventListener("click", () => {
      const isOpen = moreNews.classList.toggle("open");

      moreNewsButton.setAttribute("aria-expanded", String(isOpen));
      moreNewsButton.textContent = isOpen
        ? "Hide Earlier News"
        : "Click Here for More News ...";
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      });
    }, {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0.01
    });

    sections.forEach((section) => observer.observe(section));
  }
})();