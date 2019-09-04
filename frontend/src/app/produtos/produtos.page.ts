import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produtos',
  templateUrl: 'produtos.page.html',
  styleUrls: ['produtos.page.scss'],
})
export class ProdutosPage {

  constructor(private http: HttpClient) 
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

    let nextFirstItem = (this.page * 10) + 1
    let previousList = this.produtos

    this.http.get('http://localhost:8080/rest/produto/' + nextFirstItem).subscribe(response => {
      console.log(response);
      this.produtos = response
      if(this.produtos.Produtos.length > 0)
      {
        this.page++
      }
      else
      {
        alert("Fim da Lista")
        this.produtos = previousList
      }
    })
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

}