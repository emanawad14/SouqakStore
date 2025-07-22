import { Routes } from '@angular/router';

export const routes: Routes = [

    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , loadComponent:()=>import('./feature/pages/home/home.component').then((c)=>c.HomeComponent), title:'home'},
    {path:'about' , loadComponent:()=>import('./feature/pages/about/about.component').then((c)=>c.AboutComponent) , title:'about'},
    {path:'contact' , loadComponent:()=>import('./feature/pages/contact/contact.component').then((c)=>c.ContactComponent) , title:'contact'},
    {path:'**' , loadComponent:()=>import('./feature/pages/notfound/notfound.component').then((c)=>c.NotfoundComponent) , title:'No Found'},
];
