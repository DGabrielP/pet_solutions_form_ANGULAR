import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productId: string;
  product: Product;
  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productForm = this.fb.group({
      comercial_name: [''],
      description: [''],
      model: [''],
      stock: [0],
      price: [0]
    });
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    this.productService.getProduct(this.productId).subscribe(
      (data) => {
        this.product = data;
        this.productForm.patchValue({
          comercial_name: this.product.comercial_name,
          description: this.product.description,
          model: this.product.model,
          stock: this.product.stock,
          price: this.product.price
        });
      },
      (error) => {
        console.error('Error fetching product', error);
      }
    );
  }

  onSubmit(): void {
    this.productService.updateProduct(this.productId, this.productForm.value).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }
}
