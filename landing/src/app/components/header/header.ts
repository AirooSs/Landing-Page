import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  scrolled = false;
  menuAbierto = false;
  seccionActiva = 'inicio';

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
    this.detectarSeccion();
  }
  //Hacemos metodo para detectar la seccion  activa y cambiar el color del menu
  detectarSeccion() {
    const secciones = ['inicio', 'proyectos', 'contacto'];
    for (const id of secciones) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) {
        this.seccionActiva = id;
        break;
      }
    }
  }
  //Hacemos metodo para hacer scroll a la seccion correspondiente
  ir(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.menuAbierto = false;
  }
  //Hacemos metodo para abrir y cerrar el menu
  toggle() {
    this.menuAbierto = !this.menuAbierto;
  }
}