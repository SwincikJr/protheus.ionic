import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'produto-find-modal',
  templateUrl: 'find.modal.html',
  styleUrls: ['find.modal.scss'],
})

export class FindModal 
{

    constructor(public modalController: ModalController) {}

    dismiss() {

        this.modalController.dismiss({
            'dismissed': true
        });

    }

}
