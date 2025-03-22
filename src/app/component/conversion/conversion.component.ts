import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss'
})
export class ConversionComponent {
  public rawCurrencies: any;
  public currencyFrom: string = '';
  public currencyTo: string = '';
  public amount: number = 0;
  public convertedValue: number = 0;
  private currencySub: Subscription;
  private convertSub: Subscription;

  constructor(private apiService: ApiService) {
    this.rawCurrencies = {};
  }

  ngOnInit() {
    //  get the currencies
      this.currencySub = this.apiService.getCurrencies().subscribe({
      next: (res) => {
        this.rawCurrencies = res;
      },
      error: (err) => {
        console.error('Error fetching currencies:', err);
      }
    });
}

  public convertAmount(): number {
    if (this.currencyFrom === ''|| this.currencyTo === '' || this.amount === 0) {
        return 0;
    }
    this.convertSub = this.apiService.convertAmount(this.currencyFrom, this.currencyTo, this.amount).subscribe({
      next: (res) => {
        this.convertedValue = res;
        console.log('value: ', this.convertedValue)
      },
      error: (err) => {
        console.error('Error doing the conversion:', err);
      }
    });

    this.convertSub.unsubscribe();
    return this.convertedValue;
  }

  ngOnDestroy() {
    this.currencySub.unsubscribe();
  }
}
