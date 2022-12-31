import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() x:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToDisplayMovie(id:any){
    // alert(id);
    this.router.navigate([`displayMovie/${id}`]);
  }

  sizeEtoile(a: number) {
    if (a >= 5 && a < 6 ) {
      return "1";

    }
    else if (a >= 6 && a < 7) {
      return "2";
    }
    else {

      return "3";
    }


  }

}
