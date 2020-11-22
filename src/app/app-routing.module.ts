import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcasaComponent } from './acasa/acasa.component';
import { VizualizareComponent } from './vizualizare/vizualizare.component';
import { ContactComponent } from './contact/contact.component';
import { ProiecteComponent } from './proiecte/proiecte.component';
import { RedirectComponent } from './redirect/redirect.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  { path: '', component: AcasaComponent, pathMatch: 'full' },
  { path: 'vizualizare', component: VizualizareComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'proiecte', component: ProiecteComponent },
  { path: 'design', component: DesignComponent },
  { path: '**', component: RedirectComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
