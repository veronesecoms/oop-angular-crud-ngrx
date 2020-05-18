import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from 'src/app/store/modules/user/user.effects';
import {
  userFeatureKey,
  userReducer
} from './../../store/modules/user/user.reducer';
import { UsuarioGrid } from './usuario.component';
import { UsuarioRoutingModule } from './usuario.routing.module';

@NgModule({
  declarations: [UsuarioGrid],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userFeatureKey, userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  entryComponents: [],
  providers: []
})
export class UsuarioModule {}
