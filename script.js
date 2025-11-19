// --- Event data ---
const events = [
  {
    id: "reformer-reset",
    title: "Reformer Reset: After-Work Pilates",
    category: "fitness",
    description: "A gentle-but-spicy reformer class to undo a day at your desk and reconnect with your body.",
    date: "Thursdays · 7:00 PM",
    location: "Shoreditch, London",
    price: 32,
    tags: ["evening", "indoor", "movement"],
    spots: "Small group · 10 spots"
  },
  {
    id: "spin-sunday",
    title: "Spin & Brunch Club",
    category: "fitness",
    description: "High-energy spin followed by coffee and slow conversation. Come solo, leave with new favourites.",
    date: "Sundays · 10:00 AM",
    location: "Central London",
    price: 28,
    tags: ["weekend", "movement", "indoor"],
    spots: "Community vibe · 14 bikes"
  },
  {
    id: "cinema-soft",
    title: "Soft Cinema Club",
    category: "fitness",
    description: "Monthly cinema night for cosy films, snacks and decompression without small talk pressure.",
    date: "One Friday / month · 7:30 PM",
    location: "Soho, London",
    price: 18,
    tags: ["evening", "indoor", "connection"],
    spots: "Limited seats · 20"
  },
  {
    id: "padel-play",
    title: "Padel & Prosecco",
    category: "fitness",
    description: "Low-pressure padel session for beginners + drinks after. No ‘sporty girl’ persona required.",
    date: "Saturdays · 11:00 AM",
    location: "Battersea, London",
    price: 30,
    tags: ["weekend", "movement", "outdoor"],
    spots: "Beginner-friendly · 8 players"
  },
  {
    id: "book-club",
    title: "R&R Book Club",
    category: "fitness",
    description: "A book club for women who are tired of pretending they finished the reading. Come as you are.",
    date: "One Wednesday / month · 7:00 PM",
    location: "Notting Hill, London",
    price: 14,
    tags: ["evening", "indoor", "connection"],
    spots: "Cosy setting · 15 spots"
  },
  {
    id: "her-circle-dinner",
    title: "Her Circle: Monthly Community Dinner",
    category: "fitness",
    description: "A slow, candle-lit dinner where work talk is optional and soft life chats are encouraged.",
    date: "Last Thursday / month · 7:30 PM",
    location: "Marylebone, London",
    price: 42,
    tags: ["evening", "indoor", "connection"],
    spots: "Intimate · 12 seats"
  },
  {
    id: "soft-life-socials",
    title: "Soft Life Socials: Rooftop Sunsets",
    category: "fitness",
    description: "Wine bar evenings, rooftop sunsets, and candle-lit catch-ups for modern soft life girlies.",
    date: "Selected Fridays · 6:30 PM",
    location: "Various rooftops, London",
    price: 35,
    tags: ["evening", "outdoor", "connection"],
    spots: "Rotating venues · limited"
  },
  {
    id: "paint-sip",
    title: "Paint & Sip Evenings",
    category: "fitness",
    description: "Guided painting, good music, and wine. No art skills required, just vibes.",
    date: "Two Saturdays / month · 6:00 PM",
    location: "East London Studio",
    price: 38,
    tags: ["weekend", "indoor", "creative"],
    spots: "All materials included"
  },
  {
    id: "candle-making",
    title: "Candle-Making & Intention Setting",
    category: "fitness",
    description: "Pour your own candles while setting gentle intentions for your next season.",
    date: "Sundays · 3:00 PM",
    location: "Hackney, London",
    price: 45,
    tags: ["weekend", "indoor", "creative"],
    spots: "Take home 2 candles"
  },
  {
    id: "dance-class",
    title: "Feel-Good Dance Class",
    category: "fitness",
    description: "Zero-trick choreo, maximum serotonin. Beginner-friendly and phone-free.",
    date: "Tuesdays · 7:00 PM",
    location: "Camden, London",
    price: 20,
    tags: ["evening", "movement", "indoor"],
    spots: "Beginner-friendly"
  },
  {
    id: "nature-walk",
    title: "Soft Sunday Nature Walk",
    category: "fitness",
    description: "Gentle walk, warm drinks, and real chats away from screens.",
    date: "Sundays · 9:30 AM",
    location: "Richmond Park",
    price: 12,
    tags: ["weekend", "outdoor", "connection"],
    spots: "Dogs welcome"
  },
  {
    id: "park-picnic",
    title: "Picnic in the Park",
    category: "fitness",
    description: "Curated picnic sets for summer: blankets, bites, and new friends included.",
    date: "Summer Saturdays · 1:00 PM",
    location: "Various London parks",
    price: 25,
    tags: ["weekend", "outdoor", "summer"],
    spots: "Seasonal · weather-friendly"
  },

  // Growth & lifestyle
  {
    id: "financial-wellness",
    title: "Financial Wellness: Money Reset Night",
    category: "growth",
    description: "Budgeting, saving, and investing for women who want soft lives and strong safety nets.",
    date: "Monthly · Wednesday · 7:00 PM",
    location: "Online",
    price: 22,
    tags: ["evening", "indoor", "growth"],
    spots: "Hosted by female finance experts"
  },
  {
    id: "career-reset",
    title: "Career Reset Evenings",
    category: "growth",
    description: "CV reviews, LinkedIn clinics, and live coaching for women planning their next move.",
    date: "Twice / month · 7:00 PM",
    location: "Hybrid · Online & Central London",
    price: 30,
    tags: ["evening", "growth", "career"],
    spots: "Bring your laptop"
  },
  {
    id: "entrepreneurship-night",
    title: "Entrepreneurship Night: Female Founders Panel",
    category: "growth",
    description: "Female founders share the real behind-the-scenes over wine and Q&A.",
    date: "Monthly · Thursday · 7:00 PM",
    location: "Shoreditch, London",
    price: 34,
    tags: ["evening", "growth", "indoor"],
    spots: "Panel + mingling"
  },
  {
    id: "vision-board-brunch",
    title: "Vision Board Brunch",
    category: "growth",
    description: "Intentional planning with magazines, mood boards, and gentle coaching prompts.",
    date: "Saturdays · 11:00 AM",
    location: "Central London",
    price: 40,
    tags: ["weekend", "indoor", "creative"],
    spots: "Materials & brunch included"
  },
  {
    id: "cooking-class",
    title: "Soft Kitchen: Cooking Class & Wine",
    category: "fitness",
    description: "Hands-on cooking night with easy recipes you can repeat on busy weeks.",
    date: "Fridays · 7:00 PM",
    location: "Clapham, London",
    price: 45,
    tags: ["evening", "indoor", "creative"],
    spots: "Recipe cards to take home"
  }
];

// --- DOM references ---
const eventListEl = document.getElementById("event-list");
const categoryChips = document.querySelectorAll("[data-category]");
const tagChips = document.querySelectorAll("[data-tag]");
const searchInput = document.getElementById("search-input");

const heroBrowseBtn = document.getElementById("hero-browse");
const navCtaBtn = document.getElementById("nav-cta");
const yearSpan = document.getElementById("year");

const mainNav = document.getElementById("main-nav");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

// Modal elements
const bookingModal = document.getElementById("booking-modal");
const bookingCloseBtn = document.getElementById("booking-close");
const bookingForm = document.getElementById("booking-form");
const paymentForm = document.getElementById("payment-form");
const modalStepsContainer = document.querySelector(".modal-steps");
const confirmationCloseBtn = document.getElementById("close-confirmation");
const modalEventNameEl = document.getElementById("modal-event-name");
const modalEventNamePaymentEl = document.getElementById("modal-event-name-payment");
const modalPriceEl = document.getElementById("modal-price");

// Contact & newsletter
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const newsletterForm = document.getElementById("newsletter-form");
const newsletterStatus = document.getElementById("newsletter-status");

// Membership waitlist
const membershipJoinBtn = document.getElementById("membership-join");
const heroJoinBtn = document.getElementById("hero-join-waitlist");

// State
let activeCategory = "all";
let activeTag = null;
let searchQuery = "";
let selectedEvent = null;
let bookingDetails = null;

// --- Helpers ---
const scrollToEvents = () => {
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
};

const setYear = () => {
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
};

const formatPrice = (price) => `£${price.toFixed(2)}`;

// Filter logic
const filterEvents = () => {
  return events.filter((evt) => {
    if (activeCategory !== "all" && evt.category !== activeCategory) return false;
    if (activeTag && !evt.tags.includes(activeTag)) return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const haystack = [
        evt.title,
        evt.description,
        evt.date,
        evt.location,
        evt.tags.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    return true;
  });
};

// Render event cards
const renderEvents = () => {
  const filtered = filterEvents();
  eventListEl.innerHTML = "";

  if (!filtered.length) {
    eventListEl.innerHTML =
      '<p class="event-empty">No events match that filter just yet — try removing a filter or searching something else.</p>';
    return;
  }

  filtered.forEach((evt) => {
    const card = document.createElement("article");
    card.className = "event-card";

    card.innerHTML = `
      <div class="event-chip-row">
        <span class="event-category">${
          evt.category === "fitness" ? "Fitness & Connection" : "Growth & Lifestyle"
        }</span>
      </div>
      <div>
        <div class="event-title">${evt.title}</div>
        <p class="event-desc">${evt.description}</p>
      </div>
      <div class="event-meta">
        <span>🕰 ${evt.date}</span>
        <span>📍 ${evt.location}</span>
        <span class="event-price">${formatPrice(evt.price)}</span>
      </div>
      <div class="event-actions">
        <p class="event-spots">${evt.spots}</p>
        <button class="btn btn-small" data-book-id="${evt.id}">Book</button>
      </div>
    `;

    eventListEl.appendChild(card);
  });
};

// Modal steps
const setModalStep = (stepIndex) => {
  const steps = modalStepsContainer.querySelectorAll(".modal-step");
  steps.forEach((step) => {
    const index = parseInt(step.getAttribute("data-step-index"), 10);
    step.classList.toggle("modal-step-active", index === stepIndex);
  });
  modalStepsContainer.setAttribute("data-step", String(stepIndex));
};

const openModalForEvent = (eventId) => {
  selectedEvent = events.find((e) => e.id === eventId);
  if (!selectedEvent) return;

  modalEventNameEl.textContent = selectedEvent.title;
  modalEventNamePaymentEl.textContent = selectedEvent.title;
  modalPriceEl.textContent = `Total from ${formatPrice(selectedEvent.price)} per person`;

  // Reset forms & step
  bookingForm.reset();
  paymentForm.reset();
  bookingDetails = null;
  setModalStep(1);

  bookingModal.classList.remove("hidden");
};

const closeModal = () => {
  bookingModal.classList.add("hidden");
  selectedEvent = null;
  bookingDetails = null;
};

// --- Event listeners ---
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  mobileMenuToggle?.addEventListener("click", () => {
    mainNav?.classList.toggle("main-nav-open");
    mobileMenuToggle.classList.toggle("menu-open");
  });

  // Close menu when clicking a nav link (mobile)
  mainNav?.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("main-nav-open");
      mobileMenuToggle?.classList.remove("menu-open");
    }
  });
  
  // Render events
  renderEvents();
  setYear();

  // Scroll actions
  heroBrowseBtn?.addEventListener("click", scrollToEvents);
  navCtaBtn?.addEventListener("click", scrollToEvents);

  // Chips: category
  categoryChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      categoryChips.forEach((c) => c.classList.remove("chip-active"));
      chip.classList.add("chip-active");
      activeCategory = chip.getAttribute("data-category");
      renderEvents();
    });
  });

  // Chips: tags (toggle)
  tagChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const tag = chip.getAttribute("data-tag");
      if (activeTag === tag) {
        activeTag = null;
        chip.classList.remove("chip-active");
      } else {
        activeTag = tag;
        tagChips.forEach((c) => c.classList.remove("chip-active"));
        chip.classList.add("chip-active");
      }
      renderEvents();
    });
  });

  // Search
  searchInput?.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderEvents();
  });

  // Delegate booking button clicks
  eventListEl.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches("[data-book-id]")) {
      const id = target.getAttribute("data-book-id");
      openModalForEvent(id);
    }
  });

  // Quick book from hero card
  document.querySelectorAll("[data-quick-book]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-quick-book");
      openModalForEvent(id);
    });
  });

  // Close modal
  bookingCloseBtn?.addEventListener("click", closeModal);
  bookingModal?.addEventListener("click", (e) => {
    if (e.target === bookingModal || e.target.classList.contains("modal-backdrop")) {
      closeModal();
    }
  });

  // Booking form submit -> go to payment
  bookingForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    bookingDetails = {
      name: document.getElementById("book-name").value,
      email: document.getElementById("book-email").value,
      guests: document.getElementById("book-guests").value,
      notes: document.getElementById("book-notes").value
    };
    setModalStep(2);
  });

  // Payment form submit -> confirmation (mock)
  paymentForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const confirmationText = document.getElementById("confirmation-message");
    if (selectedEvent && bookingDetails) {
      confirmationText.textContent = `You're in, ${
        bookingDetails.name.split(" ")[0] || "love"
      }. We’ve reserved ${bookingDetails.guests} spot(s) for “${
        selectedEvent.title
      }”. In a real launch, you’d receive a confirmation email with details and receipt.`;
    }
    setModalStep(3);
  });

  confirmationCloseBtn?.addEventListener("click", () => {
    closeModal();
  });

  // Contact form mock
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    contactStatus.textContent = "Thank you for reaching out — we’ll get back to you within a couple of days.";
    contactForm.reset();
  });

  // Newsletter mock
  newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    newsletterStatus.textContent = "Subscribed. Expect R&R updates soon.";
    newsletterForm.reset();
  });

  // Waitlist buttons mock
  const handleWaitlistClick = () =>
    alert("For now this is a demo. In production, this would open a simple waitlist form or email capture.");

  membershipJoinBtn?.addEventListener("click", handleWaitlistClick);
  heroJoinBtn?.addEventListener("click", handleWaitlistClick);
});
