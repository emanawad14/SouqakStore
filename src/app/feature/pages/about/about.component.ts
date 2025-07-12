import { Component } from '@angular/core';
import { IconsComponent } from "../icons/icons.component";
import { FeatureComponent } from "../feature/feature.component";
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-about',
  imports: [IconsComponent, FeatureComponent, ServicesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
