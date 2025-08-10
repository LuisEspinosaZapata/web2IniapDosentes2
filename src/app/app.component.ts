import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GaleryComponent } from "./components/galery/galery.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, GaleryComponent,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // <-- corregido aquí
})
export class AppComponent {
  title = 'inap-asociacion';
}

