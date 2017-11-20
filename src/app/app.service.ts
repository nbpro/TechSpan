import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


export interface AppConfig{
  user:{
      name:string;
      locale?:{
          tz:string,
          language:string
      }
  }
}

@Injectable()
export class AppService {
  
  private _config:any = {
    user:{
      name:"Neeraj"
    }
  };

  constructor() { }

  getState():Observable<any>{
    return Observable.of(this.buildState());
  }

  private buildState():any{
    return this._config;
  }

}
