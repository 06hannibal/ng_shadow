import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Variation } from './variation';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from './messages.service';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const httpjson = environment.httpHaljson;

@Injectable()
export class VariationService {
  public mainUrl = environment.mainUrl;
  public json = environment.format_json;

  private variations = new BehaviorSubject([]);
  private VariationList: Variation[];

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getVariations() {
    if (!this.VariationList || this.VariationList.length === 0) {
      this.initializeVariations();
    }
    return this.variations.asObservable();
  }
  initializeVariations() {
    const url = `${this.mainUrl}own_product/variations${this.json}`;
    const Var = this.http.get<Variation[]>(url);
    const Var_id = Var.subscribe(variations => {
      this.variations.next(variations);
    });
    return Var_id;
  }
    addTask (variation: Variation): Observable<Variation> {
        const url = `${this.mainUrl}cart/add${this.json}`;
        return this.http.post<Variation>(url, variation, httpjson)
            .pipe(
                catchError(this.handleError('addTask', variation))
            );
    }
  private log(message: string) {
    this.messageService.add('VariationService: ' + message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
