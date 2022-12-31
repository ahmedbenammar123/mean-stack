import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,private moviesService:MoviesService) { }
  id:any;
  movie:any={};
  ngOnInit() {
    this.id =this.activateRoute.snapshot.paramMap.get('id');
    this.moviesService.displayMovieById(this.id).subscribe(
      (Response)=>{
      this.movie=Response.movie
      //  console.log("here movie",this.movie); 
      }
    )
  }

}
