import { useState } from 'react';
import FormSection from '../components/FormSection';
import StepItemCSS from '../components/StepItemCSS';
import classes from '../styles/Form.module.css';




const Form = () => {

    const [index, setIndex] = useState(0);

    const content = [`Let's complete your registration`, 'Career Pathway', 'Dream Job', 'After Collaboration', 'Certification'  ]
    const stepItem = content.filter((item, idx) => idx !== 0);
    console.log(stepItem);
    const prevHandler = () => {
        if(index <= 0) return ;
        setIndex(index - 1);
        console.log(stepItem);
    };
    const nextHandler = () => {
        if(index >= content.length -1) return ;
        setIndex(index + 1);
    };

    const percent = (100 / content.length) * (index + 1);
    
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
                                    <div className={index === 0 ? classes.inner_circle_active : classes.inner_circle}>
                                        <h1 className={classes.number}>1</h1>
                                    </div>
                                </div>
                                <div className={classes.step_content}>
                                    <h4 className={classes.step_title}>Step 1</h4>
                                    <h4 className={classes.step_subtitle}>Distract Profile</h4>
                                </div>
                                <div className={classes.v_line} style={{ backgroundColor: `${index === 0 ? '#6366F1' : '#aaa5'}`}}></div>
                                <div className={classes.v_circle} style={{ backgroundColor: `${index === 0 ? '#6366F1' : '#aaa5'}`}}></div>
                                <div className={classes.v_circle2} style={{ backgroundColor: `${index === 0 ? '#6366F1' : '#aaa5'}`}}></div>
                            </div>
                        </div>
                        <div className={classes.step_2}>
                            <div className={classes.step_wrapper}>
                                <div className={classes.circle}>
                                    <div className={index >= 1 ? classes.inner_circle_active : classes.inner_circle}>
                                        <h1 className={classes.number}>2</h1>
                                    </div>
                                </div>
                                <div className={classes.step_content}>
                                    <h4 className={classes.step_title}>Complete Profile</h4>
                                    <h4 className={classes.step_subtitle}>Personal Details</h4>
                                    {index > 0 ? <div className={classes.first_dot}></div> : null}
                                </div>
                                {
                                    stepItem.map((item, idx) => <StepItemCSS key={idx} show={idx >= index} title={item} active={idx + 1 === index} />)
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.form_body}>
                   
                    <div className={classes.form_slide_wrapper} >
                      
                        {/* <FormSection active={index === 1} title="Let's complete your registration" /> 
                        <FormSection active={index === 2} title="Career Pathway" />  
                        <FormSection active={index === 3} title="Dream Job" /> 
                        <FormSection active={index === 4} title="After Collaboration" />  
                        <FormSection active={index === 5} title="Certification" /> */}
                        {
                            content.map((item, idx) => <FormSection title={item} active={index === idx} percent={ (100 / content.length) * (index + 1)} /> )
                        }
                        
                    </div>
                    <div className={classes.navigate_button}>
                        <div onClick={prevHandler} className={classes.btn_prev} style={{ visibility: `${index === 0 ? 'hidden' : 'visible' }`}}>
                            Previous
                        </div>
                        <div onClick={nextHandler} className={classes.btn_next}>
                            {index === content.length - 1 ? 'Submit' : 'Continue'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Form;