import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import { useState } from 'react';
import App_Form from './App_Form';
function Cards() {
  const [close,isClose]=useState(false)
  function popup(){
    isClose(true);
  }
  const [inputValue, setInputValue] = useState(1);
   const data=[
   {
    card_title1:"Free",
    card_title2:"$0 / mo",
    desc:'10 users included 2GB of storage Email support Help center access.',
    bttn_txt:'Sign up for free'
   },
   {
    card_title1:"Pro",
    card_title2:"$15 / mo",
    desc:'20 users included 10GB of storage Priority email support Help center access.',
    bttn_txt:'Get Started'
   },
   {
    card_title1:"Enterprise",
    card_title2:"$29 / mo",
    desc:'30 users included 15GB of storage Priority email support Help center access.',
    bttn_txt:'Get Started'
   }
  ]
  let displayinfo;

  const handleInputChange = (e) => {
    setInputValue(parseInt(e.target.value));
  }

  if(inputValue>0 && inputValue<=10){
      displayinfo=data.slice(0,1)
  }else if(inputValue>=11 && inputValue<=20){
    displayinfo=data.slice(1,2)
  }else{
    displayinfo=data.slice(2,3)
  }

  return (
    <>
    <input 
        type='range'
        min='1'
        max='30'
        value={inputValue}
        onChange={handleInputChange}
      />{
        <p>{inputValue}</p>
      }
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    
      {displayinfo.map((data,idx)=>(
        <div key={idx} id={idx} style={{margin:'30px'}}>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{data.card_title1}</Card.Title>
        <Card.Text>
        <Card.Title>{data.card_title2}</Card.Title>
        {data.desc}
        </Card.Text>
        <button className='btn btn-lg btn-block btn-outline-primary' style={{width:'80%'}} onClick={popup} >
            {data.bttn_txt}
            </button>
      </Card.Body>
    </Card>
    </div>
      ))
}
</div>
<App_Form trigger={close} setTrigger={isClose}/>
</>
  );
}

export default Cards;