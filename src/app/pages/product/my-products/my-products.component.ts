import { Component, OnInit } from '@angular/core';

import { Options } from 'ng5-slider';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  transactions : Array<{}>;
  nomeT;
  marcaT;
  canaisT:Array<{}>;
  descricaoT;
  coresT:Array<{}>;
  tagsT: Array<{}>;
  fotoT;
  fotoT1;
  
  breadCrumbItems: Array<{}>;

  pricevalue = 250;
  minVal = 100;
  maxVal = 800;
  priceoption: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    },
  };

  constructor(private modalService: NgbModal, private router: Router) {
   }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Produtos' }, { label: 'Meus Produtos', active: true }];
    this.transactions = [
      {
        nome: 'Headphone JBL Tune, Bluetooth',
        marca: 'JBL',
        data: '07 Oct, 2019',
        precoVenda: 'R$ 409,9',
        precoCusto:  'R$ 385,1',
        descricao: 'O iPhone 11 tem novo sistema de câmera dupla para capturar mais do que você vê e ama. Ele vem com o chip mais rápido em um smartphone. E bateria para o dia todo: você faz muito e recarrega pouco. Também tem a melhor qualidade de vídeo em um celular. Assim, suas memórias ficam inesquecíveis de verdade. Novo sistema de câmera dupla. Amplie os horizontes das suas fotos indo da câmera grande-angular para a novíssima ultra-angular. Também veja ? e capture ? mais com a interface redesenhada, que usa a câmera ultra-angular para mostrar o que está fora do enquadramento. E descubra como gravar e editar vídeos agora é tão simples quanto tirar fotos. É a câmera mais popular do mundo, com uma nova perspectiva. Grave e edite vídeos com a maior qualidade em um smartphone. Ambas as câmeras do iPhone 11 gravam vídeos 4K nítidos a 60 qps. A nova câmera ultra-angular captura 4x mais de qualquer cena e é ideal para objetos em movimento, como seu cachorro correndo no parque. E, com o zoom de áudio, o som se aproxima junto com a imagem. Perfeito para filmar a apresentação de fim de ano na escola dos seus filhos. Além disso, editar vídeos ficou tão simples quanto editar fotos Nova câmera ultra-angular.',
        fotos1 : 'assets/images/product/fone/1.jpg',
        fotos11 : 'assets/images/product/fone/2.jpg',
        fotos2 : 'assets/images/product/mercado.png',
        canais: ['Mercado Livre', 'Bateria recarregável',],
        tags: ['JBL Pure Bass Sound', 'Bateria recarregável',],
        cores: ['azul','verde'],
        index: 1,
      },
      {
        nome: 'SSD Lexar NS100, 256GB	',
        marca: 'Lexar',
        data: '07 Oct, 2019',
        precoVenda: 'R$ 259,9',
        precoCusto:  'R$ 230,47',
        descricao: 'SSD Lexar NS100, 128GB, SATA, Leitura 520MB/s - LNS100-128RB',
        canais: ['Mercado Livre', 'Amazon','B2W'],
        fotos1 : 'assets/images/product/ssd/1.jpg',
        fotos11 : 'assets/images/product/ssd/2.jpg',
        fotos2 : 'assets/images/product/mercado.png',
        tags: [' Capacidade: 256 GB	', '2.5" SATA III (6Gb/s)',' 520 MB/s','128 TB',' DWPD: 0.46','- Dimensões: 100.2 x 69.85 x 7 mm'],
        cores: ['azul','verde'],
        index: 1,
      },
      {
        nome: 'iPhone 11 256G	',
        marca: 'Apple',
        data: '07 Oct, 2019',
        precoVenda: 'R$ 5499',
        precoCusto:  'R$ 5199',
        descricao: 'O iPhone 11 tem novo sistema de câmera dupla para capturar mais do que você vê e ama. Ele vem com o chip mais rápido em um smartphone. E bateria para o dia todo: você faz muito e recarrega pouco. Também tem a melhor qualidade de vídeo em um celular. Assim, suas memórias ficam inesquecíveis de verdade. Novo sistema de câmera dupla. Amplie os horizontes das suas fotos indo da câmera grande-angular para a novíssima ultra-angular. Também veja ? e capture ? mais com a interface redesenhada, que usa a câmera ultra-angular para mostrar o que está fora do enquadramento. E descubra como gravar e editar vídeos agora é tão simples quanto tirar fotos. É a câmera mais popular do mundo, com uma nova perspectiva. Grave e edite vídeos com a maior qualidade em um smartphone. Ambas as câmeras do iPhone 11 gravam vídeos 4K nítidos a 60 qps. A nova câmera ultra-angular captura 4x mais de qualquer cena e é ideal para objetos em movimento, como seu cachorro correndo no parque. E, com o zoom de áudio, o som se aproxima junto com a imagem. Perfeito para filmar a apresentação de fim de ano na escola dos seus filhos. Além disso, editar vídeos ficou tão simples quanto editar fotos Nova câmera ultra-angular.',
        canais: ['Mercado Livre', 'Amazon','B2W'],
        fotos1 : 'assets/images/product/iphone/1.jpg',
        fotos11 : 'assets/images/product/iphone/2.jpg',
        fotos2 : 'assets/images/product/mercado.png',
        tags: ['Câmera dupla (ultra-angular e grande-angular) de 12 MP', 'Ultra-angular: abertura ƒ/2.4 e campo de visão de 120º','Grande-angular: abertura ƒ/1.8',],
        cores: ['azul','verde'],
        index: 1,
      },
      {
        nome: 'Processador Intel Core i3-9100F Coffee Lake, Cache 6MB, 3.6GHz	',
        marca: 'Intel',
        data: '07 Oct, 2019',
        precoVenda: 'R$ 554,78',
        precoCusto:  'R$ 599,9',
        descricao: 'Processador Intel Core i3-9100F Coffee Lake, Cache 6MB, 3.6GHz (4.2GHz Max Turbo), LGA 1151, Sem Vídeo - BX80684I39100F',
        canais: ['Mercado Livre', 'Amazon','B2W'],
        fotos1 : 'assets/images/product/intel/1.jpg',
        fotos11 : 'assets/images/product/intel/2.jpg',
        fotos2 : 'assets/images/product/mercado.png',
        tags: ['Número de núcleos: 4', ' Soquetes suportados: FCLGA1151',],
        cores: ['azul','verde'],
        index: 1,
      },
      {
        nome: 'Mouse Sem Fio HP X200 ',
        marca: 'HP',
        data: '07 Oct, 2019',
        precoVenda: 'R$ 75,48',
        precoCusto:  'R$ 94,9',
        descricao: 'Mouse Sem Fio HP X200 - 6VY95AA#ABM',
        canais: ['Mercado Livre', 'Amazon','B2W'],
        fotos1 : 'assets/images/product/mouse/1.jpg',
        fotos11 : 'assets/images/product/mouse/2.jpg',
        fotos2 : 'assets/images/product/mercado.png',
        tags: ['Tecnologia de conexão Sem fio	', 'Plataforma compatível: PC, Mac		',],
        cores: ['azul','verde'],
        index: 1,
      },
      {
        nome: 'Placa de Vídeo Galax NVIDIA GeForce GTX 1660 Super EX (1-Click OC), 6GB, GDDR6	',
        marca: 'Nvidia',
        data: '07 Oct, 2019',
        precoVenda: 'R$ 1851,95',
        precoCusto:  'R$ 2094,99',
        descricao: 'Placa de Vídeo Galax NVIDIA GeForce GTX 1660 Super EX (1-Click OC), 6GB, GDDR6',
        fotos1 : 'assets/images/product/placa/1.jpg',
        fotos11 : 'assets/images/product/placa/2.jpg',
        fotos2 : 'assets/images/product/mercado.png',
        canais: ['Mercado Livre', 'Amazon','B2W'],
        tags: ['Velocidade: 14 Gbps', 'UDA Cores 1408',],
        cores: ['azul','verde'],
        index: 1,
      },
      ];
  }
/**
   * Open modal
   * @param content modal content
   */

  openModal(content: any,data : Array<{}>,data1,data2,data3,data4,data5,data6,data7) {
    this.canaisT=data;
    this.nomeT=data1;
    this.marcaT=data2;
    this.descricaoT=data3;
    this.coresT=data4;
    this.tagsT=data5;
    this.fotoT=data6;
    this.fotoT1=data7;
    this.modalService.open(content, { size: 'xl', backdrop: 'static' });
  }

  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }
  addProduct()
  {
    this.router.navigateByUrl("/product/add-product");
  }
}
