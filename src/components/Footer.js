//SFC - Stateless Functional Component
import React from 'react';
//Presentation - SFC Blue
//export meaning - you are globalising 
export const Footer =(props) => {
    //hooks = state in sfc
    return(
        <div className="bg-dark text-warning text-center">
    <h3>Copyright reserved to Sapna Chhajed</h3>
    </div>
    );
}

//props ={x:10} - readonly - immutable state=mutable/read and write
