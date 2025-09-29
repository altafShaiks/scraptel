import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { LoginDialogComponent } from './features/auth/components/login/login-dialog.component';
import { RegisterDialogComponent } from './features/auth/components/register/register-dialog.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'login',
        component: LoginDialogComponent
    },
    {
        path: 'register',
        component: RegisterDialogComponent
    }
];
