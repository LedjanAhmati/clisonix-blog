// JavaScript footer injector
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var footer = document.createElement('footer');
        footer.innerHTML = '<p>&copy; 2026 ABA GmbH - All Rights Reserved</p>';
        document.body.appendChild(footer);
    });
})();
