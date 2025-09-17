import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  showJson = false;
  contactData: any;

  toggleView() {
    this.showJson = !this.showJson;
  }
  
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

      // Efecto zoom-out para el contenedor de contacto (con transparencia)
      gsap.to("#contact .contact-container", {
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
            
            gsap.set("#contact .contact-container", {
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

  constructor() {
    this.contactData = {
      contacto: {
        informacion_personal: {
          nombre_completo: "José Alberto Ramírez Zambrano",
          ubicacion: "Chile",
          disponibilidad: "Disponible para oportunidades laborales e información general"
        },
        medios_contacto: {
          email: {
            direccion: this.contactInfo.email,
            tipo: "Contacto principal",
            descripcion: "Para consultas profesionales y colaboraciones "
          },
          telefono: {
            numero: this.contactInfo.phone,
            tipo: "Móvil",
            descripcion: "Disponible para llamadas y WhatsApp en horario laboral"
          },
          linkedin: {
            url: `https://${this.contactInfo.linkedin}`,
            descripcion: "Perfil profesional con experiencia laboral detallada y conexiones del sector",
            tipo: "Red profesional"
          },
          github: {
            url: `https://${this.contactInfo.github}`,
            descripcion: "Repositorios de código, proyectos open source y contribuciones",
            tipo: "Portfolio técnico"
          }
        },
        horarios_atencion: {
          zona_horaria: "Chile",
          dias_laborales: "Lunes a Viernes",
          horario: "9:00 AM - 6:00 PM",
          respuesta_email: "Dentro de 24 horas en días laborales"
        },
        especialidades_contacto: [
          "Desarrollo Full Stack",
          "Consultoría técnica",
          "Arquitectura de software",
          "DevOps y Cloud",
          "Integración de APIs",
          "Optimización de rendimiento"
        ]
      }
    };
  }
} 