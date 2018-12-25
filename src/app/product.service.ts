import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
    public mainUrl = environment.mainUrl;
    public json = environment.format_json;

    private tasks = new BehaviorSubject([]);
    private ProductList: Product[];


    constructor(private http: HttpClient) { }

    getTasks() {
        if (!this.ProductList || this.ProductList.length === 0) {
            this.initializeTasks();
        }
        return this.tasks.asObservable();
    }
    initializeTasks() {
        const url = `${this.mainUrl}own_product/product${this.json}`;
        const Products = this.http.get<Product[]>(url);
        const Products_id = Products.subscribe(tasks => {
            this.tasks.next(tasks);
        });
        return Products_id;
    }
}
