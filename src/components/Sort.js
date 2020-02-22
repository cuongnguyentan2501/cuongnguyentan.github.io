import React from 'react';
export default function Sort(props) {
    const {ChangeStatusSort,statusSort}=props;
    const getTextStatusSort=(sort)=>{
      if(sort===0 || sort==="") return "Name ASC";
      else if(sort===1) return "Name DESC";
      else if(sort===2) return "Level ASC";
      else return "Level DESC"
    }
    return(
        <div className="form-group">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/#"  name="asdsa"
                    onClick={()=>{ChangeStatusSort(0)}}>Name ASC</a>
                    <a className="dropdown-item" href="/#"   onClick={()=>{ChangeStatusSort(1)}}>Name DESC</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/#"   onClick={()=>{ChangeStatusSort(2)}}>Level ASC</a>
                    <a className="dropdown-item" href="/#"   onClick={()=>{ChangeStatusSort(3)}}>Level DESC</a>
                  </div>
                  <span className="badge badge-success badge-medium">
                    {
                      getTextStatusSort(statusSort)
                    }

                  </span>
                </div>
              </div>
    ) 
}