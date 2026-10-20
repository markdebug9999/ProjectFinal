
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Filter activities
const filterButtons = document.querySelectorAll(".filter");
const activityCards = document.querySelectorAll(".activity-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach(item => {
      item.classList.toggle("active", item === button);
    });

    activityCards.forEach(card => {
      card.style.display =
        selected === "all" || card.dataset.period === selected
          ? ""
          : "none";
    });
  });
});

// Activity popup
const modal = document.getElementById("activityModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".view-btn").forEach(button => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalDescription.textContent = button.dataset.description;
    modalImage.src = button.dataset.image;
    modalImage.alt = button.dataset.title;
    modal.classList.add("show");
  });
});

function hideModal() {
  modal.classList.remove("show");
  modalImage.src = "";
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    hideModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    hideModal();
  }
});
