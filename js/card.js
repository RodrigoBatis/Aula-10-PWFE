'use strict'

import {pegarAlunos, filterAluno} from './api.js'

class card extends HTMLElement{
   constructor(){
      super()
      this.build()
   }
   build () {
      const shadow = this.attachShadow({mode: 'open'})
      shadow.appendChild(this.style())
      shadow.appendChild(this.createCard())
   }
   style () {
      const style = document.createElement('style')
      style.textContent = `
      .card{
         width: ${this.widthCard()};
         height:${this.heightCard()};
      
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-evenly;
         background-color: ${this.bgcolor()};
         margin-bottom: 10px;
      }
      
      
      
      .card-image{
         width: 50%;
         height: 50%;
         border-radius: 50%;
         background-image: url(${this.imgCard()});
         background-size: cover;
         box-shadow: inset 0 0 24px #000;
      }
      
      .card-text{
         width: 50%;
         padding: 4px;
         text-align: center;
         color: white;
         border-radius: 12px;
         text-transform: capitalize;
         box-shadow: 0 0 2px #000;
      }
      `
      return style;
   }
   createCard () {

      const card = document.createElement('div')
      card.classList.add('card')
      card.innerHTML = `
         <div class="card-text">${this.nomeAluno()}</div>
         <div class="card-image"></div>
         <div class="card-text">${this.turma()}</div>
      
      `
      
      return card
   }
   bgcolor(){
      const color = this.getAttribute('data-bgcolor')?? "#f00"
      return color
   }
   nomeAluno(){
      const nome = this.getAttribute('data-nome')?? "Nome Aluno"
      return nome
   }
   turma(){
      const turma = this.getAttribute('data-turma')?? "Turma Aluno"
      return turma
   }
   heightCard(){
      let height = this.getAttribute('data-height')
      if(height < "150px" || height == null){
         height = "250px"
      }
      return height
   }
   widthCard(){
      let width = this.getAttribute('data-width')
      if(width < "150px" || width == null){
         width = "250px"
      }
      return width
   }
   imgCard(){
      const img = this.getAttribute('data-img')?? "./img/god1.png"
      return img
   }
}

customElements.define('card-aluno', card)