import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ImageInfo{
  link:string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images:object[] = [];
  private url: string = 'https://api.imgur.com/3/image';
  private clientId: string = '44360ac4578102b';
  imageLink:any;
 
 
  constructor(private http:HttpClient) { }
  
  async uploadImage(imageFile:File){
    let formData = new FormData();
    formData.append('image', imageFile, imageFile.name);
 
    let header = new HttpHeaders({
      "authorization": 'Client-ID '+this.clientId
    });
   
    const imageData = await this.http.post(this.url, formData, {headers:header}).toPromise();
    this.imageLink = imageData['data'].link;
 
    let newImageObject:ImageInfo = {
      link:this.imageLink
    };
 
    this.images.unshift(newImageObject);
}
getImages(){
  return this.images; 
}
}
