﻿import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'pc-categories-page',
  templateUrl: './categories-page.component.html'
})
export class CategoriesPageComponent implements OnInit {
  loading = false;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.categoryService.init()
      .then(() => {
        this.loading = false;
      });
  }

  deleteRecord(id: number): void {
    if (confirm(`Are you sure you want to delete "${this.categoryService.getCurrent().name}" from the categories list?`)) {
      this.loading = true;
      this.categoryService.remove(id)
        .then(() => {
          this.loading = false;
        });
    }
  }

  save(): void {
    if (confirm(`Are you sure you want to save "${this.categoryService.getCurrent().name}" changes`)) {
      this.loading = true;
      this.categoryService.save()
        .then(() => {
          this.loading = false;
        });
    }
  }
}
