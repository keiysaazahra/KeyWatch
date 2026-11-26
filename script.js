
function filterMovies(genre, btn) {
    document.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    document.querySelectorAll('.movie-card').forEach(function (card) {
        if (genre === 'all' || card.getAttribute('data-genre') === genre) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Tombol Ingatkan Saya
function toggleNotify(btn) {
    btn.classList.toggle('notified');
    btn.textContent = btn.classList.contains('notified')
        ? '\u2713 Pengingat Aktif'
        : '+ Ingatkan Saya';
}

// Buka pop-up sinopsis (data diambil dari atribut data-* tombol)
function openModal(btn) {
    document.getElementById('modalTitle').textContent = btn.dataset.title;
    document.getElementById('modalDate').textContent = 'Tayang: ' + btn.dataset.date;
    document.getElementById('modalMeta').textContent = btn.dataset.meta;
    document.getElementById('modalDesc').textContent = btn.dataset.desc;
    document.getElementById('synopsisModal').classList.add('show');
}

function closeModalBtn() {
    document.getElementById('synopsisModal').classList.remove('show');
}

function closeModal(e) {
    if (e.target.id === 'synopsisModal') {
        closeModalBtn();
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModalBtn();
    }
});
