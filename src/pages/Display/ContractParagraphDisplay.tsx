import React, { useState } from 'react';
import  ParagraphComponent  from '../../Components/ParagraphComponent/ParagraphComponent';
import { useFetch } from '../../hooks/useFetch';
//import Wrapper from '../../utils/Wrapper';
import classes from './ContractParagraphDisplay.module.css';


 const ContractParagraphDisplay = ({paragraphURL} : {paragraphURL: string}) => {
    const [paragraphData, setParagraphData] = useState<any>([]);
    const [paragraphNumber,setParagraphNumber] = React.useState(1);
    const baseURL = "http://localhost:3000"
    const componentRef = React.useRef<HTMLDivElement>(null);
   
    
    const {data,loading,error} = useFetch(`${baseURL}${paragraphURL}?page=${paragraphNumber}&pageSize=50`) 
   
    React.useEffect(()=> {
        
        const handleResize = () => {
            fillParagraphsOnEmptySpace()
        }
        const handleScroll = () => {
            // Check whether end of the document reached
           if(componentRef.current && Math.abs(componentRef.current.getBoundingClientRect().bottom-window.innerHeight)<100)
              setParagraphNumber((prev)=>prev+1);
        }
        window.addEventListener('scroll', handleScroll,true);
        window.addEventListener("resize", handleResize);

        //Clean up
        return(()=> {
            window.removeEventListener('scroll',handleScroll,true);
            window.removeEventListener("resize", handleResize);
        })
    },[])

    const fillParagraphsOnEmptySpace = () => {
        //fetch paragraphs until the display window displays scroll bar
        if(componentRef.current && window.innerHeight > componentRef.current.scrollHeight)
           setParagraphNumber(prev=>prev+1);
   }
    
    React.useEffect(()=> {
        if(loading || error)
          return;
        if(Object.keys(data).length!==0 && "data" in data)
          setParagraphData((prevState:any) => [...prevState, data] );
    },[data, loading,error])
     
   
    React.useEffect(()=> {
        if(paragraphData.length ===0)
            return;
        fillParagraphsOnEmptySpace();
    },[paragraphData])

    
    
    return (
            <div className={classes.fullscreenDiv} ref = {componentRef} data-testid="contract-paragraphs">
                {paragraphData.map((val:any) => 
                    <ParagraphComponent content={val.data.attributes.text?val.data.attributes.text:""}/>
                )}
            </div>
    );
};

export default ContractParagraphDisplay;