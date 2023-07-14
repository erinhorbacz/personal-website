import './slider.css';

const Headers = ({headerArry, x}) => {
  return (
        <div className="slider">
          {
            headerArry.map((header,index)=>{
              return(
                //x here corresponds to which image you have open in the slider. 0 = first. -100 = second. -200 = third. etc.
                <div key = {index} className = "slide" style = {{transform: `translateX(${x}%)`}}>
                  {header}
                  
                </div>
              )
            })
          }
        </div>
    );


};

export default Headers;
