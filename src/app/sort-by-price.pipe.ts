import { Pipe, PipeTransform } from '@angular/core';
import { Price } from './price';

@Pipe({
  name: 'sortByPrice',
  standalone: false
})
export class SortByPricePipe implements PipeTransform {

  transform(value: Price[], order: "asc" | "desc" = "asc"): Price[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }
}
