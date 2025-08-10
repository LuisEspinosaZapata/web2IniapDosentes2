import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  id: string | null = null;

  cedula: string = '';
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  telefono: string = '';
  genero: string = '';
  fechaNacimiento: string = '';
  contrasena: string = '';

  usuarios: any[] = [];

  servicio = inject(FirebaseService);

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.servicio.getUsuarios().subscribe(data => {
      if (data) {
        this.usuarios = Object.entries(data).map(([key, value]: any) => ({
          id: key,
          ...value
        }));
      } else {
        this.usuarios = [];
      }
    }, error => {
      console.error('Error al cargar usuarios:', error);
    });
  }

  guardar(formulario: NgForm) {
    if (formulario.invalid) {
      alert('Complete todos los campos correctamente');
      return;
    }

    const usuario = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      telefono: this.telefono,
      genero: this.genero,
      fechaNacimiento: this.fechaNacimiento,
      contrasena: this.contrasena
    };

    if (this.id) {
      this.servicio.putUsuario(this.id, usuario).subscribe({
        next: () => {
          alert('✅ Información actualizada correctamente.');
          this.limpiarFormulario(formulario);
          this.cargarUsuarios();
        },
        error: () => alert('❌ Error al actualizar la información.')
      });
    } else {
      this.servicio.postUsuario(usuario).subscribe({
        next: () => {
          alert('✅ Información guardada correctamente.');
          this.limpiarFormulario(formulario);
          this.cargarUsuarios();
        },
        error: () => alert('❌ Error al guardar la información.')
      });
    }
  }

  editarUsuario(usuario: any) {
    this.id = usuario.id;
    this.cedula = usuario.cedula;
    this.nombre = usuario.nombre;
    this.apellidos = usuario.apellidos;
    this.email = usuario.email;
    this.telefono = usuario.telefono;
    this.genero = usuario.genero;
    this.fechaNacimiento = usuario.fechaNacimiento;
    this.contrasena = usuario.contrasena || '';
  }

  eliminarUsuario(id: string) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.servicio.deleteUsuario(id).subscribe({
        next: () => {
          alert('Usuario eliminado correctamente.');
          this.cargarUsuarios();
        },
        error: () => alert('Error al eliminar usuario.')
      });
    }
  }

  limpiarFormulario(formulario: NgForm) {
    this.id = null;
    this.cedula = '';
    this.nombre = '';
    this.apellidos = '';
    this.email = '';
    this.telefono = '';
    this.genero = '';
    this.fechaNacimiento = '';
    this.contrasena = '';
    formulario.resetForm();
  }
}
