import Login from './components/login';
import TaskList from './components/TaskList';
import './index.css';



function Home  () {

    return <div className="app">
      <div className="index-container" id="homepage">
      <h1 >GitHub Task Manager</h1>
      <ul className="index-list">
        <li className="index-list-item"><a href="#mytask">My Task</a></li>
        <li className="index-list-item" >New Task</li>
        <Login/>
        <li className="index-list-item"><a href="#">Contact me</a></li>
      </ul>
    </div>
        <div className="card-body" id="mytask" >
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