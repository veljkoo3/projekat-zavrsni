document.getElementById('repertoar-button').addEventListener('click', function() {
    toggleSections('repertoar');
});

document.getElementById('recenzije-button').addEventListener('click', function() {
    toggleSections('recenzije');
});

document.getElementById('logout-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    alert('Odjavljeni ste sa stranice');
});

function toggleSections(section) {
    const sections = ['repertoar', 'recenzije', 'welcome'];
    sections.forEach(s => {
        const element = document.getElementById(s);
        if (s === section) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });
}
