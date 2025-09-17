import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements AfterViewInit {
  showJson = false;

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
        console.warn('GSAP no está disponible para stacks');
        return;
      }

      // Efecto zoom-out para el título de la sección (siempre visible)
      gsap.to("#stacks .section-title", {
        scrollTrigger: {
          trigger: "#stacks",
          start: "top bottom",
          end: "top center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.15 - (progress * 0.15); // De 1.15 a 1.0
            const opacity = 1; // Siempre visible
            const y = 20 - (progress * 20); // De 20px a 0px
            
            gsap.set("#stacks .section-title", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

      // Efecto zoom-out para el contenedor JSON (con transparencia)
      gsap.to("#stacks .json-container", {
        scrollTrigger: {
          trigger: "#stacks",
          start: "top bottom",
          end: "top center",
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const scale = 1.1 - (progress * 0.1); // De 1.1 a 1.0
            const opacity = progress; // Transparencia controlada por scroll
            const y = 20 - (progress * 20);
            
            gsap.set("#stacks .json-container", {
              scale: scale,
              opacity: opacity,
              y: y
            });
          }
        }
      });

    } catch (error) {
      console.error('Error inicializando efecto de zoom-out en stacks:', error);
    }
  }

  stackData = {
    frontEnd: {
      markup_and_styling: [
        "HTML5",
        "CSS"
      ],
      programming_languages: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "Kotlin",
        "Swift"
        ],
      frameworks_and_libraries: [
        "React",
        "React Native",
        "Angular",
        "Android Studio",
        "Xcode"
      ]
    },
    backEnd: {
      runtime_and_frameworks: [
        "Node.js",
        "Express",
        "Django",
        "Spring Boot",
        "Serverless Framework"
      ]
    },
    databases: [
      "MongoDB",
      "SQL",
      "DynamoDB"
    ],
    cloud_and_services: {
      platforms: [
        "Firebase",
        "SalesForce (MCP)",
        "WordPress"
      ],
      aws_services: [
        "S3",
        "Lambda",
        "API Gateway",
        "Cognito",
        "SQS",
        "Glue",
        "RDS",
        "EC2",
        "DynamoDB"
      ]
    },
    devOps_and_tools: {
      containerization: [
        "Docker",
        "Kubernetes"
      ],
      version_control: [
        "Git",
        "GitHub",
        "GitLab"
      ],
      infrastructure_as_code: [
        "Terraform"
      ],
      testing: [
        "Postman",
        "Mockito",
        "Jest",
        "Karma",
        "Jasmine"
      ]
    }
  };
} 