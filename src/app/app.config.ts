import { ApplicationConfig } from "@angular/platform-browser";
import { provideRouter, withHashLocation } from "@angular/router";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter([
            {
                path: '',
                loadChildren: () => import('./ng-home/ng-home-routing')
            },
        ],
            withHashLocation()
        )
    ]
}