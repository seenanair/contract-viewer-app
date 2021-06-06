import React from 'react';
import Header from '../Framework/Header/Header';

//Layout function component
const Layout = ({ history,children }: { history?: History,children:any },) => {
    const [headerName,setHeaderName] = React.useState("Contract Viewer");
    return (
        <>
            {<Header headerName= {headerName}/>}
            {React.cloneElement(children, {setHeaderName, history })}
        </>
    );

};
export default Layout;
