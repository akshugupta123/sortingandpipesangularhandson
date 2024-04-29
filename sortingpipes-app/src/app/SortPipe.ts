import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: string[], order: string = 'asc'): string[] {
    console.log('Array before sorting:', array);

    if (!array || array.length === 0) {
      return array;
    }

    array.sort((a, b) => {
      if (order === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });

    console.log('Array after sorting:', array);
    return array;
  }
}
