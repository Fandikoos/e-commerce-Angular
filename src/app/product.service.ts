import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

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

  
}
