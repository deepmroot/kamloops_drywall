document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  const slides = Array.from(document.querySelectorAll('[data-review-slide]'));
  const prevButton = document.getElementById('review-prev');
  const nextButton = document.getElementById('review-next');
  const dots = Array.from(document.querySelectorAll('.review-dot'));

  if (slides.length && prevButton && nextButton && dots.length) {
    let current = 0;
    let reviewInterval;

    const renderReview = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === index);
        slide.classList.toggle('is-hidden', i !== index);
      });

      dots.forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle('bg-primary', active);
        dot.classList.toggle('w-10', active);
        dot.classList.toggle('bg-slate-300', !active);
        dot.classList.toggle('w-3', !active);
      });

      current = index;
    };

    const startReviewAutoplay = () => {
      reviewInterval = setInterval(() => {
        const nextIndex = (current + 1) % slides.length;
        renderReview(nextIndex);
      }, 7000);
    };

    prevButton.addEventListener('click', () => {
      const nextIndex = (current - 1 + slides.length) % slides.length;
      renderReview(nextIndex);
    });

    nextButton.addEventListener('click', () => {
      const nextIndex = (current + 1) % slides.length;
      renderReview(nextIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => renderReview(index));
    });

    renderReview(0);
    startReviewAutoplay();
  }

  const lightboxImages = Array.from(document.querySelectorAll('[data-lightbox-image]'));
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  if (lightboxImages.length && lightboxModal && lightboxImage && lightboxClose && lightboxPrev && lightboxNext) {
    let currentImageIndex = 0;

    const openLightbox = (index) => {
      currentImageIndex = index;
      const image = lightboxImages[currentImageIndex];
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt || 'Expanded project image';
      lightboxModal.classList.remove('hidden');
      lightboxModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightboxModal.classList.add('hidden');
      lightboxModal.classList.remove('flex');
      lightboxImage.src = '';
      document.body.style.overflow = '';
    };

    const showAdjacentImage = (direction) => {
      currentImageIndex = (currentImageIndex + direction + lightboxImages.length) % lightboxImages.length;
      const image = lightboxImages[currentImageIndex];
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt || 'Expanded project image';
    };

    lightboxImages.forEach((image, index) => {
      image.addEventListener('click', () => openLightbox(index));
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => showAdjacentImage(-1));
    lightboxNext.addEventListener('click', () => showAdjacentImage(1));

    lightboxModal.addEventListener('click', (event) => {
      if (event.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (lightboxModal.classList.contains('hidden')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showAdjacentImage(-1);
      if (event.key === 'ArrowRight') showAdjacentImage(1);
    });
  }
});
