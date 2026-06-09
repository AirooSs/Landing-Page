import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class ProyectosComponent {

  proyectos = [
    {
      nombre: 'Gestión de Tareas — API Hexagonal',
      descripcion: 'API REST de gestión de tareas construida con Arquitectura Hexagonal y DDD. Incluye usuarios, proyectos y tareas con casos de uso independientes, tests unitarios con JUnit y Mockito, validaciones y documentación con Swagger.',
      tipo: 'Backend',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'JUnit', 'Mockito', 'Swagger', 'DDD'],
      icono: 'bi-diagram-3',
      color: 'acento',
      github: 'https://github.com/AirooSs/Gestion-tareas-hexagonal',
      destacado: true
    },
    {
      nombre: 'Reto Transversal UNIR',
      descripcion: 'Aplicación fullstack de reservas para conciertos desarrollada como proyecto grupal para UNIR. Gestión de eventos, reservas y usuarios con Angular en frontend y Spring Boot + MySQL en backend.',
      tipo: 'Fullstack',
      tags: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'TypeScript'],
      icono: 'bi-music-note-beamed',
      color: 'acento',
      github: 'https://github.com/AirooSs/Reto_Transversal_UNIR',
      destacado: false
    },
    {
      nombre: 'TFC - Tienda de Ropa Online',
      descripcion: 'Aplicación fullstack para la organización de una tienda de ropa online. Frontend en Angular con Backend en Bootstrap consumiendo una API REST con operaciones CRUD completas y componentes reutilizables.',
      tipo: 'Fullstack',
      tags: ['Angular', 'Bootstrap', 'TypeScript'],
      icono: 'bi-box-seam',
      color: 'verde',
      github: 'https://github.com/AirooSs/TFC-Tienda-de-ropa',
      destacado: false
    },
    {
      nombre: 'Mimesis Lab',
      descripcion: 'Plataforma clínica de investigación psicológica. Durante las prácticas trabajé en la integración de módulos Python con NestJS, CI/CD con GitHub Actions y la integración de Azure OpenAI (GPT y Whisper), a su vez integrado con el HPC de Castilla y León.',
      tipo: 'Prácticas fullstack',
      tags: ['Angular', 'NestJS', 'Node.js', 'PostgreSQL', 'Azure'],
      icono: 'bi-building',
      color: 'morado',
      github: null,
      destacado: true
    }
  ];

  imagenSeleccionada: string | null = null;

  abrirImagen(imagen: string): void {
    this.imagenSeleccionada = imagen;
  }

  cerrarImagen(): void {
    this.imagenSeleccionada = null;
  }
}