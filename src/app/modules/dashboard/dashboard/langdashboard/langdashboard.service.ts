import {Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LangDashBoardService {
    value:string;
    baseUrl:string = `https://api.github.com/search/repositories`;
    queryUrl:string = `?q=`;
    constructor(private http: Http){

    }
    getAllReposFromGithub(lang:string){
        const url = `${this.baseUrl}${this.queryUrl}${lang}`;
        return this.http.get(url).map(this.extractData);
    }

    extractData(res){
        return res.json();
    }

    getAllUser(lang:string,page:number =0){
        const url = `${this.baseUrl}${this.queryUrl}`
    }
}
