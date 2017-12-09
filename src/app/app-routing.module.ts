import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongComponent } from './component/song/song.component';

const routes: Routes = [
  { path:'', component: SongComponent, pathMatch: 'full' },
  { path:'song', component: SongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
