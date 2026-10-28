var menuButton = document.querySelector('.nav-menu-button');
var dropdownMenu = document.querySelector('#dropdown-menu');

if (menuButton && dropdownMenu) {
const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    dropdownMenu.hidden = true;
};

menuButton.addEventListener('click', () => {
    var isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    dropdownMenu.hidden = isExpanded;
});

dropdownMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
    closeMenu();
    }
});

document.addEventListener('click', (event) => {
    if (!menuButton.parentElement.contains(event.target)) {
    closeMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
    closeMenu();
    menuButton.focus();
    }
});
}

var cookieLink = document.querySelector('.cookie-link');
var cookiePanel = document.querySelector('#cookie-panel');
var cookieDetails = document.querySelector('.cookie-details');
var cookieAcceptButton = document.querySelector('.cookie-accept');

if (cookieLink && cookiePanel && cookieDetails && cookieAcceptButton) {
    cookieLink.addEventListener('click', (event) => {
        event.preventDefault();
        cookiePanel.hidden = false;
        cookieLink.setAttribute('aria-expanded', 'true');
        cookieDetails.open = false;
        cookieDetails.querySelector('summary').focus();
    });

    cookieAcceptButton.addEventListener('click', () => {
        cookiePanel.hidden = true;
        cookieLink.setAttribute('aria-expanded', 'false');
        cookieLink.focus();
    });

    cookiePanel.addEventListener('click', (event) => {
        if (event.target === cookiePanel) {
            cookiePanel.hidden = true;
            cookieLink.setAttribute('aria-expanded', 'false');
            cookieLink.focus();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !cookiePanel.hidden) {
            cookiePanel.hidden = true;
            cookieLink.setAttribute('aria-expanded', 'false');
            cookieLink.focus();
        }
    });
}
