import { useState } from 'react';
import classes from '../styles/Form.module.css';




const Form = () => {

    const [index, setIndex] = useState(1);

    const prevHandler = () => {
        if(index <= 1) return ;
        setIndex(index - 1);
    };
    const nextHandler = () => {
        if(index >= 6) return ;
        setIndex(index + 1);
    };
    console.log(index);
    return (
        <div className={classes.container}>
            <div className={classes.form_wrapper}>
                <div className={classes.form_stepper}>
                    <div className={classes.logo_wrapper}>
                        <img className={classes.logo} src="https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" alt="" className="logo-wrapper" />
                    </div>
                    <div className={classes.stepper}>
                        <div className={classes.step_1}>
                            <div className={classes.step_wrapper}>
                                <div className={classes.circle}>
                                    <div className={index === 1 ? classes.inner_circle_active : classes.inner_circle}>
                                        <h1 className={classes.number}>1</h1>
                                    </div>
                                </div>
                                <div className={classes.step_content}>
                                    <h4 className={classes.step_title}>Step 1</h4>
                                    <h4 className={classes.step_subtitle}>Distract Profile</h4>
                                </div>
                                <div className={classes.v_line} style={{ backgroundColor: `${index === 1 ? '#6366F1' : '#aaa5'}`}}></div>
                                <div className={classes.v_circle} style={{ backgroundColor: `${index === 1 ? '#6366F1' : '#aaa5'}`}}></div>
                                <div className={classes.v_circle2} style={{ backgroundColor: `${index === 1 ? '#6366F1' : '#aaa5'}`}}></div>
                            </div>
                        </div>
                        <div className={classes.step_2}>
                            <div className={classes.step_wrapper}>
                                <div className={classes.circle}>
                                    <div className={index >= 2 ? classes.inner_circle_active : classes.inner_circle}>
                                        <h1 className={classes.number}>2</h1>
                                    </div>
                                </div>
                                <div className={classes.step_content}>
                                    <h4 className={classes.step_title}>Complete Profile</h4>
                                    <h4 className={classes.step_subtitle}>Personal Details</h4>
                                    <div className={classes.first_dot}></div>
                                </div>
                                <div className={classes.curve_line_wrapper}>
                                    <div className={classes.left_line}></div>
                                    <div className={classes.bottom_line}>
                                        <div className={classes.bottom_dot}></div>
                                        <p className={classes.menu_title}>Certification</p>
                                    </div>
                                </div>
                                <div className={classes.curve_line_wrapper}>
                                    <div className={classes.left_line}></div>
                                    <div className={classes.bottom_line}>
                                        <div className={classes.bottom_dot}></div>
                                        <p className={classes.menu_title}>Certification</p>
                                    </div>
                                </div>
                                <div className={classes.curve_line_wrapper}>
                                    <div className={classes.left_line}></div>
                                    <div className={classes.bottom_line}>
                                        <div className={classes.bottom_dot}></div>
                                        <p className={classes.menu_title}>Certification</p>
                                    </div>
                                </div>
                                <div className={classes.curve_line_wrapper}>
                                    <div className={classes.left_line}></div>
                                    <div className={classes.bottom_line}>
                                        <div className={classes.bottom_dot}></div>
                                        <p className={classes.menu_title}>Certification</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.form_body}>
                    <div onClick={prevHandler} className={classes.btn_prev}>
                     Previous
                    </div>
                    <div onClick={nextHandler} className={classes.btn_next}>
                     Continue
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Form;