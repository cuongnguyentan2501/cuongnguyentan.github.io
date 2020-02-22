import React from 'react';
import AddTaskForm from './AddTaskForm';
export default function AddTask(props) {
    const {statusForm,ChangeStatusForm,AddTaskItem,CloseForm,EditTaskItem,editTask}=props;
    
    return(
        <>
            <div className="form-group add-task">
            <button type="button" className="btn btn-info btn-block" 
                onClick={()=>{
                    if(statusForm===0) ChangeStatusForm(1);
                    else ChangeStatusForm(0);
                }}>
                {
                parseInt(statusForm)!==0?"CloseForm":"Add Task"
                }
            </button>
          </div>
          {
              statusForm===0?"":
              <AddTaskForm 
                CloseForm={CloseForm} 
                AddTaskItem={AddTaskItem} 
                statusForm={statusForm}
                EditTaskItem={EditTaskItem}
                editTask={editTask}
                
                />
                            
          }
          
        </>
    )
}