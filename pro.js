
// input the cards
  const skillCards = document.querySelectorAll(".skillscard");

  const cardobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index *400 );
      }
    });
  }, {
    threshold: 0.1
  });

  skillCards.forEach(card => {
    cardobserver.observe(card);
  });


// about me 
  const lines = document.querySelectorAll(".aboutTaxt div");

  const taxtobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 500); // التأخير بين السطور
      }
    });
  }, {
    threshold: 0.2
  });

  lines.forEach(line => {
    taxtobserver.observe(line);
  });



  // Filtering functionality//PAGE PROJECT
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    cards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});



// conttent input the card to content

  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));





// input the all logo

  const skillIcons = document.querySelectorAll('.skill-icons');
  const iconObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200);
      }
    });
  }, { threshold: 0.1 });
  
  skillIcons.forEach(icons => {
    iconObserver.observe(icons);
  });

