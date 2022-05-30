const nav = document.querySelector('#ul');
fetch('nav.html')
    .then(response => response.text())
    .then(data => { nav.innerHTML = data });