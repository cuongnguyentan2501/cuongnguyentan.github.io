import React from 'react';
export default function ListTaskElement(props) {
  const {value,stt,DeleteTask,EditTaskAction}=props;
  const getClassName=(level)=>{
    level=parseInt(level);
    if(level===0) {return "badge-info badge";}
    else if(level===1) {return "badge-warning badge";}
    else {return "badge-danger badge"}
  }
  const getText=(level)=>{
    level=parseInt(level);
    if(level===0) {return "Small";}
    else if(level===1) {return "Medium";}
    else {return "High"}
  }
    return(
        <tr>
              <td className="text-center">{stt+1}</td>
              <td>{value.name}</td>
              <td className="text-center">
                <span 
                className={getClassName(value.level)}>
                  {getText(value.level)}
                </span></td>
              <td>
                <div className="btn-group">
                <button 
                type="button" className="btn btn-warning"
                onClick={()=>EditTaskAction(value)}
                >Edit</button>
                <button type="button" className="btn btn-danger" onClick={()=>{DeleteTask(value.id,value.name)}}>Delete</button>
                </div>
              </td>
            </tr>
    )
}