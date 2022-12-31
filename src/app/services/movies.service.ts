import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesURL: string = "http://localhost:3000/movies";
  constructor(private http: HttpClient) { }
  getAllPopular(page:any) {
      return this.http.post<{resp:any}>(this.moviesURL+"/popular",page);
  }
  getAllTopRated(page:any) {
      return this.http.post<{resp:any}>(this.moviesURL+"/topRated",page);
  }
  getAllNewPlaying(page:any) {
      return this.http.post<{resp:any}>(this.moviesURL+"/newPlaying",page);
  }
  getAllUpComing(page:any) {
      return this.http.post<{resp:any}>(this.moviesURL+"/upComing",page);
  }
  displayMovieById(id:any) {
      return this.http.get<{movie:any}>(`${this.moviesURL}/${id}`);
  }
}
