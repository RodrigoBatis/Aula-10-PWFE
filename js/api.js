'use strict'

const url = "https://api-senai.herokuapp.com/alunos"

const pegarAlunos = async (url) => 
{
    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
}

async function filterAluno() {
   const qtddAlunos = await pegarAlunos(url);
   const arrAlunos = qtddAlunos.map((element) => {
     let aluno = {
       photo: element.foto,
       name: element.nome,
       id: element.id,
       turma: element.turma,
       situacao: element.status
     };
 
     return aluno;
   });
 
   return arrAlunos;
 }

pegarAlunos(url)

export{
   pegarAlunos,
   filterAluno
}