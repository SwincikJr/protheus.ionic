import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProdutosPage } from './produtos.page';
import { FindModal } from './FindModal/find.modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProdutosPage
      },
      {
        path: 'findModal',
        component: FindModal
      }
    ])
  ],
  declarations: [ProdutosPage, FindModal]
})

export class ProdutosPageModule {}