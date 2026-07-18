import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy';
import { ProyectosComponent } from './pages/proyectos/proyectos';
import { ContactoComponent } from './pages/contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, QuienSoyComponent, ProyectosComponent, ContactoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing');
}