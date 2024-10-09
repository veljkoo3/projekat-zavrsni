function showSection(section) {
    const sections = ['welcome', 'repertoar', 'o-nama', 'recenzije', 'kontakt'];
    sections.forEach(s => {
        document.getElementById(s).classList.toggle('hidden', s !== section);
    });
    document.querySelector('footer').style.display = (section === 'welcome') ? 'none' : 'block';
}

function reserveTicket() {
    alert('Uspešno ste rezervisali kartu!');
}

function submitReview() {
    alert('Vaša recenzija je poslata!');
}

function sendMessage() {
    alert('Vaša poruka je poslata!');
}

showSection('welcome');
