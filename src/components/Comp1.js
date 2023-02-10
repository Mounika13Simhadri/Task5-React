import React, { useState ,useRef} from 'react';



export default function Comp1() {
    const [values,setValues]=useState([])
    const valueRef=useRef();
    const [isSubmit,setSubmit]=useState(true);
    const [id,setID]=useState(0);
    //const [isUpdate, setUpdate] = useState(false)


    function printValue(e)
    {
        
        valueRef.current.focus();
        // setSubmit(!isSubmit);
        const val=valueRef.current.value;
        if(val === "") return;

       
        setValues(prevValues =>[...prevValues,{id:Math.floor(Math.random()*10000),val:val}]);
        valueRef.current.value=null;
   }

    const handleEdit=(v)=>{
        setSubmit(!isSubmit);
        valueRef.current.value=v.val;
        valueRef.current.focus();
        setID(v.id)
    }
    const handleUpdate=()=>{

            const newValue=[...values].filter(value=>{
                if(value.id===id){
                  return  value.val = valueRef.current.value;
                }else{
                   return value.val 
                }})
            setValues(newValue)
            setSubmit(!isSubmit);
        
    }
 
    const handleDelete=(id)=>{
        const newValue=[...values].filter(value=>value.id!==id)
       setValues(newValue);        
   }
  return (
    <div  className="container">
        <input className="inpt" ref={valueRef} type="text"/>
        <button className="btn1" type="submit" onClick={isSubmit ? printValue : handleUpdate }>{isSubmit?"Submit":"Update"}</button>
       
    
        {values.map( v =>
        <div>
            {v.val}
            <button className="btn2" onClick={()=>handleEdit(v)}>Edit</button>
            <button className="btn3" onClick={()=>handleDelete(v.id)}>Delete</button>
           
        </div>)}
       

    </div>
  )
}
