import './App.css';
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import {
  Routes,
  Route
} from 'react-router-dom'
function App() {
  let myapi = '94e6ba266ffd4d02b30af2e99cdb5f01';
  return (
    <div>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<NewsComp country="in" catogory="business" key = "buisness" apike = {myapi}/>}/>
          <Route exact path="/entertainment" element={<NewsComp country="in" catogory="entertainment" key = "entertainment" apike = {myapi}/>} />
          <Route exact path="/health" element={<NewsComp country="in" catogory="health" key = "health" apike = {myapi}/>} />
          <Route exact path="/science" element={<NewsComp country="in" catogory="science" key = "science" apike = {myapi}/>} />
          <Route exact path="/sports" element={<NewsComp country="in" catogory="sports" key = "sports" apike = {myapi}/>} />
          <Route exact path="/tecnology" element={<NewsComp country="in" catogory="tecnology" key = "tecnology" apike = {myapi}/>} />
      </Routes>
    </div>
  );
}

export default App;