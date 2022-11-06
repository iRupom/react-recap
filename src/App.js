import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setStudents(data));
  },[])
  // const students = [
  //   {
  //     name: 'Rakib',
  //     projects:10
  //   },
  //   {
  //     name: 'Mithu',
  //     projects:12
  //   },
  //   {
  //     name: 'Shawn',
  //     projects: 9
  //   },
  //   {
  //     name: 'Rupom',
  //     projects: 15
  //   }
  // ];
  return (
    <div className="App">
      <ProjectCounter></ProjectCounter>
      {
        students.map(student => <Student name={student.name} projects={student.projects} key={student.id}></Student>)
      }
    </div>
  );
}

function ProjectCounter() {
  let [count, setCount] = useState(0);
  let handleClickIncrease = function () {
    count++;
    setCount(count);
  }
  let handleClickDecrease = function () {
    count--;
    if (count <= 0) {
      count = 0;
    }

    setCount(count);
  }
  return (
    <div>
      <button onClick={handleClickIncrease}>Add Projects</button>
      <button onClick={handleClickDecrease}>Remove Project</button>
      <h3>Number of Projects : {count}</h3>
      <DisplayProjects projects={count}></DisplayProjects>
    </div>
  )
}

function DisplayProjects(props) {
  return (
    <h4>I have completed : { props.projects}</h4>
  )
}

function Student(props) {
  console.log(props);
  const studentStyle = {
    border: '5px solid violet',
    margin: '10px',
    padding: '10px'
  }

  return (
    <div style = {studentStyle}>
      <h1>I am a student.</h1>
      <h2>My name is {props.name}</h2>
      <h3>I have learnt react and node</h3>
      <h3>I have done { props.projects} of projects</h3>
    </div>
  )
}

export default App;
