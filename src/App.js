import { MainPage } from "./components/Main";
import { Health } from "./components/Health";
import berry from './images/strawberry.png'

const data = [
  {
      title: 'Physical Health',
      color: '#22356F'
  },
  {
      title: 'Mental Health',
      color: '#0052C1'
  },
  {
      title: 'Nutrition',
      color: null,
      img: berry
  },
  {
      title: 'Gymnastics',
      color: '#62D0DF'
  },
  {
      title: 'Crossfit',
      color: '#DEE1FF'
  },
  {
      title: 'Aerobics',
      color: '#8F00FF'
  },
]

function App() {
  return (
    <div className="App">
    <MainPage/>
<div className="healthcontainer">

    {
      data.map((el,id)=>{
        return <Health data={el} key={id}/>
      })
    }
    </div>
    </div>
  );
}

export default App;
 