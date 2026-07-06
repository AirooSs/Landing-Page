import { Component } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css'
})
export class QuienSoyComponent {

  //Agregamos metodo para ver la seccion de proyectos
  irAProyectos() {
    const el = document.getElementById('proyectos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}