import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BioComponent } from './components/bio/bio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StacksComponent } from './components/stacks/stacks.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BioComponent,
    ContactComponent,
    ToolbarComponent,
    StacksComponent,
    CertificationsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'José Alberto Ramírez Zambrano';
  role = 'Desarrollador de Software & Ingeniero de Sistemas';
  isGSAPLoaded = false;

  ngOnInit() {
    // Importar GSAP dinámicamente
    this.loadGSAP();
    // Mostrar elementos inmediatamente con estado inicial
    this.setInitialVisibility();
  }

  ngAfterViewInit() {
    // Solo aplicar efectos de scroll si GSAP ya está cargado
    // Si no está cargado, loadGSAP se encargará de inicializarlos
    if (this.isGSAPLoaded) {
      setTimeout(() => {
        this.initScrollEffect();
      }, 200);
    }
  }

  private setInitialVisibility() {
    // Establecer visibilidad inicial inmediata solo para elementos del hero
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.hero-fade-in-effect');
      heroElements.forEach(element => {
        (element as HTMLElement).style.opacity = '1';
        (element as HTMLElement).style.transform = 'translateY(0)';
      });
    }, 50);
  }

  private async loadGSAP() {
    try {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      
      // Guardar GSAP en window para acceso global
      (window as any).gsap = gsap;
      (window as any).ScrollTrigger = ScrollTrigger;
      this.isGSAPLoaded = true;
      
      // Inicializar efectos una vez GSAP esté cargado
      setTimeout(() => {
        this.initScrollEffect();
      }, 100);
    } catch (error) {
      console.error('Error cargando GSAP:', error);
      this.isGSAPLoaded = false;
    }
  }

  private async initScrollEffect() {
    if (!this.isGSAPLoaded) {
      console.warn('GSAP aún no está cargado');
      return;
    }

    try {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!gsap || !ScrollTrigger) {
        console.warn('GSAP no está disponible');
        return;
      }

      // Resetear ScrollTrigger para evitar conflictos
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      ScrollTrigger.refresh();

      // Efecto zoom-out controlado por scroll para la imagen de perfil
      gsap.to(".profile-image", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          onUpdate: (self: any) => {
            // El progreso del scroll controla la reducción de tamaño
            const progress = self.progress;
            const scale = 2.5 - (progress * 1.5); // De 2.5 a 1.0
            const opacity = 1; // Siempre visible
            const y = 30 - (progress * 30); // De 30px a 0px
            
            gsap.set(".profile-image", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

      // Efecto zoom-out controlado por scroll para el título
      gsap.to(".title-zoom-effect", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 2.0 - (progress * 1.0); // De 2.0 a 1.0
            const opacity = 1; // Siempre visible
            const y = 30 - (progress * 30);
            
            gsap.set(".title-zoom-effect", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

      // Efecto zoom-out controlado por scroll para el subtítulo
      gsap.to(".hero-content h2", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.8 - (progress * 0.8); // De 1.8 a 1.0
            const opacity = 1; // Siempre visible
            const y = 30 - (progress * 30);
            
            gsap.set(".hero-content h2", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

    } catch (error) {
      console.error('Error inicializando efecto de scroll:', error);
    }
  }
}
