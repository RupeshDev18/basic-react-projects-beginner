import './App.css';
import { useEffect,useState } from 'react';
function App() {

  const [newsList,setNewsList]=useState([]);

  // useEffect(async()=>{
  //   const res=await fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json",{
  //     method:"GET",
  //     headers:{
  //       Accept:"application/json",
  //       "Content-Type":"application/json"
  //     },
  //   });
  // })
  useEffect(()=>{
    getNews();
  },[])
  
  const getNews = async () => {
    const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json", {
              method: "GET",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
          });
       const data =await response.json();
      //  console.log(data.results);
      setNewsList(data.results);
      //  setNewsList(...newsList, data);
  }
  return (
    <div className="App">
      <div className="title">
      <h1>Space News</h1>
      </div>
      <div className='newsContainer'>
        {newsList.map((val,key)=>{
          return <div key={key} className='article' onClick={()=>{window.location.href=val.url}}>
            <h3>{val.title}</h3>
            <img src={val.image_url} alt="" />
            <p>{val.summary} </p>
            <h4>{val.publishedAt} </h4>
           </div>
        })}
      </div>
    </div>
  );
}

export default App;
