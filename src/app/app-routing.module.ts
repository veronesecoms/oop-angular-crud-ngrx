import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import './pages/usuario/usuario.module';

const routes: Routes = [
  { path: '', loadChildren: './pages/usuario/usuario.module#UsuarioModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
