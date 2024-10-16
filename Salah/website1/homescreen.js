
document.querySelectorAll('.options li').forEach(item => {
    item.addEventListener('click', function() {
        if (!item.classList.contains('disabled')) {
            alert('Selected: ' + item.textContent);
        }
    });
});

