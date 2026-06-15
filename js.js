document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica del Carrusel ---
    const slides = document.querySelectorAll(".carousel-slide");
    if(slides.length > 0) {
        let currentSlide = 0;

        const nextSlide = () => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        };
        setInterval(nextSlide, 4000);
    }

   let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Solo aplico este comportamiento si es un teléfono
        if (window.innerWidth <= 768) {
            // Si el maestro desliza hacia abajo...
            if (scrollTop > lastScrollTop && scrollTop > 50) {
                navbar.classList.add("nav-hidden"); // Me oculto sumisamente
            } else {
                // Si el maestro desliza hacia arriba...
                navbar.classList.remove("nav-hidden"); // Me muestro de inmediato
            }
        } else {
            navbar.classList.remove("nav-hidden");
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
});