import classes from './FormSection.module.css';

const FormItem = ({active, title}) => {

    return (
        <div className={classes.form_item_wrapper} style={{ display: `${active ? 'block' : 'none'}` }}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.warning_box}>
                <p className={classes.warning_content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
            <div className={classes.form_field}>
                <label htmlFor="name" className={classes.field_label}>Name</label>
                <input placeholder="Enter your name..." className={classes.input_field} type="text" name="name" />
            </div>
            <div className={classes.form_field}>
                <label htmlFor="email" className={classes.field_label}>Email</label>
                <input placeholder="Enter your email...." className={classes.input_field} type="email" name="email" />
            </div>
            <h1 className={classes.subtitle_wrapper}><span  className={classes.sub_title}>{title}</span> part of the form.</h1>
        </div>
    )
};


export default FormItem;