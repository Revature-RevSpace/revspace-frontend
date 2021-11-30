import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ImageService {

  //CODE FOR IMGBB 
  private apiKey: string = '54a88bf42f4fe7281b1ba9ba2c242ecb';


  constructor(private http:HttpClient) { }
 
 //CODE FOR IMGBB UPLOAD
 upload(file: File): Observable<string>{
   const formData = new FormData();
   formData.append('image', file);
   return this.http.post<any>('https://api.imgbb.com/1/upload', formData, {params: {key:this.apiKey}})
   .pipe(map((response)=>response['data']['url']));      
 }
 
  


}
