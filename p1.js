        // ── Scroll behaviors ──────────────────────────
    const header = document.getElementById('site-header');
    const btt = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            const s = window.scrollY;
            header.classList.toggle('scrolled', s > 10);
            btt.classList.toggle('show', s > 400);
        }, {passive: true });

    // ── Hamburger ─────────────────────────────────
    const hamburger = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
        hamburger.addEventListener('click', () => {
            const open = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    mobileNav.setAttribute('aria-hidden', !open);
        });
        mobileNav.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            mobileNav.setAttribute('aria-hidden', true);
        });
        });

    // ── Counter animation ─────────────────────────
    function animateCounter(el, target, suffix = '', duration = 1800) {
        let start = 0;
    const step = target / (duration / 16);
            const timer = setInterval(() => {
        start = Math.min(start + step, target);
    el.textContent = Math.floor(start).toLocaleString() + suffix;
                if (start >= target) clearInterval(timer);
            }, 16);
        }
        const statsObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounter(document.getElementById('stat1'), 4200, '+');
                animateCounter(document.getElementById('stat2'), 40);
                animateCounter(document.getElementById('stat3'), 98, '%');
                animateCounter(document.getElementById('stat4'), 320, '+');
                statsObs.disconnect();
            }
        });
        }, {threshold: 0.3 });
    statsObs.observe(document.getElementById('hero'));

    // ── Hero Carousel ─────────────────────────────
    (function () {
            const slides = document.getElementById('carousel-slides');
    const dotsWrap = document.getElementById('carousel-dots');
    const total = slides.children.length;
    let cur = 0, timer;

    // Build dots
    for (let i = 0; i < total; i++) {
                const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Go to slide ${i + 1}`);
    d.setAttribute('role', 'tab');
                d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
            }

    function goTo(idx) {
        cur = (idx + total) % total;
    slides.style.transform = `translateX(-${cur * 100}%)`;
                dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
    clearInterval(timer);
                timer = setInterval(() => goTo(cur + 1), 4500);
            }

            document.getElementById('carousel-prev').addEventListener('click', () => goTo(cur - 1));
            document.getElementById('carousel-next').addEventListener('click', () => goTo(cur + 1));
            timer = setInterval(() => goTo(cur + 1), 4500);
        })();

    // ── Testimonial Slider ─────────────────────────
    (function () {
        const track = document.getElementById('testi-track');
    const dotsWrap = document.getElementById('testi-dots');
    const slides = track.children;
    const total = slides.length;
    let cur = 0, timer;

    for (let i = 0; i < total; i++) {
                const d = document.createElement('button');
    d.className = 'slider-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Go to testimonial group ${i + 1}`);
    d.setAttribute('role', 'tab');
                d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
            }

    function goTo(idx) {
        cur = (idx + total) % total;
    track.style.transform = `translateX(-${cur * 100}%)`;
                dotsWrap.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
    clearInterval(timer);
                timer = setInterval(() => goTo(cur + 1), 6000);
            }

            document.getElementById('testi-prev').addEventListener('click', () => goTo(cur - 1));
            document.getElementById('testi-next').addEventListener('click', () => goTo(cur + 1));
            timer = setInterval(() => goTo(cur + 1), 6000);
        })();

    // ── Wing tabs ─────────────────────────────────
    function switchWing(btn, panelId) {
        document.querySelectorAll('.wing-tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
            document.querySelectorAll('.wing-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById(panelId).classList.add('active');
        }

    // ── Notice filter ─────────────────────────────
    function filterNotices(btn, type) {
        document.querySelectorAll('.notice-filter').forEach(b => {
            b.classList.remove('tag--navy');
            b.style.background = 'var(--cream)';
            b.style.color = 'var(--slate)';
            b.style.border = '1px solid var(--border)';
        });
    btn.classList.add('tag--navy');
    btn.style.background = '';
    btn.style.color = '';
    btn.style.border = '';
            document.querySelectorAll('.notice-item').forEach(n => {
        n.style.display = (type === 'all' || n.dataset.type === type) ? 'flex' : 'none';
            });
        }

    // ── Modal ─────────────────────────────────────
    function openModal() {
            const m = document.getElementById('admission-modal');
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
    m.querySelector('input, select').focus();
        }
    function closeModal() {
        document.getElementById('admission-modal').classList.remove('open');
    document.body.style.overflow = '';
        }
    function closeModalOnBackdrop(e) {
            if (e.target === document.getElementById('admission-modal')) closeModal();
        }
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // ── Form handlers ─────────────────────────────
    function handleContactForm(btn) {
            const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    if (!name || !email) {
        btn.textContent = '⚠️ Please fill required fields';
                setTimeout(() => btn.textContent = 'Send Message →', 2000);
    return;
            }
    btn.textContent = 'Sending…';
    btn.disabled = true;
            setTimeout(() => {
        document.getElementById('contact-success').classList.add('show');
    btn.textContent = '✓ Message Sent!';
            }, 1200);
        }

    function handleModalSubmit(btn) {
            const name = document.getElementById('m-cname').value.trim();
    const cls = document.getElementById('m-class').value;
    if (!name || !cls) {
        btn.textContent = '⚠️ Please fill required fields';
                setTimeout(() => btn.textContent = 'Submit Inquiry →', 2000);
    return;
            }
    btn.textContent = 'Submitting…';
    btn.disabled = true;
            setTimeout(() => {
        document.getElementById('modal-success').classList.add('show');
    btn.textContent = '✓ Submitted!';
            }, 1000);
        }

    function handleNewsletterSub(btn) {
        btn.textContent = '✓ Subscribed!';
    btn.style.background = 'var(--success)';
    btn.disabled = true;
        }

    // ── Active nav on scroll ───────────────────────
    const sections = document.querySelectorAll('section[id], div[id="trust-bar"]');
    const navLinks = document.querySelectorAll('#main-nav .nav-link');
        const scrollSpy = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`#main-nav [href="#${e.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
        }, {rootMargin: '-40% 0px -55% 0px' });
        sections.forEach(s => scrollSpy.observe(s));
