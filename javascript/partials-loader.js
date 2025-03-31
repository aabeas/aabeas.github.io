document.addEventListener("DOMContentLoaded", () => {
  const loadPartial = (selector, file) => {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(() => {
        // Handle errors silently
        const element = document.querySelector(selector);
        if (element) {
          element.innerHTML = `<p style="color: red;">Failed to load content. Please try again later.</p>`;
        }
      });
  };

  // Load the header and footer
  loadPartial("#header", "/partials/header.html");
  loadPartial("#carousel", "/partials/carousel.html");
  loadPartial("#footer", "/partials/footer.html");
});
