import React from 'react'
import PaginationComponent from './components/PaginationComponent/PaginationComponent';
import PaginationSelector from './components/PaginationSelector/PaginationSelector';
import Cards from './components/Cards/Cards';

import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [itens, setItens] = useState([])
  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = itens.slice(startIndex, endIndex)

  useEffect(() => {
    const fecthData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => data)

      setItens(result)
    }
    fecthData()
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <div className="App">

      <div className='content'>

        <PaginationSelector
          itensPerPage={itensPerPage}
          setItensPerPage={setItensPerPage}
        />

        <Cards currentItens={currentItens}/>
       
        <PaginationComponent
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

      </div>
    </div>
  );
}

export default App;