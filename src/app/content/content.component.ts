import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tasks: Product[];

    constructor(
        private taskService: ProductService,
    ) { }

  ngOnInit() {
      this.getTasks();
  }

    getTasks(): void {
        this.taskService.getTasks()
            .subscribe(Tasks => this.tasks = Tasks);
    }

}
