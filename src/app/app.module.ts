import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegistryComponent } from './registry/registry.component';



const routes:Routes=[
  {path:'app-login' , component:LoginComponent},
  {path:'app-home', component:HomeComponent},
  {path:'app-contact/', component:ContactComponent},
  {path:'app-registry', component:RegistryComponent}
  // { path: '**', component: app-home }


]

@NgModule({
 
  imports: [
 
  RouterModule.forRoot(routes),
   
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    RegistryComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
exports: [RouterModule]
