import React,{useState,useEffect} from "react";
import api from './services/api';
import "./styles.css";

function App() {
  const [repositories,setRepositories] = useState([]);
  // const [urlRepo,setUrlRepo] =useState('');
  // const [titleRepo,setTitleRepo] =useState('');
  // const [techs,setTechs] =useState('');

  useEffect(()=>{
    api.get('/repositories').then( response =>{
      setRepositories(response.data);
      

    })
  },[])
  
  async function handleAddRepository(e) {
    // TODO
    e.preventDefault();
      const response =await api.post('/repositories',{
      "url": 'https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-reactjs',
      "title": 'bootcamp-gostack-desafios',
      "techs": ['ReactJS','ReactNative','TypeScript','NodeJS']
    })
    setRepositories([...repositories,response.data]);
    
    // e.preventDefault();
    // if(techs===''){
    //   return
    // }
    // const arrayTech = techs.split(',');
    // const response =await api.post('/repositories',{
    //   "url": urlRepo,
    //   "title": titleRepo,
    //   "techs": arrayTech  
    // })
    // setRepositories([...repositories,response.data]);
    // setTechs('');
    // setUrlRepo('');
    // setTitleRepo('');
  
   
  }

  async function handleRemoveRepository(id) {
    // TODO
    await api.delete(`/repositories/${id}`);
    const newRepo= repositories.filter(repo=>repo.id!==id);
    setRepositories(newRepo);
   
    
    
  
  }

  return (
    <div>
      {/* <form>
         Titulo 
       <input type='text' value={titleRepo} onChange={(e)=>{setTitleRepo(e.target.value)}} ></input>
       Url Do Repositorio
       <input type='text' value={urlRepo}onChange={(e)=>{setUrlRepo(e.target.value)}} ></input>
       Tecnologias ( separados por virgula)
       <input type='text' value={techs} onChange={(e)=>{setTechs(e.target.value)}}></input>
       
       </form> */}
      <ul data-testid="repository-list">
       {repositories.map(repo=>(
          <li key={repo.id}>
          {repo.title}

          <button onClick={() => handleRemoveRepository(repo.id)}>
            Remover
          </button>
        </li>
       ))}
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
      
    </div>
    // <div>
      
    //   <form>
    //     Titulo 
    //   <input type='text' value={titleRepo} onChange={(e)=>{setTitleRepo(e.target.value)}} ></input>
    //   Url Do Repositorio
    //   <input type='text' value={urlRepo}onChange={(e)=>{setUrlRepo(e.target.value)}} ></input>
    //   Tecnologias ( separados por virgula)
    //   <input type='text' value={techs} onChange={(e)=>{setTechs(e.target.value)}}></input>
    //   <button onClick={handleAddRepository}>Adicionar</button>
    //   </form>
    //   <ul data-testid="repository-list">
    //     {repositories.map(repo=>(
    //       <li key={repo.id}>
            
    //         <span>
    //         titulo 
    //         </span>
    //         {repo.title}
    //         <span>
    //         url 
    //         </span>
    //         {repo.url}
    //         <span>
    //         Tecnologias
    //         </span>
    //         {repo.techs.map(tec=>(
    //           <p key={tec}>{tec}</p>
    //         ))}
            
            
    //         <button onClick={()=> handleRemoveRepository(repo.id)}>
    //          Remover
    //        </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
 
    
  );
}

export default App;
