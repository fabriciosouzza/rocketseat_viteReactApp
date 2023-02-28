import React, { useState, useEffect } from 'react';

import './style.css'

import { Card } from '../components/Card'


// função responsável por retornar o colnteúdo HTML da página
export function Home() {

  const [studentName, setStudentName] = useState(); //hook que atualiza a informação de studentName utilizando a função setStudentName
  const [students, setStudents] = useState([]); //hook que atualiza a informa de students utilizando a função setStudents
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name: ''});

  //função responsável por criar o objeto newStudent e adicioná-lo dentro do estado students(array de objetos)
  function handleAddStudent() {
    const newStudent = {
      key: count, 
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    }

    setStudents(prevState => [...prevState, newStudent]) //chamada do useState na função setStudents, como parâmetro é passado o objeto newStudent, utilização de prevState com spread operator para persistir os dados após cada chamada
    setCount(count + 1);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/mojombo')
    .then(response => response.json())
    .then(data => setUser({name: data.name}))
  }, []);

  return (
  <div className='container'>
    
    <header>
      <h1>NOVA SOLUÇÃO GRÁFICA</h1>
      <div>
        <strong>{user.name}</strong>
        <img src="https://picsum.photos/60"/>
      </div>
    </header>

    <input 
    type="text" 
    placeholder="Type your name" 
    onChange={e => setStudentName(e.target.value)} //para cada "e" - (mudança) - a função setStudantName receberá o valor(target.value) dessa alteração
    />
    
    <button type="button" onClick={handleAddStudent}>Add</button> 

    {
      students.map(st => <Card key={st.key}  name={st.name} time={st.time}/>) 
    }

  </div>
  )
}