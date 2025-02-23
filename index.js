const initEnterView = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("entered");
          entry.target.classList.remove("enter-view");

          entry.target.querySelectorAll(".animate__animated").forEach((el) => {
            el.classList.remove("opacity-0");
            el.classList.add(el.dataset.animateClass);
          });
        } else {
          entry.target.classList.remove("entered");
          entry.target.classList.add("enter-view");
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -100px 0px" }
  );

  document.querySelectorAll(".enter-view").forEach((el) => {
    observer.observe(el);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const welcomeModal = new bootstrap.Modal(
    document.getElementById("welcomeModal")
  );
  welcomeModal.show();
});

document.addEventListener("DOMContentLoaded", initEnterView);

console.log("This website was built by Wajdy Elsobky.");
console.log("Contact info: welso040@uottawa.ca");
