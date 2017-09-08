import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Theming
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { CanActivateRouteGuard } from './can-activate-route.guard';

// Services
import { AccountsService } from './services/accounts.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent},
//   { path: 'user', component: AuthenticatedComponent },
//   { path: '**', component: NotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    AuthenticatedComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AuthService, UserService, CanActivateRouteGuard, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
