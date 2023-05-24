import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { FormChildDataComponent } from './form-child-data/form-child-data.component';
import { FormChildInterestsComponent } from './form-child-interests/form-child-interests.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  {path: "form1", component: FormChildDataComponent},
  {path: "form2", component: FormChildInterestsComponent},
  {path: "results", component: ResultsPageComponent},
  {path: "**", component: StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
