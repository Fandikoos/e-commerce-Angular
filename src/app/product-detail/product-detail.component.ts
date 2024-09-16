import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product:Product;

  constructor(private productService:ProductService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    // Convertir el ID a número ya que la url es una cadena de texto y cogerlo de la url
    const productId = Number(this.route.snapshot.paramMap.get('id')); 
    this.productService.getProductById(productId).subscribe(
      product => {
      this.product = product;
    }, error => {
      console.error("Error al obtener e producto: ", error);
    });
  }

  backHome(){
    this.router.navigate(["products"])
  }

}
