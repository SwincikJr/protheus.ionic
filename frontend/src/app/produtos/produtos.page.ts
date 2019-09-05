import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, AlertController } from '@ionic/angular';
import { FindModal } from './FindModal/find.modal';

@Component({
  selector: 'app-produtos',
  templateUrl: 'produtos.page.html',
  styleUrls: ['produtos.page.scss'],
})
export class ProdutosPage {

  constructor(private http: HttpClient, public modalController: ModalController, public alertController: AlertController) 
  {

    this.produtos = { Produtos: [] }
    this.page = 1
    
    this.http.get('http://localhost:8080/rest/produto/').subscribe((response) => {
      console.log(response);
      this.produtos = response
    });
  
  }

  public produtos
  public page

  nextPage() {

    //let nextFirstItem = (this.page * 10) + 1
    //let previousList = this.produtos

    //this.http.get('http://localhost:8080/rest/produto/' + nextFirstItem).subscribe(response => {
      //console.log(response);
      //this.produtos = response
      //if(this.produtos.Produtos.length > 0)
      //{
        //this.page++
      //}
      //else
      //{
        //alert("Fim da Lista")
        //this.produtos = previousList
      //}
    //})

    this.presentAlert();

  }

  previousPage() {

    if(this.page > 1)
    {
      this.page--
      this.http.get('http://localhost:8080/rest/produto/' + ((this.page - 1) * 10 + 1)).subscribe(response => {
        console.log(response);
        this.produtos = response
      })
    }
  }

  async presentModal() {
  
    const modal = await this.modalController.create({
      component: FindModal
    })

    modal.onWillDismiss().then(data => { this.tryFind(data) })

    return await modal.present()
  
  }

  async presentAlert() {

    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Fim da lista de produtos.',
      buttons: ['Ok']
    });

    await alert.present();

  }

  async tryFind(data)
  {
    console.log(data)
    if(data.data.search)
    {
      if(data.data.data == "")
      {
        const alert = await this.alertController.create({
          header: 'Alerta',
          message: 'Digite um codigo para busca',
          buttons: ['Ok']
        });
    
        await alert.present();

        return

      }

      // requisição na API com código

    }
  }

}