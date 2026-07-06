import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class ProyectosComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) { }

  proyectos = [
    {
      nombre: 'Gestión de Tareas — Fullstack',
      descripcion: 'Backend con Arquitectura Hexagonal y DDD en Spring Boot conectado a un frontend en React (Vite). Primera experiencia con React viniendo de Angular.',
      tipo: 'Fullstack',
      tags: ['React', 'Vite', 'Java', 'Spring Boot', 'PostgreSQL'],
      icono: 'bi-layout-split',
      color: 'blue',
      github: 'https://github.com/AirooSs/gestion-tareas-fullstack'
    },
    {
      nombre: 'Gestión de Tareas — API Hexagonal',
      descripcion: 'API REST con Arquitectura Hexagonal y DDD. Tests con JUnit y Mockito, documentación con Swagger.',
      tipo: 'Backend',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JUnit', 'Mockito', 'Swagger'],
      icono: 'bi-diagram-3',
      color: 'blue',
      github: 'https://github.com/AirooSs/Gestion-tareas-hexagonal'
    },
    {
      nombre: 'Plataforma de Reservas para Conciertos',
      descripcion: 'Plataforma fullstack de reservas para conciertos. Angular en frontend, Spring Boot + MySQL en backend.',
      tipo: 'Fullstack',
      tags: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'TypeScript'],
      icono: 'bi-music-note-beamed',
      color: 'green',
      github: 'https://github.com/AirooSs/Reto_Transversal_UNIR'
    },
    {
      nombre: 'TFC — Tienda de Ropa Online',
      descripcion: 'E-commerce con Angular en frontend y Spring Boot + MySQL en backend. Carrito, favoritos,seguridad JWT y gestión con Swagger.',
      tipo: 'Fullstack',
      tags: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'Bootstrap'],
      icono: 'bi-bag',
      color: 'green',
      github: 'https://github.com/AirooSs/TFC-Tienda-de-ropa'
    },
    {
      nombre: 'Prácticas FullStack Mimesis Lab',
      descripcion: 'Plataforma clínica real. NestJS, Azure OpenAI (GPT y Whisper), CI/CD con GitHub Actions y conexión con el HPC de Castilla y León.',
      tipo: 'Prácticas',
      tags: ['Angular', 'NestJS', 'Node.js', 'PostgreSQL', 'Azure', 'Python'],
      icono: 'bi-building',
      color: 'purple',
      github: null
    }
  ];

  galerias = [
    {
      titulo: 'Plataforma de Reservas para Conciertos',
      icono: 'bi-music-note-beamed',
      imgs: [
        { src: '/RETO/portada.png', alt: 'Portada' },
        { src: '/RETO/artistas.png', alt: 'Artistas' },
        { src: '/RETO/destacados.png', alt: 'Destacados' },
        { src: '/RETO/venta_de_entradas.png', alt: 'Venta de entradas' },
        { src: '/RETO/inicio_de_sesion.png', alt: 'Inicio de sesión' }
      ]
    },
    {
      titulo: 'TFC — Tienda de Ropa Online',
      icono: 'bi-bag',
      imgs: [
        { src: '/TFC/Inicio.png', alt: 'Inicio' },
        { src: '/TFC/Catalogo.png', alt: 'Catálogo' },
        { src: '/TFC/favoritos_y_carrito.png', alt: 'Favoritos y carrito' },
        { src: '/TFC/Producto.png', alt: 'Producto' },
        { src: '/TFC/Carrito.png', alt: 'Carrito' }
      ]
    },
    {
      titulo: 'Gestión de Tareas — Arquitectura Hexagonal en Java SpringBoot',
      icono: 'bi-diagram-3',
      imgs: [
        { src: '/Hexagonal/Arquitectura.PNG', alt: 'Arquitectura' },
        { src: '/Hexagonal/estructura.PNG', alt: 'Estructura' },
        { src: '/Hexagonal/repo.PNG', alt: 'Repositorio' },
        { src: '/Hexagonal/swagger.PNG', alt: 'Swagger' }
      ]
    }
  ];

  imagenSeleccionada: string | null = null;

  @ViewChildren('galeria') galeriaRefs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.cdr.detectChanges();
    setTimeout(() => {
      this.galeriaRefs.forEach(ref => this.activarDrag(ref.nativeElement));
    }, 100);
  }

  activarDrag(el: HTMLElement) {
    let down = false, startX = 0, scrollLeft = 0, moved = false;

    el.addEventListener('mousedown', e => {
      down = true;
      moved = false;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.classList.add('dragging');
    });

    ['mouseleave', 'mouseup'].forEach(ev =>
      el.addEventListener(ev, () => {
        down = false;
        el.classList.remove('dragging');
      })
    );

    el.addEventListener('mousemove', e => {
      if (!down) return;
      const dx = e.pageX - el.offsetLeft - startX;
      if (Math.abs(dx) > 5) moved = true;
      e.preventDefault();
      el.scrollLeft = scrollLeft - dx * 1.5;
    });

    el.addEventListener('click', e => {
      if (moved) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    }, true);

    let tx = 0, ts = 0;
    el.addEventListener('touchstart', e => { tx = e.touches[0].pageX; ts = el.scrollLeft; });
    el.addEventListener('touchmove', e => {
      el.scrollLeft = ts + (tx - e.touches[0].pageX) * 1.5;
    });
  }

  abrir(src: string) { this.imagenSeleccionada = src; }
  cerrar() { this.imagenSeleccionada = null; }
}