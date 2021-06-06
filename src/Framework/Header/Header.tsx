import classes from './Header.module.css';
//Header function component
const header = ({headerName}:{headerName:string}) => {
    return <header className={classes.Header}>
            {headerName}
            </header>;
};
export default header;
