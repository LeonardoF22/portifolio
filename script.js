document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        toggle.checked = true; 
        applyDarkTheme();
    } else {
        applyLightTheme();
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark'); 
        } else {
            applyLightTheme();
            localStorage.setItem('theme', 'light'); 
        }
    });

    function applyDarkTheme() {
        html.classList.add('dark');
    }

    function applyLightTheme() {
        html.classList.remove('dark');
    }
});
