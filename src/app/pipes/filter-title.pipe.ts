import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  transform(objs:any,term:any) {
    if (term === undefined) {
      return objs;
    }
    return objs.filter((obj)=> {
      return (obj.title.toLowerCase().includes(term.toLowerCase()) 
      || obj.title.toLowerCase().includes(term.toLowerCase()));
    })
  }

}
