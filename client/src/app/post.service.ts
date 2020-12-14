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

  public updatePostById(id, data): Observable<object> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  public deletePostById(id): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
