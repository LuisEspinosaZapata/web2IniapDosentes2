import { Component } from '@angular/core';
import { GaleryComponent } from "../../components/galery/galery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GaleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
