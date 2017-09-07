import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateRouteGuard } from './can-activate-route.guard';

import { LoginComponent } from './components/login/login.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    {
        path: 'dashboard',
        component: AuthenticatedComponent,
        canActivate: [CanActivateRouteGuard]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }