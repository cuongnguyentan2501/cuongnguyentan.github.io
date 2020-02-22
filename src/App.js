import React,{useState,useEffect} from 'react';
import './vendor/style.css'
import './vendor/bootstrap.min.css'
import Article from './components/Article';
import Sort from './components/Sort';
import Search from './components/Search';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
export default function App() {
  const [state,changeState]=useState({statusForm:0,allTask:[],editTask:"",statusSort:0});
  const {statusForm,editTask,statusSort,allTask}=state;
  const ChangeStatusForm=function(status){
    changeState({...state,statusForm:status,editTask:null})
  }
  const [searchText,changeSearchText]=useState("");
  const ChangeStatusSort=(sortID)=>{
    changeState({...state,statusSort:sortID})
  }
  const ChangeSearchText=(text)=>{
    changeSearchText(text);
  }
  useEffect(()=>{
    let result=JSON.parse(localStorage.getItem("allTask"));
    if(result){
      changeState({...state,allTask:result});
    }
   
  },[])
  
  const AddTaskItem=(taskItem)=>{
   let result=state.allTask;
   result.push(taskItem);
   localStorage.setItem("allTask",JSON.stringify(result))
   changeState({...state,allTask:result,statusForm:0});
  }
  const CloseForm=()=>{
    changeState({...state,statusForm:0});
  }
  const DeleteTask=(id,name)=>{
    let result=confirm("Bạn có muốn xóa "+name);/* eslint no-restricted-globals:0 */
    if(result){
      let newAllTask=state.allTask.filter(value=>(id!==value.id));
      console.log(newAllTask)
      changeState({...state,allTask:newAllTask});
      localStorage.setItem("allTask",JSON.stringify(newAllTask))
    }
  }
  const EditTaskAction=(editTask)=>{
    changeState({...state,statusForm:2,editTask:editTask})
  }
  const EditTaskItem=(editTask)=>{
    let {allTask}=state;
    allTask.forEach(value=>{
      if(value.id===editTask.id){
        value.name=editTask.name;
        value.level=editTask.level;
      }
    })
    localStorage.setItem('allTask',JSON.stringify(allTask))
    changeState({...state,allTask:allTask,statusForm:0});
  }
  const modifyAllTask=(allTask)=>{
    allTask=allTask.filter(value=>{
      console.log(value.name,searchText,value.name.includes(searchText))
      return value.name.includes(searchText) }
    )
    
    if(statusSort===0 || statusSort===1){
      allTask.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      return statusSort===0?allTask:allTask.reverse();
    }
    if(statusSort===2||statusSort===3){
      allTask.sort(function (a, b) {
        return parseInt(a.level) - parseInt(b.level);
      });
      return statusSort===2?allTask:allTask.reverse();
    }
    
    
  }
  return (
    <div className="App">
      <div className="container">
      <Article/>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12">
              <Sort ChangeStatusSort={ChangeStatusSort} statusSort={statusSort}/>
            </div>
            <div className="col-12">
              <Search ChangeSearchText={ChangeSearchText}/>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <AddTask 
            CloseForm={CloseForm} 
            statusForm={statusForm} 
            ChangeStatusForm={ChangeStatusForm} 
            AddTaskItem={AddTaskItem}
            EditTaskItem={EditTaskItem}
            editTask={editTask}
            />
        </div>
      </div>
      <ListTask allTask={modifyAllTask(allTask)} DeleteTask={DeleteTask} EditTaskAction={EditTaskAction}/>
      </div>
    </div>
  );
}

