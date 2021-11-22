import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(data: any): string {
    var date = new Date(data);
    let format = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.toLocaleTimeString();
    return format;
  }
}
