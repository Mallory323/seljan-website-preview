(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
      document.body.style.overflow = open ? "" : "hidden";
      if (open) {
        links.querySelectorAll(".nav-item.is-open").forEach((item) => {
          item.classList.remove("is-open");
        });
      }
    });

    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  document.querySelectorAll(".nav-item.has-dropdown").forEach((item) => {
    const parent = item.querySelector(".nav-parent");
    if (!parent) return;

    parent.addEventListener("click", (e) => {
      const isTouchOrMobile = window.matchMedia("(max-width: 960px)").matches;
      if (!isTouchOrMobile) return;
      // First tap opens submenu; second tap follows link if already open
      if (!item.classList.contains("is-open")) {
        e.preventDefault();
        document.querySelectorAll(".nav-item.is-open").forEach((other) => {
          if (other !== item) other.classList.remove("is-open");
        });
        item.classList.add("is-open");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item.has-dropdown")) {
      document.querySelectorAll(".nav-item.is-open").forEach((item) => {
        item.classList.remove("is-open");
      });
    }
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name")?.value?.trim() || "there";
      const email = form.querySelector("#email")?.value?.trim() || "";
      const phone = form.querySelector("#phone")?.value?.trim() || "";
      const dept = form.querySelector("#department")?.value || "";
      const message = form.querySelector("#message")?.value?.trim() || "";

      const subject = encodeURIComponent(`Seljan inquiry — ${dept || "General"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDepartment: ${dept}\n\n${message}`
      );

      window.location.href = `mailto:sales@seljan.com?subject=${subject}&body=${body}`;

      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent =
          "Opening your email client… If nothing opens, write us at sales@seljan.com.";
      }
    });
  }
})();
