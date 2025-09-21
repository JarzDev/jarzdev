# 💼 JarzDev - Portfolio Personal

> Landing page profesional de José Alberto Ramírez Zambrano, Full Stack Developer con más de 10 años de experiencia en tecnologías de la información.

🌐 **[Ver Portfolio en Vivo](https://jarzdev.cl/)**

![Angular](https://img.shields.io/badge/Angular-19.2.0-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![GSAP](https://img.shields.io/badge/GSAP-Animations-green.svg)
![SCSS](https://img.shields.io/badge/SCSS-Styling-pink.svg)

## 🌟 Características Principales

### 🎨 **Diseño Moderno y Responsivo**
- Interfaz elegante con efectos de scroll suaves usando GSAP
- Animaciones de entrada y transiciones fluidas
- Diseño completamente responsivo para todos los dispositivos
- Esquema de colores profesional en tonos azules

### 🔄 **Modo Dual: Client Mode & JSON Mode**
Cada sección incluye un botón toggle que permite alternar entre:
- **Client Mode**: Vista organizada y elegante para usuarios finales
- **JSON Mode**: Vista técnica con datos estructurados para desarrolladores

### 📱 **Secciones Interactivas**

#### 🧑 **Sobre Mí**
- **Client Mode**: Información personal y experiencia laboral organizada visualmente
- **JSON Mode**: Datos completos de perfil profesional, formación y experiencia detallada
- Más de 10 años de experiencia en desarrollo Full Stack
- Historial completo de empresas: TCS, Emergya, Agile Networks, Smart Graphics, Cadegroup, Kerbe

#### 💻 **Stack Tecnológico**
- **Client Mode**: Pills organizados por categorías con colores distintivos
- **JSON Mode**: Estructura completa de tecnologías por área
- **Categorías**:
  - Frontend: HTML5, CSS, JavaScript, TypeScript, React, Angular
  - Backend: Node.js, Express, Django, Spring Boot
  - Bases de Datos: MongoDB, SQL, DynamoDB
  - Cloud: AWS Services, Firebase, Salesforce MCP
  - DevOps: Docker, Kubernetes, Terraform, Git, Testing tools

#### 🏆 **Certificaciones**
- **Client Mode**: Tarjetas elegantes con enlaces directos a certificados
- **JSON Mode**: Información detallada de cada certificación
- 14+ certificaciones profesionales en tecnologías actuales
- Enlaces directos a certificados en PDF
- Instituciones: Udemy, Amazon AWS, Salesforce, Universidad de Chile

#### 📧 **Contacto**
- **Client Mode**: Tarjetas interactivas con información de contacto
- **JSON Mode**: Datos estructurados con horarios, especialidades y detalles
- Enlaces directos: Email, Teléfono, LinkedIn, GitHub
- Información de disponibilidad y horarios de atención

## 🚀 **Tecnologías Utilizadas**

### Frontend
- **Angular 19.2.0** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **GSAP** - Animaciones avanzadas
- **FontAwesome** - Iconografía

### Arquitectura
- **Componentes Standalone** - Arquitectura modular
- **Responsive Design** - Mobile-first approach
- **Lazy Loading** - Carga optimizada de recursos
- **SEO Optimizado** - Meta tags y estructura semántica

## 🛠️ **Instalación y Desarrollo**

### Prerrequisitos
- Node.js (v18 o superior)
- npm o pnpm
- Angular CLI

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/jarzdev/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

### Scripts Disponibles
```bash
# Desarrollo
ng serve                    # Puerto 4200

# Construcción
ng build                    # Build de producción
ng build --configuration=development  # Build de desarrollo

# Testing
ng test                     # Tests unitarios
ng e2e                      # Tests end-to-end

# Linting
ng lint                     # Verificar código
```

## 📁 **Estructura del Proyecto**

```
src/
├── app/
│   ├── components/
│   │   ├── bio/           # Sección "Sobre Mí"
│   │   ├── stacks/        # Stack Tecnológico
│   │   ├── certifications/# Certificaciones
│   │   ├── contact/       # Información de contacto
│   │   └── toolbar/       # Barra de navegación
│   ├── app.component.*    # Componente principal
│   └── app.config.ts      # Configuración de la app
├── assets/
│   ├── certificates/      # PDFs de certificaciones
│   ├── images/           # Imágenes del perfil
│   └── icons/            # Iconos personalizados
└── styles.scss           # Estilos globales
```

## 🎯 **Características Técnicas**

### Animaciones GSAP
- Efectos de scroll con ScrollTrigger
- Animaciones de entrada suaves
- Transiciones entre modos (JSON/Client)
- Efectos de zoom y fade personalizados

### Responsive Design
- **Desktop**: Grid completo y efectos avanzados
- **Tablet**: Layout adaptado con 2 columnas
- **Mobile**: Vista de una columna optimizada
- **Breakpoints**: 1024px, 768px, 480px

### Performance
- Lazy loading de GSAP
- Componentes standalone
- Optimización de imágenes
- CSS optimizado con SCSS

## 🌐 **Deploy y Producción**

### 🚀 **Sitio en Vivo**
La aplicación está desplegada y disponible en: **[https://jarzdev.cl/](https://jarzdev.cl/)**

### Build de Producción
```bash
ng build --configuration=production
```

### Optimizaciones Incluidas
- Tree shaking automático
- Minificación de CSS/JS
- Optimización de imágenes
- Service Worker ready

## 📞 **Contacto**

**José Alberto Ramírez Zambrano**
- 📧 Email: [jarzdev@gmail.com](mailto:jarzdev@gmail.com)
- 📱 Teléfono: [+56954927928](tel:+56954927928)
- 💼 LinkedIn: [jose-alberto-ramirez-zambrano](https://linkedin.com/in/jose-alberto-ramirez-zambrano-7524411aa/)
- 🐱 GitHub: [jarzdev](https://github.com/jarzdev)

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**⭐ Si te gusta este proyecto, no olvides darle una estrella!**
