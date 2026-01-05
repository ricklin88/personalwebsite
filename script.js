const loadPartials = (className, file) => {
    const target = document.querySelectorAll(className);
    if (!target) return;
    
    fetch(file)
        .then(res => res.text())
        .then(data => {
            target.forEach(el => {
                el.innerHTML = data;
            });
        })
}

loadPartials('.herocard-container', 'partials/aside.html');