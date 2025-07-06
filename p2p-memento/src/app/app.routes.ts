import { Routes } from '@angular/router';
import { LandingPageComponent } from './core/landing-page/pages/landing-page/landing-page.component';
import { RegisterComponent } from './core/auth/pages/register/register.component';
import { WithTopNavComponent } from './shared/pages/with-top-nav/with-top-nav.component';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { WithSideNavComponent } from './shared/pages/with-side-nav/with-side-nav.component';

export const routes: Routes = [
    {path: '', component: WithTopNavComponent , children: [
        {
            path: '' , component: LandingPageComponent
        },
        {
            path: 'register', component: RegisterComponent
        },
        {
            path: 'login', component: LoginComponent
        },
    ]},
    {path: 'dashboard', component: WithSideNavComponent }

];
