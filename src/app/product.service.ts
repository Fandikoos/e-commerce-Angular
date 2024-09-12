import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';
  private productsUpdated = new Subject<void>();


  constructor(private httpService:HttpClient) { }

  //Metodo par aobtener todos los productos
  //Especifica que el Observable emitirá un array de Product
  getProducts(): Observable<Product[]> {
    //Lo que devuelve/retorna este metodo es un array de productos
    return this.httpService.get<Product[]>(this.apiUrl);
  }

  //Metodo para obtener productos segun su id
  getProductById(id:number): Observable<Product>{
    return this.httpService.get<Product>(`${this.apiUrl}/${id}`);
  }

  //Metodo para obtener todas las categorias de los productos
  getCategories(): Observable<string[]>{
    return this.httpService.get<string[]>(this.apiUrl + "/categories");
  }

  //Metodo para obtener productos segun su categoria
  getProductsByCategorie(category:string): Observable<Product[]>{
    return this.httpService.get<Product[]>(`${this.apiUrl}/category/${category}`);
  }

   // Añadir un nuevo producto
   addProduct(product: Product): Observable<Product> {
    return this.httpService.post<Product>(this.apiUrl, product);
  }
  
}
