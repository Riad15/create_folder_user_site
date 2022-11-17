import React, { useState } from 'react';
import { FaAngleDoubleRight,FaAngleDoubleDown } from 'react-icons/fa';

const ButtonGroup = () => {
const [count,setCount] = useState(0);
    const btn_grp = ()=>{
       if(count==0){
       setCount(1);
       }else{
        setCount(0);
       }
    }
    return (
    <div onClick={btn_grp} className='btn_grp'>
      <div className='btn'>
      {
       count == 0?
        <FaAngleDoubleRight /> :
        <FaAngleDoubleDown/>
      }
      <p className='btn_name'>new folder</p>
      </div>
    </div>
    );
};

export default ButtonGroup;