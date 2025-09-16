import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section contact-section" id="contact">
      <div class="main-container">
        <h2 class="section-title zoom-out-effect">Contacto</h2>
        <div class="contact-grid zoom-out-effect">
          <a [href]="'mailto:' + contactInfo.email" class="contact-item">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>{{ contactInfo.email }}</p>
          </a>
          <a [href]="'tel:' + contactInfo.phone" class="contact-item">
            <i class="fas fa-phone"></i>
            <h3>Teléfono</h3>
            <p>{{ contactInfo.phone }}</p>
          </a>
          <a [href]="'https://' + contactInfo.linkedin" target="_blank" rel="noopener" class="contact-item">
            <i class="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>{{ contactInfo.linkedin }}</p>
          </a>
          <a [href]="'https://' + contactInfo.github" target="_blank" rel="noopener" class="contact-item">
            <i class="fab fa-github"></i>
            <h3>GitHub</h3>
            <p>{{ contactInfo.github }}</p>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .section {
      padding: 5rem 0;
    }

    .main-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .section-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 3rem;
      text-align: center;
    }

    .contact-section {
      background-color: var(--background-color);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      text-align: center;
    }

    .contact-item {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      text-decoration: none;
      color: inherit;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    .contact-item:hover {
      transform: translateY(-5px);
    }

    .contact-item i {
      font-size: 1.5rem;
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
    }

    .contact-item h3 {
      margin-bottom: 0.3rem;
      font-size: 1rem;
    }

    .contact-item p {
      font-size: 0.8rem;
      word-break: break-all;
    }

    /* Efectos de zoom-out con scroll */
    .zoom-out-effect {
      opacity: 1;
      transform: scale(1) translateY(0px);
      transition: opacity 0.8s ease, transform 0.8s ease;
      animation: initialSectionAppear 0.8s ease-out 0.3s both;
    }

    .zoom-out-effect.zoom-out {
      opacity: 1;
      transform: scale(1) translateY(0);
    }

    /* Animación inicial para las secciones */
    @keyframes initialSectionAppear {
      0% {
        opacity: 0;
        transform: scale(1.15) translateY(20px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0px);
      }
    }

    @media (max-width: 1024px) {
      .contact-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }

    @media (max-width: 768px) {
      .main-container {
        padding: 1rem;
      }

      .section-title {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .contact-item {
        padding: 1.5rem;
      }

      .contact-item i {
        font-size: 1.5rem;
      }

      .contact-item h3 {
        font-size: 1rem;
      }

      .contact-item p {
        font-size: 0.8rem;
      }
    }

    @media (max-width: 480px) {
      .main-container {
        padding: 0.5rem;
      }

      .contact-item {
        padding: 1rem;
      }
    }
  `]
})
export class ContactComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    this.initZoomOutEffect();
  }

  private async initZoomOutEffect() {
    try {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      if (!gsap || !ScrollTrigger) {
        console.warn('GSAP no está disponible para contact');
        return;
      }

      // Efecto zoom-out para el título de la sección (siempre visible)
      gsap.to("#contact .section-title", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "top center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.15 - (progress * 0.15); // De 1.15 a 1.0
            const opacity = 1; // Siempre visible
            const y = 20 - (progress * 20); // De 20px a 0px
            
            gsap.set("#contact .section-title", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

      // Efecto zoom-out para el grid de contacto (con transparencia)
      gsap.to("#contact .contact-grid", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "top center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.1 - (progress * 0.1); // De 1.1 a 1.0
            const opacity = progress; // Transparencia controlada por scroll
            const y = 20 - (progress * 20);
            
            gsap.set("#contact .contact-grid", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

    } catch (error) {
      console.error('Error inicializando efecto de zoom-out en contact:', error);
    }
  }

  contactInfo = {
    email: 'jarzdev@gmail.com',
    phone: '+56954927928',
    linkedin: 'linkedin.com/in/jose-alberto-ramirez-zambrano-7524411aa/',
    github: 'github.com/jarzdev'
  };
} 