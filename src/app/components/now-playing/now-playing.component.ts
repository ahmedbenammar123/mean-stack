import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private moviesService:MoviesService) { }
  result:any=[];
  pageForm: FormGroup;
  ngOnInit() {
    this.pageForm = this.formBuilder.group({
      page: ['1'],
    })
    this.moviesService.getAllNewPlaying(this.pageForm.value).subscribe(
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
    this.moviesService.getAllNewPlaying(this.pageForm.value).subscribe(
      (Response)=>{
      this.result=Response.resp.results
       // console.log("here result",this.result); 
      }
    )

  }

}
