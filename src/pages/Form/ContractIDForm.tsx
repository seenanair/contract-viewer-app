import React from "react";
import classes from "./ContractIDForm.module.css"
//import { History } from "history";
import { useHistory } from "react-router-dom";

export const ContractIDForm = ({setHeaderName }: {setHeaderName?: (val:string)=>void}) => {
      const [contractID] = React.useState("dc89ff49-8449-11e7-ac1d-3c52820efd20");
      const history = useHistory();
      React.useEffect(()=> {
        if(!setHeaderName)
         return;
        setHeaderName("Contract Viewer");
    },[setHeaderName])

    
      
    
      const onSubmit = (e:any) => {
        e.preventDefault();
        if(history) {
          let appendPath = `/contracts/${contractID}`
          history.push(appendPath)
        }
      }
     
    
        return (
          <div className={classes.fullscreenDiv} >
          <form onSubmit={onSubmit}>
            <div className={classes.center}>
              <label className={classes.padding} htmlFor="contractid"> Contract ID
              </label>
              <input type="text" name= "contractid" className={classes.textbox} value={contractID} disabled={true}/>
              <input type="submit" className={classes.button} value="Submit"  />
           </div>
          </form>
          
          </div>
        );

}