// Simple search bar animation and focus effect
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 0 3px #10b98144';
    });
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = '0 2px 8px rgba(30,58,138,0.05)';
    });
} 