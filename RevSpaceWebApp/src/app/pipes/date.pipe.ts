import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newDate'
})
export class DatePipe implements PipeTransform {

  transform(data: any): string {
    data = data;
    var timeZoneOffsetDate = new Date();
    var date = new Date(data + 60*1000*timeZoneOffsetDate.getTimezoneOffset());
    let format = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
    return format;
  }
}
