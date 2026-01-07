const loadPartials = (selector, file) => {
  const targets = document.querySelectorAll(selector);
  if (targets.length === 0) return;

  fetch(file)
    .then(res => res.text())
    .then(html => {
      targets.forEach(el => {
        el.insertAdjacentHTML('beforeend', html);
      });
    })
    .catch(err => console.error(err));
};

loadPartials('.herocard-container', 'partials/aside.html');