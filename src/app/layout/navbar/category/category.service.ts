import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category, CategoryName } from '../../../models/category.model';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  private categories: Category[] = [
    {
      icon: 'eye',
      displayName: 'Todos',
      technicalName: 'ALL',
      activated: false,
    },
    {
      icon: 'eye',
      displayName: 'Vistas Incríveis',
      technicalName: 'AMAZING_VIEWS',
      activated: false,
    },
    {
      icon: 'exclamation',
      displayName: 'UAU!',
      technicalName: 'OMG',
      activated: false,
    },
    {
      icon: 'tree',
      displayName: 'Casas na Árvore',
      technicalName: 'TREEHOUSES',
      activated: false,
    },
    {
      icon: 'umbrella-beach',
      displayName: 'Praia',
      technicalName: 'BEACH',
      activated: false,
    },
    {
      icon: 'tractor',
      displayName: 'Fazendas',
      technicalName: 'FARMS',
      activated: false,
    },
    {
      icon: 'house',
      displayName: 'Casas Pequenas',
      technicalName: 'TINY_HOMES',
      activated: false,
    },
    {
      icon: 'water',
      displayName: 'Lago',
      technicalName: 'LAKE',
      activated: false,
    },
    {
      icon: 'box',
      displayName: 'Contêineres',
      technicalName: 'CONTAINERS',
      activated: false,
    },
    {
      icon: 'tent',
      displayName: 'Acampamento',
      technicalName: 'CAMPING',
      activated: false,
    },
    {
      icon: 'chess-rook',
      displayName: 'Castelo',
      technicalName: 'CASTLE',
      activated: false,
    },
    {
      icon: 'person-skiing',
      displayName: 'Esqui',
      technicalName: 'SKIING',
      activated: false,
    },
    {
      icon: 'fire',
      displayName: 'Trailers',
      technicalName: 'CAMPERS',
      activated: false,
    },
    {
      icon: 'snowflake',
      displayName: 'Ártico',
      technicalName: 'ARTIC',
      activated: false,
    },
    {
      icon: 'sailboat',
      displayName: 'Barco',
      technicalName: 'BOAT',
      activated: false,
    },
    {
      icon: 'mug-saucer',
      displayName: 'Cama e Café',
      technicalName: 'BED_AND_BREAKFASTS',
      activated: false,
    },
    {
      icon: 'lightbulb',
      displayName: 'Quartos',
      technicalName: 'ROOMS',
      activated: false,
    },
    {
      icon: 'earth-europe',
      displayName: 'Casas de Terra',
      technicalName: 'EARTH_HOMES',
      activated: false,
    },
    {
      icon: 'tower-observation',
      displayName: 'Torre',
      technicalName: 'TOWER',
      activated: false,
    },
    {
      icon: 'hill-rockslide',
      displayName: 'Cavernas',
      technicalName: 'CAVES',
      activated: false,
    },
    {
      icon: 'champagne-glasses',
      displayName: 'Luxos',
      technicalName: 'LUXES',
      activated: false,
    },
    {
      icon: 'kitchen-set',
      displayName: 'Cozinha do Chef',
      technicalName: 'CHEFS_KITCHEN',
      activated: false,
    },
  ];

  private changeCategory$: BehaviorSubject<Category> =
    new BehaviorSubject<Category>(this.getCategoryByDefault());

  changeCategoryObs = this.changeCategory$.asObservable();

  changeCategory(category: Category): void {
    this.changeCategory$.next(category);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryByDefault(): Category {
    return this.categories[0];
  }

  getCategoriesByTechnicalName(technicalName: CategoryName): Category | undefined {
    return this.categories.find(
      (category) => category.technicalName === technicalName
    );
  }
}
