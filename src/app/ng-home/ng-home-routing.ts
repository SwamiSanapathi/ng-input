import { Routes } from "@angular/router";

export default [ 
    {
        path: '',
        loadComponent: () => import('./ng-home.component'),        
    }
] as Routes