import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Explore } from './pages/explore/explore';

export const routes: Routes = [
    {path: '', component: Home},
    { path: 'about-us', component: AboutUs },
    { path: 'projects', component: Explore },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
