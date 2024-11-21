import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Nike Black', price: 50.0, image_url: './nike1.png', description: 'The insole are Confortable so you can wear them everyday'},
    {id: 2, name: 'Nike Black', price: 50.0, image_url: './nike1.png', description: 'The insole are Confortable so you can wear them everyday'},
    {id: 3, name: 'Nike Black', price: 50.0, image_url: './nike1.png', description: 'The insole are Confortable so you can wear them everyday'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
