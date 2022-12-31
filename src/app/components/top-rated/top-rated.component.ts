import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private moviesService:MoviesService) { }
  result:any=[];
  pageForm: FormGroup;
  ngOnInit() {
    this.pageForm = this.formBuilder.group({
      page: ['1'],
    })
    this.moviesService.getAllTopRated(this.pageForm.value).subscribe(
      (Response)=>{
      this.result=Response.resp.results
      // console.log("here result",this.result); 
      }
    )
  
  }
  onSelect(event){
    console.log("here event",event.target.value);
    this.pageForm = this.formBuilder.group({
      page: [event.target.value],
    })
    this.moviesService.getAllTopRated(this.pageForm.value).subscribe(
      (Response)=>{
      this.result=Response.resp.results
       // console.log("here result",this.result); 
      }
    )

  }
}
