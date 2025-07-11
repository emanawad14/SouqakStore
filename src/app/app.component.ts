import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './shared/services/flowbite/flowbite.service';
import { NavComponent } from "./core/layouts/nav/nav.component";
import { FooterComponent } from "./core/layouts/footer/footer.component";
import { FootnavComponent } from "./core/layouts/footnav/footnav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent, FootnavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'SouqakStore';

  constructor(private _FlowbiteService:FlowbiteService){}

 

  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite(flowbite=>
    {
      console.log('flowbiteLoaded' ,flowbite);
      
    }
    )
  }
}
