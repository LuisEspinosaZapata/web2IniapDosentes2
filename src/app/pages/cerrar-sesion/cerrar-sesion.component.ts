
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cerrar-sesion',
  template: '',
})
export class CerrarSesionComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logout();
  }
}