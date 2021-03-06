import classes from './StepItemCSS.module.css';

const StepItemCSS = ({active, title, show}) => {

    return(
        <div className={classes.curve_line_wrapper} style={{display: `${show ? 'none' : 'block'}`}}>
            <div className={classes.left_line}></div>
            <div className={classes.bottom_line}>
                <div className={classes.bottom_dot}></div>
            </div>
            <p className={classes.menu_title} style={{color: `${active ? '#6366F1' : '#777'}`}}>{title}</p>
        </div>
    );
};

export default StepItemCSS;