import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [title,changeTitle] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
  // title.sort();
  // console.log(title)
  const[nice,countNice] = useState([0,0,0])
  const[modal,setModal] = useState(0)
  
  return (
    <div>
      <div className='header'><h1>ReactBlog</h1></div>
      {title.map(function(a,i){
        return(
          <div className="wrap" key={i}>
            <h3 onClick={()=>{modal===1?setModal(0):setModal(1)}}>{a}
            <span onClick={()=>{
              let copy = [...nice]
              copy[i]=copy[i]+1
              countNice(copy)
            }}>👍{nice[i]}</span>
            </h3>
            
            <div>2월 17일 발행</div>
          </div>
        )
      })
      }
      {/* <div className="wrap">
      <h3 onClick={()=>{modal==1?setModal(0):setModal(1)}}>{title[0]}</h3>
      <div onClick={()=>(countNice(nice+1))}>:+1:{nice}</div>
      <span>2월 17일 발행</span>
      </div><hr/>
      <div className="wrap">
      <h3 onClick={()=>{modal==1?setModal(0):setModal(1)}}>{title[1]}</h3>
      <div onClick={()=>(countNice(nice+1))}>:+1:{nice}</div>
      <span>2월 17일 발행</span>
      </div><hr/>
      <div className="wrap">
      <h3 onClick={()=>{modal==1?setModal(0):setModal(1)}}>{title[2]}</h3>
      <div onClick={()=>(countNice(nice+1))}>:+1:{nice}</div>
      <span>2월 17일 발행</span>
      </div><hr/>
       */}
      {modal===1?<Modal/>:null}
      <Logo/>
    </div>
  );
}
const Modal=()=>{
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용 </p>
      </div>
  )
}
const Logo = () =>{
  return(
    <div className='doggie'>🐻</div>
  )
}
export default App;