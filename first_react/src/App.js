import Device from './Device';
import Counter from './Counter';
import Food from './Food';
import Movie from './Movie';
import Counter2 from './Counter2';
import MyDeivce from "./MyDevice";
import MyDeivce2 from './MyDevice2';

function App() {
  const mydateApp={
    "myDeviceData":[
      {
        "name": "갤럭시노트 10",
        "ram": 6,
        "homeButton": false,
        "TouchID": "no",
        "FaceID": "yes"
      },
      {
        "name": "ipad",
        "ram": 8,
        "homeButton": false,
        "TouchID": "yes",
        "FaceID": "yes"
      },
      {
        "name": "ipad 10",
        "ram": 10,
        "homeButton": false,
        "TouchID": "yes",
        "FaceID": "no"
      }
    ]
  }

  return (
    <div>
      <h1>안녕</h1>
      <h2>안녕2</h2>
      <Device />
      <Counter />
      <Food />
      <Movie title="영화1"/>
      <Movie title="영화2"/>
      <Movie title="영화3"/>
      <Movie title="영화4"/>
      <hr/>
      <h3>Count2 클래스 화살표 함수</h3>
      <Counter2 />
      <hr/>
      <MyDeivce mydata={mydateApp}/>
      <hr/>
      <h3>MyDeivce2 !!!!</h3>
      <MyDeivce2 />
      <MyDeivce2>MyDeivce2-data</MyDeivce2>
    </div>
  );
}

export default App;
