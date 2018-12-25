import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Variation } from '../variation';
import { ProductService } from '../product.service';
import { VariationService } from '../variation.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  selectedOption: number;
  tasks: Product[];
  variations: Variation[];
  public json = environment.format_json;

  constructor(
        private taskService: ProductService,
        private variationService: VariationService,
    ) { }

  ngOnInit() {
      this.getTasks();
      this.getVariations();
  }
  getTasks(): void {
        this.taskService.getTasks()
            .subscribe(Tasks => this.tasks = Tasks);
    }
    getVariations(): void {
      this.variationService.getVariations()
          .subscribe(Variations => this.variations = Variations);
    }
    onSubmit(): void {
        const varia: any = [{purchased_entity_type: 'commerce_product_variation',
                purchased_entity_id: this.selectedOption,
                quantity: '1'}];
            this.variationService.addTask(varia)
                .subscribe(data => {
                    console.log(this.selectedOption);
                    this.variations.push(data);
                });
    }

}
