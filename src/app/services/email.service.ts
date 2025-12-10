import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Configura estos valores con tus credenciales de EmailJS
  // Obtén estos valores de: https://dashboard.emailjs.com/
  private serviceId = 'service_2bu9i0l';      // Reemplaza con tu Service ID
  private templateId = 'template_gwjaiym';    // Reemplaza con tu Template ID
  private publicKey = 'Y5oUBSd77-pg8Nygh';      // Reemplaza con tu Public Key

  constructor() {
    // Inicializa EmailJS con tu Public Key
    emailjs.init(this.publicKey);
  }

  /**
   * Envía un email usando EmailJS
   * @param templateParams - Objeto con los parámetros del template
   * @returns Promise con la respuesta del envío
   */
  async sendEmail(templateParams: any): Promise<any> {
    try {
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );
      console.log('Email enviado exitosamente:', response);
      return response;
    } catch (error) {
      console.error('Error al enviar email:', error);
      throw error;
    }
  }

  /**
   * Envía el formulario de contacto
   * @param formData - Datos del formulario
   */
  async sendContactForm(formData: {
    name: string;
    email: string;
    company?: string;
    service: string;
    message: string;
  }): Promise<any> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'No especificado',
      service: formData.service,
      message: formData.message,
      to_name: 'Julio & Wilder',
    };

    return this.sendEmail(templateParams);
  }
}
