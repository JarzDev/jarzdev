import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="bio">
      <div class="main-container">
        <h2 class="section-title zoom-out-effect clickable-title" (click)="toggleView()">
          Sobre Mí
          <span class="toggle-indicator">{{ showJson ? '{ }' : '👤' }}</span>
        </h2>
        <div class="bio-content">
          <div class="bio-container zoom-out-effect" [ngClass]="{'bio-container-json': showJson, 'bio-container-organized': !showJson}">
            <pre *ngIf="showJson" class="bio-text">{{ bioData }}</pre>
            <div *ngIf="!showJson" class="bio-organized">
              <div class="profile-section">
                <h3>Perfil Profesional</h3>
                <p class="description">{{ bioObject.perfil.descripcion }}</p>
                <p class="specialization">{{ bioObject.perfil.especializacion }}</p>
              </div>
              
              <div class="education-section">
                <h3>Formación</h3>
                <p class="degree">{{ bioObject.formacion.titulo }}</p>
                
                <h4>Experiencia Laboral</h4>
                <div *ngFor="let exp of bioObject.formacion.experiencia_laboral" class="experience-item">
                  <div class="job-header">
                    <h5>{{ exp.cargo }}</h5>
                    <span class="company">{{ exp.empresa }}</span>
                    <span class="project" *ngIf="exp.proyecto">- {{ exp.proyecto }}</span>
                    <span class="period">{{ exp.periodo }}</span>
                  </div>
                  <ul class="responsibilities">
                    <li *ngFor="let resp of exp.responsabilidades">{{ resp }}</li>
                  </ul>
                </div>
              </div>
              
              <div class="objective-section">
                <h3>Objetivo</h3>
                <p>{{ bioObject.objetivo }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
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

    .bio-content {
      display: flex;
      justify-content: center;
    }

    .bio-container {
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow-x: auto;
      width: 100%;
    }

    .bio-container-json {
      background-color: #1e1e1e;
    }

    .bio-container-organized {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.95) 100%);
    }

    .bio-text {
      margin: 0;
      color: #d4d4d4;
      font-family: 'Fira Code', 'Consolas', monospace;
      font-size: 1rem;
      line-height: 1.5;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .clickable-title {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: color 0.3s ease;
    }

    .clickable-title:hover {
      color: #007bff;
    }

    .toggle-indicator {
      font-size: 1.5rem;
      opacity: 0.7;
    }

    .bio-organized {
      color: #333333;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
    }

    .profile-section, .education-section, .objective-section {
      margin-bottom: 2rem;
    }

    .bio-organized h3 {
      color: #007bff;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      border-bottom: 2px solid #007bff;
      padding-bottom: 0.5rem;
    }

    .bio-organized h4 {
      color: #0056b3;
      font-size: 1.2rem;
      margin: 1.5rem 0 1rem 0;
    }

    .bio-organized h5 {
      color: #007bff;
      font-size: 1.1rem;
      margin: 0 0 0.5rem 0;
    }

    .description, .specialization {
      margin-bottom: 1rem;
      text-align: justify;
      color: #555555;
    }

    .degree {
      font-weight: bold;
      color: #0056b3;
      margin-bottom: 1.5rem;
    }

    .experience-item {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: rgba(0, 123, 255, 0.08);
      border-radius: 8px;
      border-left: 4px solid #007bff;
    }

    .job-header {
      margin-bottom: 1rem;
    }

    .company {
      color: #0056b3;
      font-weight: bold;
      margin-left: 0.5rem;
    }

    .project {
      color: #6f42c1;
      font-style: italic;
    }

    .period {
      color: #007bff;
      font-size: 0.9rem;
      float: right;
    }

    .responsibilities {
      margin: 0;
      padding-left: 1.5rem;
    }

    .responsibilities li {
      margin-bottom: 0.5rem;
      color: #555555;
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

    @media (max-width: 768px) {
      .bio-container {
        padding: 1rem;
      }

      .bio-text {
        font-size: 0.9rem;
      }
    }
  `]
})
export class BioComponent implements AfterViewInit {
  showJson = true;
  bioObject: any;

  constructor() {
    console.log('%cHola %cGente:', 'color: blue; font-size: 40px; font-weight: bold', 'color: green; font-size: 40px; font-weight: bold');
    console.log('%cTe saludo desde la consola, si llegaste hasta aqui es por que estas buscando mas informacion, me parece bien, atte: %cJose A Ramirez Z', 'color: black', 'color: blue');
    
    // Parsear el JSON para la vista organizada
    this.bioObject = JSON.parse(this.bioData);
  }

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
        console.warn('GSAP no está disponible para bio');
        return;
      }

      // Efecto zoom-out para el título de la sección (siempre visible)
      gsap.to(".section-title", {
        scrollTrigger: {
          trigger: "#bio",
          start: "top bottom",
          end: "top center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.15 - (progress * 0.15); // De 1.15 a 1.0
            const opacity = 1; // Siempre visible
            const y = 20 - (progress * 20); // De 20px a 0px
            
            gsap.set(".section-title", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

      // Efecto zoom-out para el contenedor bio (con transparencia)
      gsap.to(".bio-container", {
        scrollTrigger: {
          trigger: "#bio",
          start: "top bottom",
          end: "top center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.1 - (progress * 0.1); // De 1.1 a 1.0
            const opacity = progress; // Transparencia controlada por scroll
            const y = 20 - (progress * 20);
            
            gsap.set(".bio-container", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

    } catch (error) {
      console.error('Error inicializando efecto de zoom-out en bio:', error);
    }
  }

  bioData = JSON.stringify({
    perfil: {
      descripcion: "Soy Full Stack Developer con más de 10 años de experiencia en el ámbito de las tecnologías de la información. Mi trayectoria abarca el desarrollo frontend y backend, bases de datos, soluciones en la nube, marketing cloud, sistemas administrativos, CRM, seguridad y mucho más.",
      especializacion: "Me especializo en la creación de soluciones transversales, utilizando una amplia gama de lenguajes de programación para ofrecer resultados eficientes y efectivos. Mi capacidad para adaptarme y aplicar mis conocimientos en diversas áreas me permite abordar desafíos complejos y proporcionar soluciones innovadoras."
    },
    formacion: {
      titulo: "Ingeniero Informático Instituto Universitario de Tecnología Agroindustrial Región Los Andes",
      experiencia_laboral: [
        {
          cargo: "Full Stack Dev | Salesforce MCP Admin",
          empresa: "Tata Consultancy Services",
          proyecto: "Banco Estado",
          periodo: "Diciembre 2023 - Actualidad",
          responsabilidades: [
            "Administración de plataforma Marketing Cloud Personalization de Salesforce (gestión de usuarios, segmentos, campañas, atributos, cargas sftp)",
            "Desarrollo para cargas vía API, KPI desde DWH, sitemap",
            "Implementación de solución en AWS con Front en Angular y back en Node.js",
            "Tecnologías AWS: EKS, Lambdas, Glue, SQS, RDS MySQL, Cognito"
          ]
        },
        {
          cargo: "Full Stack Dev | DevOps",
          empresa: "Emergya",
          proyecto: "Tesorería General de la República",
          periodo: "Agosto 2023 - Diciembre 2023",
          responsabilidades: [
            "Desarrollo Full Stack en AWS con Framework Serverless",
            "Backend en Node.js y Frontend en Angular",
            "Implementación de autenticación con Cognito y DynamoDB",
            "Infraestructura como código con Terraform",
            "Pipelines en CodeBuild"
          ]
        },
        {
          cargo: "Full Stack Dev | IT Services",
          empresa: "Agile Networks Spa",
          periodo: "Abril 2023 - Agosto 2023",
          responsabilidades: [
            "Desarrollo Full Stack con MEAN Stack (MongoDB, Express, Angular, Node.js)",
            "Aplicaciones reactivas y responsivas",
            "Soporte IT empresarial",
            "Gestión de servidores en la nube, hosting",
            "Desarrollo web con HTML5, CSS, JS y WordPress"
          ]
        },
        {
          cargo: "Full Stack Dev | IT Services",
          empresa: "Smart Graphics Solution",
          periodo: "Mayo 2020 - Abril 2023",
          responsabilidades: [
            "Desarrollo de aplicaciones en Angular y React",
            "Backend en Java con Spring Boot",
            "Integración con servicios XML para gestión de producción en imprentas",
            "Desarrollo WordPress con WooCommerce",
            "Soporte y administración de recursos informáticos"
          ]
        },
        {
          cargo: "Frontend Dev | IT Services",
          empresa: "Cadegroup",
          periodo: "Noviembre 2018 - Abril 2020",
          responsabilidades: [
            "Desarrollo frontend en Angular con TypeScript",
            "Desarrollo de aplicación móvil con Ionic",
            "Backend en Node.js con TypeScript",
            "Instalación de RIPs para plotters e impresoras",
            "Implementación de soluciones en AWS y Azure"
          ]
        },
        {
          cargo: "Frontend Dev | IT Services",
          empresa: "Kerbe LTDA",
          periodo: "Octubre 2017 - Octubre 2018",
          responsabilidades: [
            "Desarrollo web con HTML5, CSS (Bootstrap) y JavaScript",
            "Gestión de hosting y páginas web",
            "Implementación de sistema de búsqueda e impresión",
            "Configuración de impresoras en red y SafeQ",
            "Soporte técnico y mantenimiento de sistemas"
          ]
        }
      ]
    },
    objetivo: "Mi objetivo es seguir creciendo profesionalmente mientras contribuyo al desarrollo de proyectos innovadores que marquen la diferencia en el mundo tecnológico."
  }, null, 2);
} 