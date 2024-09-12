import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit{

  // Definimos products como un array de Product
  products:Product[] = []; 
  
  //Array para productos filtrados por el nombre
  filteredProducts:Product[] = [];
  searchQueryProduct:string="";

  //Array para almacenar los nombres de las categorias de los productos
  categories:string[]=[];
  selectedCategory:string="";

  constructor (private productService: ProductService){}

  // Cuando se inicia el componente cargan todos los productos
  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.products);
    this.getCategories();
  }

  getAllProducts(): void{
    this.productService.getProducts().subscribe(
      (response: Product[]) => { //la respuesta es de tipo Product[] -> un array de productos
        //Mostramos todos los productos inicialmente
        this.products = response;
        this.filteredProducts = response;
      },
      (error) => {
        console.log("Error mostrando los productos: ", error);
      }
    );
  }

  //Metodo para filtrar productos segun su nombre (Aqui si hubiera habido una operacion en la api hubiera sido a traves de ella)
  //como no habia lo hemos hecho de manera manual filtrando en el array
  searchProductsByName(): void{
    // Si la búsqueda está vacía, mostrar todos los productos, trim() elimina los espacios en blanco al principio y al final de la cadena.
    if(this.searchQueryProduct.trim() === ""){
      //En caso de que este vacia asignamos a filteredProducts todos los productos
      this.filteredProducts = this.products;
    } else {
      //Recorremos todos los prodcutos del array de filteredProducts y los fitlramos (filter)
      this.filteredProducts = this.products.filter(product => 
        //Convertimos a minusculas el titulos/name del producto
        product.title.toLowerCase()
        // includes() verifica si el titulo/name contiene el texto de busqueda en minuscula tambien para que coincida
        .includes(this.searchQueryProduct.toLowerCase())
      );
      console.log(this.filteredProducts);
    }

  }

  getCategories():void{
    this.productService.getCategories().subscribe(
      (response:string[]) => {
        this.categories = response;
        //console.log(this.categories);
      },
      (error) => {
        console.log("Error obteniendo categorias: ", error);
      }
    );
  }

  getProductsByCategorie(): void{
    if(this.selectedCategory===""){
      this.filteredProducts=this.products;
    } else{
      this.productService.getProductsByCategorie(this.selectedCategory).subscribe(
        (response:Product[]) => {
          this.filteredProducts = response
        },
        (error) => {
          console.log("Error filtrando productos: ", error);
        }
      );
    }
  }


  
}
