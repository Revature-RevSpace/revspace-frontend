import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(data: any): string {
    data = data * 1000;
    var date = new Date(data);
    let format = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
    return format;
  }
}
