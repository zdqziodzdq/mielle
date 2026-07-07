/* ============================================================
   MIELLE — main.js
   ⚙️ TOUT SE CONFIGURE ICI (liens, prix, code promo…)
   ============================================================ */

const CONFIG = {
  // 🔗 Lien du bouton "Ajouter au panier".
  // Option A (recommandé) : lien direct vers ton checkout Shopify
  //   → https://getmielle.com/cart/{VARIANT_ID}:1
  //   (récupère le VARIANT_ID dans Shopify > Produits > HoneyGlow > variante)
  // Option B : la page produit Shopify (par défaut ci-dessous)
  addToCartUrl: "https://getmielle.com/products/honeyglow",

  // 💰 Prix affichés (modifie ici, ça met à jour la fiche + la barre sticky)
  price: "€79,98",
  comparePrice: "€159,96",

  // 🎁 Code promo affiché après inscription newsletter
  promoCode: "MIELLE10",

  // 📮 Formulaire de contact :
  //   - laisse vide ("") → ouvre le client mail vers contactEmail
  //   - ou colle ton endpoint Formspree (https://formspree.io) → envoi direct
  formEndpoint: "",
  contactEmail: "contact@getmielle.com",
};

/* ---------- Marquee confiance (répété pour boucle infinie) ---------- */
(function buildMarquees() {
  const items = [
    "Satisfait ou remboursé", "Livraison offerte",
    "🎁 Cadeau Offert dès 90€ d'Achat", "N°1 en France 🇫🇷",
  ];
  const track = document.querySelector(".marquee__track:not(.marquee__track--logos)");
  if (track) {
    // x6 pour que la boucle soit fluide sur grands écrans
    track.innerHTML = Array(6).fill(items.map(i => `<span>${i}</span>`).join("")).join("");
  }

  const logos = [
    "https://getmielle.com/cdn/shop/files/13.png?v=1755560539",
    "https://getmielle.com/cdn/shop/files/14.png?v=1755560560",
    "https://getmielle.com/cdn/shop/files/mag_1.png?v=1755560580",
    "https://getmielle.com/cdn/shop/files/mag_2.png?v=1755560594",
  ];
  const logoTrack = document.querySelector(".marquee__track--logos");
  if (logoTrack) {
    logoTrack.innerHTML = Array(6).fill(
      logos.map(src => `<img src="${src}" alt="" loading="lazy">`).join("")
    ).join("");
  }
})();

/* ---------- Prix & liens depuis CONFIG ---------- */
(function applyConfig() {
  const cur = document.getElementById("priceCurrent");
  const cmp = document.getElementById("priceCompare");
  if (cur) cur.textContent = CONFIG.price;
  if (cmp) cmp.textContent = CONFIG.comparePrice;

  const stickyPrice = document.querySelector(".sticky-atc__price");
  if (stickyPrice) stickyPrice.innerHTML = `${CONFIG.price} <s>${CONFIG.comparePrice}</s>`;

  document.querySelectorAll("#addToCartBtn, [data-atc]").forEach(btn => {
    btn.href = CONFIG.addToCartUrl;
  });

  const codeEl = document.getElementById("promoCodeValue");
  if (codeEl) codeEl.textContent = CONFIG.promoCode;
})();

/* ---------- Menu mobile ---------- */
(function mobileMenu() {
  const btn = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => nav.classList.toggle("is-open"));
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => nav.classList.remove("is-open"))
  );
})();

/* ---------- Galerie produit ---------- */
(function productGallery() {
  const main = document.getElementById("mainProductImg");
  const thumbs = document.querySelectorAll("#productThumbs img");
  if (!main) return;
  thumbs.forEach(t => {
    t.addEventListener("click", () => {
      main.src = t.src.replace("width=416", "width=1445");
      thumbs.forEach(x => x.classList.remove("is-active"));
      t.classList.add("is-active");
    });
  });
})();

/* ---------- Carrousel avant/après (desktop) ---------- */
(function carousel() {
  const root = document.getElementById("baCarousel");
  if (!root) return;
  const track = root.querySelector(".carousel__track");
  const cards = track.children;
  let index = 0;

  function visible() { return window.innerWidth > 1024 ? 3 : 2; }
  function maxIndex() { return Math.max(0, cards.length - visible()); }
  function update() {
    if (window.innerWidth <= 768) { track.style.transform = ""; return; }
    const card = cards[0];
    const step = card.getBoundingClientRect().width + 20; // gap
    track.style.transform = `translateX(-${index * step}px)`;
  }

  root.querySelector("[data-carousel-prev]").addEventListener("click", () => {
    index = Math.max(0, index - 1); update();
  });
  root.querySelector("[data-carousel-next]").addEventListener("click", () => {
    index = Math.min(maxIndex(), index + 1); update();
  });
  window.addEventListener("resize", () => { index = Math.min(index, maxIndex()); update(); });
})();

/* ---------- Vidéos HLS (UGC) : lazy load + lecture au scroll ---------- */
(function hlsVideos() {
  const videos = document.querySelectorAll(".hls-video");
  if (!videos.length) return;

  function attach(video) {
    const src = video.dataset.src;
    if (!src || video.dataset.loaded) return;
    video.dataset.loaded = "1";
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src; // Safari lit le HLS nativement
    } else if (window.Hls && Hls.isSupported()) {
      const hls = new Hls({ maxBufferLength: 10 });
      hls.loadSource(src);
      hls.attachMedia(video);
    }
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) { attach(v); v.play().catch(() => {}); }
      else { v.pause(); }
    });
  }, { rootMargin: "200px" });

  videos.forEach(v => io.observe(v));
})();

/* ---------- Barre ATC sticky mobile ---------- */
(function stickyAtc() {
  const bar = document.getElementById("stickyAtc");
  const product = document.getElementById("fiche-produit");
  if (!bar || !product) return;
  window.addEventListener("scroll", () => {
    const passed = window.scrollY > product.offsetTop + 300;
    bar.classList.toggle("is-visible", passed && window.innerWidth <= 768);
  }, { passive: true });
})();

/* ---------- Formulaire de contact ---------- */
(function contactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    if (CONFIG.formEndpoint) {
      // Envoi via Formspree (ou tout endpoint compatible)
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(data),
        });
        status.textContent = res.ok
          ? "✅ Message envoyé ! Nous vous répondons sous 24h."
          : "❌ Une erreur est survenue, réessayez ou écrivez-nous par e-mail.";
        if (res.ok) form.reset();
      } catch {
        status.textContent = "❌ Une erreur est survenue, réessayez ou écrivez-nous par e-mail.";
      }
    } else {
      // Fallback : ouvre le client mail
      const body = encodeURIComponent(
        `Nom : ${data.nom}\nE-mail : ${data.email}\nTéléphone : ${data.telephone || "-"}\n\n${data.commentaire}`
      );
      window.location.href = `mailto:${CONFIG.contactEmail}?subject=Contact%20Mielle&body=${body}`;
      status.textContent = "Votre application e-mail va s'ouvrir…";
    }
  });
})();

/* ---------- Newsletter → affiche le code promo ---------- */
(function newsletter() {
  const form = document.getElementById("newsletterForm");
  const codeBox = document.getElementById("newsletterCode");
  const copyBtn = document.getElementById("copyCodeBtn");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // 💡 Pour collecter réellement les e-mails, branche ici Klaviyo,
    // Mailchimp ou l'endpoint newsletter de ton Shopify.
    form.hidden = true;
    codeBox.hidden = false;
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(CONFIG.promoCode).then(() => {
        copyBtn.textContent = "Copié ✔";
        setTimeout(() => (copyBtn.textContent = "Copier"), 2000);
      });
    });
  }
})();
