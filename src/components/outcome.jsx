import React from "react";


const Outcome = () => {
    return (  
        <div>
            {(typeof weather.main != "undefined") ?( 
                <div className='temperature-results'>
                <h3></h3>
                <h3>normal weather</h3>
            <div className='degree'>
                    <h1>32 C</h1>
                </div>
                </div>   
            ) : ('')}    
         </div>
    );
};

export default Outcome;