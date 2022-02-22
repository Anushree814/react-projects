import classes from './Repo.module.css'

const Repo = (props) => {
    
    return(
        <div className={classes.repo}>
            
            <div className={classes.repo__name}>
                {props.name}
            </div>
            <div className={classes.repo__description}> {props.description}</div>
            <div className={classes.repo__date}>{props.created_at.split('T')[0]}</div>
        </div>
    );
}

export default Repo;