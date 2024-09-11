import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductService } from './product.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'products', component: ProductListComponent }, // Lista de productos
  { path: 'product/:id', component: ProductDetailComponent }, // Detalle de producto
  { path: 'profile', component: ProfileComponent }, // Perfil de usuario
  { path: '**', component: ErrorComponent } // Página de error para rutas no encontradas
];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
