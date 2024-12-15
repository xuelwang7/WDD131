// picture
export class ImageSlider {
    constructor(container) {
        this.container = container;
        this.currentSlide = 0;
    }

    updateSlider(images) {
        const slides = images.map(src => `
            <div class="slide">
                <img src="${src}" alt="Project image" class="w-full h-64 object-cover">
            </div>
        `).join('');
        
        this.container.innerHTML = slides;
        this.updateSlidePosition();
    }

    updateSlidePosition() {
        this.container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }

    nextSlide(totalSlides) {
        if (this.currentSlide < totalSlides - 1) {
            this.currentSlide++;
            this.updateSlidePosition();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlidePosition();
        }
    }

    reset() {
        this.currentSlide = 0;
        this.updateSlidePosition();
    }
}