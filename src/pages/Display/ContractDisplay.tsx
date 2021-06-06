import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
//import Wrapper from '../../utils/Wrapper';
import classes from './ContractDisplay.module.css';
import ContractParagraphDisplay from './ContractParagraphDisplay';


  export const ContractDisplay = ({setHeaderName} : {setHeaderName?: (val:string)=>void}) => {
    const { id } = useParams<{ id: string }>();
    const baseURL = "http://localhost:3000"

   const {data,loading,error} = useFetch(`${baseURL}/contracts/${id}`) 

       React.useEffect(() => {
        if(data && (Object.keys(data).length>0) && setHeaderName)
             setHeaderName(data.data.attributes["name"]);
      },[data, setHeaderName])
  
    return (
            <div className={classes.fullscreenDiv} data-testid="contract-display">
                { loading ? (
                        <>
                            <div className={classes.Loader} />
                            <div className={classes.ContainerText}>Loading</div>
                        </>)
                    : error 
                        ? `Error! ${error.toString()}`
                         :  <ContractParagraphDisplay paragraphURL={`/contracts/${id}/paragraphs`}/> 
                }
            </div>
          );
};

