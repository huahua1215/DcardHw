import Login from './components/login';
import TaskList from './components/TaskList';
import './index.css';
import About from './about';



function Home  () {

    return <div className="app">
      <div className="index-container" id="homepage">
      <h1 >GitHub Task Manager</h1>
      <ul className="index-list">
      <li className="index-list-item"><a href="#about">About this website</a></li>
        <li className="index-list-item"><a href="#mytask">My Task</a></li>
        <Login/>
      </ul>
    </div>
        <div className="index-container" id="about" >
        <ul className="index-list2">
          <li className="index-list-item"><a href="#homepage"><img src="home.png"></img></a></li>
         </ul>
         <About/>

         
        </div>
        <div className="card-body" id="mytask">
        <ul className="index-list3">
          <li className="index-list-item"><a href="#homepage"><img src="home.png"></img></a></li>
         </ul>
          <TaskList/>
          
         
        </div>

        <div className="card-footer">
         <ul className="index-list">
          <li className="index-list-item"><a href="#homepage">Back to Homepage</a></li>
         </ul>
        </div>
    </div>

}
export default Home;