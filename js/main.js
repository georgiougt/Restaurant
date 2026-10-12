document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Menu Tabs filtering
    const tabs = document.querySelectorAll('.menu-tab-btn');
    const dishes = document.querySelectorAll('.dish-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;
            dishes.forEach(dish => {
                if (filter === 'all' || dish.dataset.category === filter) {
                    dish.style.display = 'flex';
                } else {
                    dish.style.display = 'none';
                }
            });
        });
    });

    // 3. Reservation Form Interaction
    const resForm = document.getElementById('reservation-form');
    const confirmAlert = document.getElementById('reservation-confirmation');

    if (resForm && confirmAlert) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const date = document.getElementById('res-date').value || 'Selected Date';
            const time = document.getElementById('res-time').value || '20:00';
            const guests = document.getElementById('res-guests').value || '2 Guests';
            const name = document.getElementById('res-name').value || 'Guest';

            confirmAlert.innerHTML = `
                <div style="background: rgba(203, 178, 121, 0.15); border: 1px solid var(--color-gold); padding: 1.5rem; border-radius: 1rem; text-align: center; margin-top: 1.5rem;">
                    <div style="color: var(--color-gold); font-family: var(--font-serif-display); font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">
                        ✦ RESERVATION REQUEST RECEIVED ✦
                    </div>
                    <p style="color: #F5F2EB; font-size: 0.9rem; line-height: 1.6;">
                        Thank you, <strong>${name}</strong>. Your table for <strong>${guests}</strong> on <strong>${date} at ${time}</strong> has been logged.
                        Our Maître d'Hôtel will contact you shortly via SMS / Email to confirm seating preferences.
                    </p>
                </div>
            `;
            confirmAlert.style.display = 'block';
            resForm.querySelector('button[type="submit"]').disabled = true;
            resForm.querySelector('button[type="submit"]').style.opacity = '0.5';
        });
    }
});
