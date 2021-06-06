import classes from './ParagraphComponent.module.css';

// Generic function component to display contents 
 const ParagraphComponent = (props: any) => (
        <div className={classes.Content}>{props.content}</div>
);
export default ParagraphComponent;

