import { Component, Input, OnInit } from '@angular/core';
import { SelectModel } from 'src/app/component/search-bar/select.model';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

	@Input() option: SelectModel[];
	@Input() selectedOption: SelectModel;
	@Input() placeholder: string;
	searchValue: string = '';

	constructor() { }

	ngOnInit(): void {
		this.selectedOption = this.selectedOption || this.option[0];
	}

}

