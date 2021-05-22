

const StepItem = ({active, title}) => {

    return (
        <div className={`height relative w-full ml-2 transition-height duration-1000`}>
            <div className={`left-line absolute h-full -top-4 bg-blue-500`}></div>
            <div className={`bottom-line absolute w-1/12 h-5 border-b-2 border-l-2 rounded-bl-lg bottom-2 border-blue-500`}>
              <div className={`dot absolute rounded-full bg-blue-500`}></div>
            </div>
            <h2 className={`step-text pt-5 ${ active ? 'text-blue-500' : 'text-gray-500'}`}>{title}</h2>
            <style jsx>
                {`
                .left-line{
                    width: 2px;
                  }
                  .bottom-line{
                    width: 50px;
                  }
                  .top-dot{
                    width: 5px;
                    height: 5px;
                    left: -2px;
                  }
                  .dot{
                    width: 4px;
                    height: 4px;
                    bottom: -3px;
                    right: 0;
                  }
                  .step-text{
                    padding-left: 55px;
                  }

                  .height{
                    animation-name: div-height;
                  }

                  @keyframes div-height{
                    from {
                      max-height: 1%;
                    }
                    to{
                      max-height: 100%;
                    }
                  }
                `}
            </style>
        </div>
    )
};


export default StepItem;