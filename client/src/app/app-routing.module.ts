import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CreateBookComponent } from './components/create-book/create-book.component';


const routes: Routes = [
  {path:'books', component: BooksComponent},
  {path: 'createBook', component: CreateBookComponent},
  {path:'**', pathMatch:'full', component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
