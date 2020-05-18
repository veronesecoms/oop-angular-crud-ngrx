import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FuncionarioGrid } from './funcionario.component';
import { FuncionarioRoutingModule } from './funcionario.routing.module';

@NgModule({
  declarations: [FuncionarioGrid],
  imports: [CommonModule, FuncionarioRoutingModule, ReactiveFormsModule],
  providers: [],
  exports: [FuncionarioGrid]
})
export class FuncionarioModule {}
