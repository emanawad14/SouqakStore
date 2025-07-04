import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './shared/services/flowbite/flowbite.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
