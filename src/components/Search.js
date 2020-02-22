import React,{useState} from 'react';
export default function Search(props) {
  const {ChangeSearchText}=props;
  const [searchText, setsearchText] = useState("")
    return(
        <div className="input-group">
                <input type="text" className="form-control" 
                  onChange={(e)=>{ChangeSearchText(e.target.value);setsearchText(e.target.value)}} 
                  placeholder="Search for..." 
                  value={searchText}
                  />
                <span className="input-group-append">
                  <button className="btn btn-info" type="button" onClick={()=>{ChangeSearchText("");setsearchText("")}}>Clear!</button>
                </span>
              </div>
    )
}