import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearSymbols'
})
export class ClearSymbolsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace("_", " ");
  }

}
