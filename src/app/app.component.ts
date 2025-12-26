import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { EmailService } from "./services/email.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Julio & Wilder | Soluciones Digitales en la Nube AWS";
  contactForm: FormGroup;
  isSubmitting = false;
  submitted = false;
  errorMessage = "";

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      company: [""],
      service: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(20)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = "";

    try {
      // Enviar email usando EmailJS
      await this.emailService.sendContactForm(this.contactForm.value);

      this.isSubmitting = false;
      this.submitted = true;

      // Reset form
      this.contactForm.reset();

      // Reset status after 5 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    } catch (error) {
      this.isSubmitting = false;
      this.errorMessage = "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.";
      console.error("Error enviando formulario:", error);

      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => {
        this.errorMessage = "";
      }, 5000);
    }
  }

  markAllAsTouched() {
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // Datos actualizados
  services = [
    {
      icon: "Globe",
      title: "Desarrollo Web Corporativo",
      description:
        "Sitios web modernos, escalables y optimizados para SEO que representan profesionalmente tu marca en la nube AWS.",
      features: [
        "Hosting AWS Optimizado",
        "Diseño 100% Responsivo",
        "Panel de Administración",
        "SEO Avanzado",
        "Alta Velocidad",
      ],
    },
    {
      icon: "ShoppingBag",
      title: "E-commerce Avanzado",
      description:
        "Tiendas online completas con pasarelas de pago seguras, gestión de inventario y análisis de ventas en tiempo real.",
      features: [
        "Pasarelas de Pago SSL",
        "Gestión de Inventario AWS",
        "Dashboard de Ventas",
        "Carrito Persistente",
        "Multi-tienda",
      ],
    },
    {
      icon: "PieChart",
      title: "Sistemas en la Nube AWS",
      description:
        "Paneles de control empresariales y sistemas de gestión desplegados en infraestructura AWS escalable y segura.",
      features: [
        "Arquitectura AWS",
        "Dashboard en Tiempo Real",
        "Roles y Permisos",
        "Backups Automáticos",
        "Escalabilidad Automática",
      ],
    },
    {
      icon: "Cpu",
      title: "Soluciones a Medida",
      description:
        "Desarrollos personalizados que se adaptan perfectamente a las necesidades específicas de tu negocio o proyecto.",
      features: [
        "Análisis de Requerimientos",
        "Desarrollo Agil",
        "Pruebas de Calidad",
        "Documentación Completa",
        "Soporte 24/7",
      ],
    },
  ];

  benefits = [
    {
      title: "Expertos Certificados AWS",
      description:
        "Infraestructura en la nube optimizada para seguridad, velocidad y escalabilidad.",
    },
    {
      title: "Atención Personalizada",
      description:
        "Julio y Wilder supervisan cada proyecto directamente, garantizando calidad.",
    },
    {
      title: "Metodología Ágil",
      description:
        "Desarrollo iterativo con entregas constantes y feedback continuo.",
    },
    {
      title: "Soporte Continuo",
      description:
        "Mantenimiento, actualizaciones y optimizaciones post-lanzamiento.",
    },
  ];

  team = [
    {
      name: "Julio Sanchez",
      role: "Full Stack Developer & AWS Cloud Computing",
      description:
        "Desarrollador Full Stack especializado en Angular, ASP.NET Core y arquitecturas en la nube con AWS. Enfocado en construir soluciones escalables, seguras y orientadas a negocio.",
      image: "assets/images/JulioSanchez.jpg",
      portfolioUrl: "https://jose-julio-sanchez-cruzado.vercel.app/",
      githubUrl: "https://github.com/J0seJuli0",
      linkedinUrl: "https://linkedin.com/in/josejuliosanchezcruzado",
    },
    {
      name: "Wilder Rojas",
      role: "Full Stack Developer",
      description:
        "Desarrollador Full Stack especializado en Java, Spring Boot y Angular, con enfoque en soluciones escalables, código limpio y experiencia de usuario.",
      image: "assets/images/WilderRojas.png",
      portfolioUrl: "https://wilder-rojas-marin.vercel.app/",
      githubUrl: "https://github.com/ZeReF2609",
      linkedinUrl: "https://linkedin.com/in/wilderrojas",
    },
  ];

}
