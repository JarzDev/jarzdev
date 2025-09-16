import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    this.initZoomOutEffect();
  }

  private async initZoomOutEffect() {
    try {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      if (!gsap || !ScrollTrigger) {
        console.warn('GSAP no está disponible para certifications');
        return;
      }

      // Efecto zoom-out para el título de la sección (siempre visible)
      gsap.to("#certifications .section-title", {
        scrollTrigger: {
          trigger: "#certifications",
          start: "top bottom",
          end: "top center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.15 - (progress * 0.15); // De 1.15 a 1.0
            const opacity = 1; // Siempre visible
            const y = 20 - (progress * 20); // De 20px a 0px
            
            gsap.set("#certifications .section-title", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

      // Efecto zoom-out para el contenedor de certificaciones (con transparencia)
      gsap.to("#certifications .certifications-container", {
        scrollTrigger: {
          trigger: "#certifications",
          start: "top bottom",
          end: "top center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.1 - (progress * 0.1); // De 1.1 a 1.0
            const opacity = progress; // Transparencia controlada por scroll
            const y = 20 - (progress * 20);
            
            gsap.set("#certifications .certifications-container", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

    } catch (error) {
      console.error('Error inicializando efecto de zoom-out en certifications:', error);
    }
  }

  certificationData = {
    cursos_y_certificaciones: [
      {
        titulo: "HTML5 y CSS3 Curso Avanzado",
        institucion: "San Cristóbal, Venezuela",
        archivo: "https://uptaivirtual.com/"
      },
      {
        titulo: "RxJs Nivel Pro",
        institucion: "Udemy",
        archivo: "assets/certificates/Rxjs.pdf"
      },
      {
        titulo: "Angular & Spring Boot: Creando web app full stack",
        institucion: "Udemy",
        archivo: "assets/certificates/angularAndSpring.pdf"
      },
      {
        titulo: "Spring Framework & Spring Boot desde cero a experto",
        institucion: "Udemy",
        archivo: "assets/certificates/springFramework.pdf"
      },
      {
        titulo: "Amazon AWS DevOps",
        institucion: "Udemy",
        archivo: "assets/certificates/AwsDevOps.pdf"
      },
      {
        titulo: "API Rest con Serverless Framework",
        institucion: "Udemy",
        archivo: "assets/certificates/serverless.pdf"
      },
      {
        titulo: "Terraform: de principiante a certificado",
        institucion: "Udemy",
        archivo: "assets/certificates/terraform.pdf"
      },
      {
        titulo: "Scrum: Gestión ágil de proyectos Con Scrum",
        institucion: "Udemy",
        archivo: "assets/certificates/Scrum.pdf"
      },
      {
        titulo: "AWS Certified Cloud Practitioner (CLF-C02)",
        institucion: "Amazon Web Services",
        archivo: "assets/certificates/awsCloud.pdf"
      },
      {
        titulo: "Implement Marketing Cloud Personalization",
        institucion: "Salesforce",
        archivo: "assets/certificates/salesforceMcp.pdf"
      },
      {
        titulo: "Android JetPack Compose Desde Cero",
        institucion: "Udemy",
        archivo: "assets/certificates/JetpactCompose.pdf"
      },
      {
        titulo: "SQL TOTAL - Domina Bases de Datos de 0 a Avanzado",
        institucion: "Udemy",
        archivo: "assets/certificates/sqlTotal.pdf"
      },
      {
        titulo: "Python Total - Programador Avanzado",
        institucion: "Udemy",
        archivo: "assets/certificates/PythonTotal-ProgramadorAvanzado.pdf"
      },
      {
        titulo: "Microsoft Power BI",
        institucion: "Universidad de Chile",
        archivo: "assets/certificates/powerbi.pdf"
      },
      {
        titulo: "Machine Learning",
        institucion: "Universidad de Chile",
        archivo: "assets/certificates/machinelearning.pdf"
      }
    ]
  };
} 