import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectModel } from 'src/app/component/search-bar/select.model';
import { Categories } from 'src/app/core/Model/categories.model';

@Injectable({
	providedIn: 'root'
})
export class DropdownService {

	private MockCategoriesData: SelectModel[] = []

	private MockBakeryData: SelectModel[] = [
		{
			name: 'Bakery',
			code: 0
		},
		{
			name: 'Bakery 2',
			code: 2
		},
		{
			name: 'Bakery 3',
			code: 3
		},
		{
			name: 'Bakery 4',
			code: 4
		},
		{
			name: 'Bakery 5',
			code: 5
		},
		{
			name: 'Bakery 6',
			code: 6
		}
	];
	private MockFruitVegetablesData: SelectModel[] = [
		{
			name: 'Fruit and vegetables',
			code: 0
		},
		{
			name: 'Fruit and vegetables 2',
			code: 2
		},
		{
			name: 'Fruit and vegetables 3',
			code: 3
		},
		{
			name: 'Fruit and vegetables 4',
			code: 4
		},
		{
			name: 'Fruit and vegetables 5',
			code: 5
		},
		{
			name: 'Fruit and vegetables 6',
			code: 6
		}
	];
	private MockDrinksData: SelectModel[] = [
		{
			name: 'Drinks',
			code: 0
		},
		{
			name: 'Drinks 2',
			code: 2
		},
		{
			name: 'Drinks 3',
			code: 3
		},
		{
			name: 'Drinks 4',
			code: 4
		},
		{
			name: 'Drinks 5',
			code: 5
		},
		{
			name: 'Drinks 6',
			code: 6
		}
	];
	private MockMeatFishData: SelectModel[] = [
		{
			name: 'Meat and fish',
			code: 0
		},
		{
			name: 'Meat and fish 2',
			code: 2
		},
		{
			name: 'Meat and fish 3',
			code: 3
		},
		{
			name: 'Meat and fish 4',
			code: 4
		},
		{
			name: 'Meat and fish 5',
			code: 5
		},
		{
			name: 'Meat and fish 6',
			code: 6
		}
	];
	private MockKitchenData: SelectModel[] = [
		{
			name: 'Kitchen',
			code: 0
		},
		{
			name: 'Kitchen 2',
			code: 2
		},
		{
			name: 'Kitchen 3',
			code: 3
		},
		{
			name: 'Kitchen 4',
			code: 4
		},
		{
			name: 'Kitchen 5',
			code: 5
		},
		{
			name: 'Kitchen 6',
			code: 6
		}
	];
	private MockSpecialNutritionData: SelectModel[] = [
		{
			name: 'Special Nutrition',
			code: 0
		},
		{
			name: 'Special Nutrition 2',
			code: 2
		},
		{
			name: 'Special Nutrition 3',
			code: 3
		},
		{
			name: 'Special Nutrition 4',
			code: 4
		},
		{
			name: 'Special Nutrition 5',
			code: 5
		},
		{
			name: 'Special Nutrition 6',
			code: 6
		}
	];
	private MockBabyData: SelectModel[] = [
		{
			name: 'Baby',
			code: 0
		},
		{
			name: 'Baby 2',
			code: 2
		},
		{
			name: 'Baby 3',
			code: 3
		},
		{
			name: 'Baby 4',
			code: 4
		},
		{
			name: 'Baby 5',
			code: 5
		},
		{
			name: 'Baby 6',
			code: 6
		}
	];
	private MockPharmacyData: SelectModel[] = [
		{
			name: 'Pharmacy',
			code: 0
		},
		{
			name: 'Pharmacy 2',
			code: 2
		},
		{
			name: 'Pharmacy 3',
			code: 3
		},
		{
			name: 'Pharmacy 4',
			code: 4
		},
		{
			name: 'Pharmacy 5',
			code: 5
		},
		{
			name: 'Pharmacy 6',
			code: 6
		}
	];


	constructor() { }

	getAllCategoriesType(): Observable<SelectModel[]> {
		for (let index = 0; index < Object.keys(CategoriesType).length; index++) {
			if (typeof CategoriesType[index] === 'string') {
				this.MockCategoriesData.push(
					{
						name: CategoriesType[index] as string,
						code: index
					}
				)
			}

		}
		return of(this.MockCategoriesData);
	}

	getAllCategoriesData(): Observable<Categories> {
		let data: Categories = {
			bakery: this.MockBakeryData,
			fruitAndVegetables: this.MockFruitVegetablesData,
			meatAndFish: this.MockMeatFishData,
			drinks: this.MockDrinksData,
			kitchen: this.MockKitchenData,
			specialNutrition: this.MockSpecialNutritionData,
			baby: this.MockBabyData,
			pharmacy: this.MockPharmacyData
		}
		console.log(data)
		return of(data);
	}

	getBakeryData(): Observable<SelectModel[]> {
		return of(this.MockBakeryData);
	}

	getFruitVegeData(): Observable<SelectModel[]> {
		return of(this.MockFruitVegetablesData);
	}

	getMeatFishData(): Observable<SelectModel[]> {
		return of(this.MockMeatFishData);
	}

	getDrinksData(): Observable<SelectModel[]> {
		return of(this.MockDrinksData);
	}

	getKitchenData(): Observable<SelectModel[]> {
		return of(this.MockKitchenData);
	}

	getSpecialNutritionData(): Observable<SelectModel[]> {
		return of(this.MockSpecialNutritionData);
	}

	getBabyData(): Observable<SelectModel[]> {
		return of(this.MockBabyData);
	}

	getPharmacyData(): Observable<SelectModel[]> {
		return of(this.MockPharmacyData);
	}
}

enum CategoriesType {
	'All categories' = 0,
	'Bakery' = 1,
	'Fruit and vegetables' = 2,
	'Meat and Fish' = 3,
	'Drinks' = 4,
	'Kitchen' = 5,
	'Special nutrition' = 6,
	'Baby' = 7,
	'Pharmacy' = 8,
}
