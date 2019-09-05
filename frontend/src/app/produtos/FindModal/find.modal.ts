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

    public codigo = ""

    dismiss(event) {

        let data = null
        let search = false

        if(event == 's')
        {
            data = this.codigo
            search = true
        }
        else
        {
            data = {}
        }

        this.modalController.dismiss({
            'search': search,
            'data': data
        });

    }

}
