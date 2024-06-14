import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      comercial_name: [''],
      description: [''],
      model: [''],
      stock: [0],
      price: [0]
    });
  }

  onSubmit(): void {
    this.productService.createProduct(this.productForm.value).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error creating product', error);
      }
    );
  }
}
