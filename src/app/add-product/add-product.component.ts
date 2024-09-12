import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent{

  newProduct: Product = {
    title: "",
    price: 0,
    description: "",
    image: "",
    category: ""
  };

  constructor(private productService: ProductService, private router:Router){}

  onSubmit(): void {
    this.productService.addProduct(this.newProduct).subscribe(
      response => {
        console.log("Producto añadido con exito", response);
        this.router.navigate(["products"]);
      },
      error => {
        console.error("Error al añadir el producto", error);
      }
    );
  }


}
