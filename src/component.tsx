import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {State} from './reducers/index'
import {checkAction, updateTabAction} from './actions/actionCreaters'
import {LINK} from './reducers/constants'
import * as Type from './reducers/type'


const tabs:string[] = ["posts", "comments", "albums", "photos", "todos", "users"];

function Component() {
  const dispatch = useDispatch()

  const tab = useSelector((state:State)=>state.hobby.tab)
  const data = useSelector((state:State)=>state.hobby.data)

  useEffect(() => {
    fetch(`${LINK}${tab}`)
      .then((res) => res.json())
      .then((json) => {
        let newData = json.map((el:Type.objectType) => (
          <li key={el.id}>{el.title || el.body || el.name}</li>
        ))
        dispatch(checkAction(tab, newData))
      })
      .catch(()=>{
      })
  }, [tab]);
  
  return (
    <React.StrictMode>
      <div className="navbox">
        {tabs.map((e) => {
          return (
            <button
              style={
                tab === e ? { backgroundColor: "red", color: "white" } : {}
              }
              onClick={()=>dispatch(updateTabAction(e))}
              key={e}
            >
              {e}
            </button>
          );
        })}
      </div>
      <div className="databox">
        <ul>{data}</ul>
      </div>
    </React.StrictMode>
  );
}

export default Component;
