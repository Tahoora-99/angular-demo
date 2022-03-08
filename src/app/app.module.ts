import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegistryComponent } from './registry/registry.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
// import { CanActivateRouteGuard } from './can-activate-route.guard';




const routes:Routes=[
  {path:'app-login' , component:LoginComponent},
  {path:'app-home', component:HomeComponent},
  {path:'app-contact/:userName', component:ContactComponent, canActivate:[AuthGuard]},
  {path:'app-profile/:login', component:ProfileComponent},
 
  // {path:'app-registry', component:RegistryComponent},
  // {path:'',component:, canActivate:[AuthGuardService]}
  { path: '**', redirectTo: 'app-login' }


]

@NgModule({
 
  imports: [


  RouterModule.forRoot(routes),
   
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    RegistryComponent,
    ProfileComponent

  ],
  providers: [
    // AlwaysAuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
exports: [RouterModule]
