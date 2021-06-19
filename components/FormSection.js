import classes from './FormSection.module.css';

const FormItem = ({active, title, percent}) => {

    return (
        <div className={classes.form_item_wrapper} style={{ display: `${active ? 'block' : 'none'}` }}>
                <div className={classes.form_header}>
                    <button className={classes.watch_video_wrapper}>
                        <div className={classes.play_icon}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path></svg></div>
                        <p className={classes.watch_title}>Watch a help video</p>
                    </button>
                    <h3 className={classes.get_help}>Having Troubles ? <a href="#">Get Help</a> </h3>
                </div>
                    
            <div className={classes.inputtable_form}>
                <div className={classes.progress_bar_wrapper}>
                        <div className={classes.progress_label}>
                            <p className="">{percent}% completed</p>
                            <p className="">Career Readiness</p>
                        </div>
                        <div className={classes.progress_bar}>
                            <div className={classes.progress_percent} style={{width: `${percent}%`}}></div>
                        </div>
                </div>
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
        </div>
    )
};


export default FormItem;