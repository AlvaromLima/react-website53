import React, {useEffect, useState } from 'react';
import './style.css';

////Acessar o https abaixo
////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  // Requisicao http - Busca os dados do http
  const [nutri, setNutri] = useState([]);

  // Carrega todos os dados da requisicao http
  useEffect(()=> {
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      // Monta o json com os dados do http, r é o resultado da pagina
      .then((r)=> r.json())
      // Carrega os dados do http, para setNutri
      .then((json)=> {
        console.log(json);
        setNutri(json);
      })

    }

    loadApi();

  }, []);

  /* Conteúdo do json que retornou do http 
  {
    "id": 1,
    "titulo": "Refeições proteicas para fazer antes de dormir",
    "capa": "https://sujeitoprogramador.com/nutriapp/wp-content/uploads/2017/12/Screenshot_3-2.jpg",
    "subtitulo": "O que acontece com nossos músculos quando estamos dormindo Muitas pessoas pensam que o ganho de massa muscular ocorre dentro da academia, quando estamos treinando pesado. O inchaço do treino e pós-treino dá a impressão que estamos evoluindo, mas isto não passa de...",
    "categoria": "Deita"
  },
  */

  // Montando a tela 
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"/>
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <h1>Categoria: {item.categoria}</h1>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
