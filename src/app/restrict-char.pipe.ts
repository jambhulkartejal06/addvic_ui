import { visitValue } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restrictChar',
  pure: false
})
export class RestrictCharPipe implements PipeTransform {

  transform(value: any, arg1: any): any {
    if(value.length > arg1){
    return (value.slice(0,(arg1-3)) + '...'); 
  }else{
    return value;
  }
  }
}
