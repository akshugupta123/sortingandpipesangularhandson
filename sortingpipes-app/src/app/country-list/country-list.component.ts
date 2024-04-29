import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countries: string[] = ['India', 'America']; // Initialize with some countries
  newCountry: string = '';
  sortOrder: string = 'asc'; // Default sorting order

  addCountry() {
    if (this.newCountry.trim()) {
      this.countries.push(this.newCountry.trim());
      this.newCountry = '';
    }
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}
