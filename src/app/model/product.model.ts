//Interfaz donde tenemos las variables del producto de la api
export interface Product {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  }

//Los interrogantes sirven para decir que estos atributos no son obligatorios por ejemplo a la hora de añadir un nuevo producto