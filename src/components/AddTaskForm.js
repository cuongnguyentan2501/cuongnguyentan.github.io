import React,{useState} from 'react';
const uuidv4 = require('uuid/v4');
export default function AddTaskForm(props) {
    const {statusForm,CloseForm,editTask}=props;
    const [taskItemInfor,changeTaskItem]=useState({name:"",level:0})
    const [lastEditTask,changeLastEditTask]=useState(null);
    if(lastEditTask!==editTask){
        console.log(editTask);
        changeLastEditTask(editTask);
        changeTaskItem({...taskItemInfor,name:editTask.name,level:parseInt(editTask.level)})
    }
    const {AddTaskItem,EditTaskItem}=props;
    
    const AddTaskItemAction=()=>{
        if(parseInt(statusForm)===1){
            console.log("add task")
            taskItemInfor.id=uuidv4();
            AddTaskItem(taskItemInfor);
        }
        else{
            let id=lastEditTask.id;
            let result={...taskItemInfor,id:id}
            EditTaskItem(result);
        }
       
    }
    
    const onChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        changeTaskItem({...taskItemInfor,[name]:value});
    }   
    return(
       
            
          
          <form action="" method="POST" className="form-inline justify-content-between" >
            <div className="form-group">
              <label className="sr-only" htmlFor="">label</label>
              <input name="name" onChange={(e)=>onChange(e)}
                type="text" className="form-control" placeholder="Task Name" value={taskItemInfor.name}/>
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="">label</label>
              <select className="form-control" required="required" name="level" 
              onChange={(e)=>onChange(e)} value={taskItemInfor.level}>
                <option value="0">Small</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
              </select>
            </div>

    <button onClick={()=>{AddTaskItemAction()}}
    type="button" className="btn btn-primary">{statusForm===1?"Submit":"Update"}</button>
            <button type="button" className="btn btn-secondary" onClick={()=>CloseForm()}>Cancel</button>
          </form>
       
    )
}