import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/v1/posts';

  public createPost(data): Observable<object> {
    return this.http.post(this.url, data);
  }

  public getAllPosts(): Observable<object> {
    return this.http.get(this.url);
  }

  public getPostById(id): Observable<object> {
    return this.http.get(`${this.url}/${id}`);
  }

  public deletePostById(id): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
