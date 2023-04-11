import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  // alttakı kısım router kısmının calısması ıcın olması gereken bır koddur
  { path: '', redirectTo: 'start', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
