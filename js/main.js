/* ============================================
   JORGE SALAZAR — PORTFOLIO JS
   Interactivity, animations, GitHub API
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== TYPEWRITER EFFECT =====
    const typewriter = document.getElementById('typewriter');
    const phrases = [
        'Ingeniero de Sistemas',
        'AI Enthusiast',
        'Full Stack Developer',
        'Problem Solver',
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function type() {
        const current = phrases[phraseIndex];

        if (isDeleting) {
            typewriter.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typewriter.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === current.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400; // Pause before next word
        }

        setTimeout(type, typeSpeed);
    }
    type();


    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    function handleScroll() {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();


    // ===== MOBILE NAV TOGGLE =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'light') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });


    // ===== REVEAL ON SCROLL =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // ===== SKILL BARS ANIMATION =====
    const skillFills = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });

    skillFills.forEach(fill => skillObserver.observe(fill));


    // ===== HERO PARTICLES =====
    const particlesContainer = document.getElementById('particles');

    function createParticles() {
        const count = window.innerWidth < 768 ? 15 : 30;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';

            particlesContainer.appendChild(particle);
        }
    }
    createParticles();


    // ===== LOAD GITHUB PROJECTS =====
    const projectsGrid = document.getElementById('projects-grid');
    const GITHUB_USER = 'jorgesalazara';

    async function loadGitHubProjects() {
        try {
            const response = await fetch(
                `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6&type=owner`
            );

            if (!response.ok) throw new Error('GitHub API error');

            const repos = await response.json();

            // Filter out the portfolio repo itself and forks
            const filteredRepos = repos.filter(repo => !repo.fork);

            if (filteredRepos.length === 0) {
                projectsGrid.innerHTML = `
                    <div class="projects-loader">
                        <i class="fab fa-github" style="font-size: 2rem; color: var(--text-muted);"></i>
                        <p>Los proyectos aparecerán aquí cuando se publiquen repositorios.</p>
                    </div>
                `;
                return;
            }

            // Language color map
            const langColors = {
                'JavaScript': '#f1e05a',
                'TypeScript': '#3178c6',
                'Python': '#3572A5',
                'HTML': '#e34c26',
                'CSS': '#563d7c',
                'Java': '#b07219',
                'C#': '#178600',
                'C++': '#f34b7d',
                'PHP': '#4F5D95',
                'Ruby': '#701516',
                'Go': '#00ADD8',
                'Rust': '#dea584',
                'Shell': '#89e051',
                'Jupyter Notebook': '#DA5B0B',
            };

            projectsGrid.innerHTML = filteredRepos.map(repo => `
                <div class="project-card reveal">
                    <div class="project-card-header">
                        <i class="fas fa-folder-open project-folder"></i>
                        <div class="project-links">
                            <a href="${repo.html_url}" target="_blank" rel="noopener" aria-label="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            ${repo.homepage ? `
                                <a href="${repo.homepage}" target="_blank" rel="noopener" aria-label="Demo">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Sin descripción disponible.'}</p>
                    <div class="project-footer">
                        <div class="project-techs">
                            ${repo.language ? `
                                <span class="project-tech">
                                    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${langColors[repo.language] || '#8b8b8b'};margin-right:4px;"></span>
                                    ${repo.language}
                                </span>
                            ` : ''}
                        </div>
                        ${repo.stargazers_count > 0 ? `
                            <span class="project-stars">
                                <i class="fas fa-star"></i> ${repo.stargazers_count}
                            </span>
                        ` : ''}
                    </div>
                </div>
            `).join('');

            // Re-observe new reveal elements
            document.querySelectorAll('.project-card.reveal').forEach(el => {
                revealObserver.observe(el);
            });

        } catch (error) {
            console.error('Error loading GitHub projects:', error);
            projectsGrid.innerHTML = `
                <div class="projects-loader">
                    <i class="fas fa-exclamation-circle" style="font-size: 2rem; color: var(--accent);"></i>
                    <p>No se pudieron cargar los proyectos. <a href="https://github.com/${GITHUB_USER}" target="_blank" style="color: var(--accent-light);">Ver en GitHub →</a></p>
                </div>
            `;
        }
    }

    loadGitHubProjects();


    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
