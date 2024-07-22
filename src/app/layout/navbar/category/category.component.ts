import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Category } from '../../../models/category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] | undefined;
  currentActivatedCategory: Category;

  constructor(private categoryService: CategoryService) {
    this.currentActivatedCategory = this.categoryService.getCategoryByDefault();
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
}
