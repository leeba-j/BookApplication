import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

const routes: Routes = [
  {path:'books', component: BooksComponent},
  {path: 'createBook', component: CreateBookComponent},
  {path:'editBook', component: EditBookComponent},
  {path: 'deleteBook', component: DeleteBookComponent},
  {path:'**', pathMatch:'full', component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
