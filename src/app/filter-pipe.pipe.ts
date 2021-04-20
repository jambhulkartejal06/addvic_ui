import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  // transform(array: any[], id: number): any[] {//sort by name
  //   array.sort((a: any, b: any) => {
  //     if (a[id] < b[id]) {
  //       return -1;
  //     } else if (a[id] > b[id]) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   return array;
  // }
  transform(items: any[], value: string, label:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
    }
   }



