import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = '/api/Category'

  constructor(private httpClient:HttpClient) { }

  getCategories(): Observable<any>
	{		
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllCategories").pipe
		(
	
			catchError(this.handleError)
		);
	}
  
   getCategoryByCategoryId(categoryId: number): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveCategoryById/" + categoryId).pipe
		(
			catchError(this.handleError)
		);
	}

	getCategoriesByRecipeId(recipeId: number): Observable<any>
	{		
		return this.httpClient.get<any>(this.baseUrl + "/retrieveCategoriesByRecipeId/" + recipeId).pipe
		(
			catchError(this.handleError)
		);
	}
  
	private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = "";
		
		if (error.error instanceof ErrorEvent) 
		{		
			errorMessage = "An unknown error has occurred: " + error.error.message;
		} 
		else 
		{		
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		}
		
		console.error(errorMessage);
		
		return throwError(errorMessage);		
  }
  

}
