import React from 'react';
import ListTaskElement from './ListTaskElement';
export default function ListTask(props) {
  const {allTask,DeleteTask,EditTaskAction}=props;
  
    return(
        <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th  className="text-center w10">#</th>
              <th>Task</th>
              <th className="text-center w20">Level</th>
              <th className="w160">Action</th>
            </tr>
          </thead>
          <tbody>
            {allTask.map((value,index)=><ListTaskElement EditTaskAction={EditTaskAction} DeleteTask={DeleteTask} value={value} key={index} stt={index}/>)}
          </tbody>

        </table>
      </div>
    )
}