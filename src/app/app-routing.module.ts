import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayMovieComponent } from './components/display-movie/display-movie.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PopularComponent } from './components/popular/popular.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';



const routes: Routes = [
    //http://localhost;4200/popular
    {path:'',component:PopularComponent},
    //http://localhost;4200/newPlaying
    {path:'topRated',component:TopRatedComponent},
    //http://localhost;4200/newPlaying
    {path:'newPlaying',component:NowPlayingComponent},
    //http://localhost;4200/upComing
    {path:'upComing',component:UpcomingComponent},
    //http://localhost;4200/displayMovie/:id
    {path:'displayMovie/:id',component:DisplayMovieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
