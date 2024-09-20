import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { UserListComponent } from './user-list/user-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login-guard';
import { UserService } from './user.service';
import { LoginService } from './login.service';

// El authGuard indica que son rutas protegidas para las que tienes que iniciar sesion previamente
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Página de inicio (login)
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard]}, // Pagina de home
  { path: 'products', component: ProductListComponent, canActivate: [LoginGuard] }, // Lista de productos
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [LoginGuard] }, // Detalle de producto
  { path: 'add-product', component: AddProductComponent, canActivate: [LoginGuard] }, // Añadir un producto
  { path: 'users', component: UserListComponent, canActivate: [LoginGuard] }, // Lista de usuarios
  { path: 'user/:id', component: UserDetailComponent, canActivate: [LoginGuard] }, // Detalle de usuario
  { path: 'user/put/:id', component: ModifyUserComponent, canActivate: [LoginGuard] }, // Modificar un usuario
  { path: 'login', component: LoginComponent }, // Inicio de sesion
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
    AddProductComponent,
    UserListComponent,
    UserDetailComponent,
    ModifyUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(),
    ProductService,
    UserService,
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faPlusCircle);
  }
 }
