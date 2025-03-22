import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Currency } from '../../model/currency.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss'
})
export class ConversionComponent {
  public currencies: Currency[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCurrencies().subscribe({
      next: (res: Currency[]) => {
        this.currencies = res;
        console.log('Fetched data:', this.currencies);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
