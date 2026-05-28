import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class ProductsComponent implements OnInit {
    showModal = false;
    productForm!: FormGroup;
    products = [
        { id: 1, nombre: 'Producto A', precio: 100, stock: 50 },
        { id: 2, nombre: 'Producto B', precio: 200, stock: 30 },
        { id: 3, nombre: 'Producto C', precio: 150, stock: 75 }
    ];

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm() {
        this.productForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(3)]],
            precio: ['', [Validators.required, Validators.min(0)]],
            stock: ['', [Validators.required, Validators.min(0)]]
        });
    }

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
        this.productForm.reset();
    }

    addProduct() {
        if (this.productForm.valid) {
            const newProduct = {
                id: this.products.length + 1,
                ...this.productForm.value
            };
            this.products.push(newProduct);
            this.closeModal();
        }
    }
}
