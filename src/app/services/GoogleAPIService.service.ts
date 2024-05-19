import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAPIService {
  constructor() { }



}

class StaticStreetViewImageRequest {

    readonly baseURL: string = "https://maps.googleapis.com/maps/api/streetview?";  

    location: string;
    height: number;
    width: number;
    key: string;
    signature?: string;
    heading?: number;
    fov?: string | 90;
    pitch?: number | 0;
    radius?: number | 50;
    errorCode?: boolean | false;
    source?: string | "outdoor";

    constructor(location: string, height: number, width: number, key: string,
        signature?: string, heading?: number, fov?: string
    ){
        this.location = location;
        this.height = height;
        this.width = width;
        this.key = key;
        this.heading = heading;
    }
}

class StaticStreetViewImage {

}

class StaticStreetViewImageMetaData {
    
}