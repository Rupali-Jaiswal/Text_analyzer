import React from 'react'

export default function Alert(props) {
    const capatelise=(word)=>{
        let letter=word.toLowerCase();
        return letter.charAt(0).toUpperCase()+letter.slice(1)
    }
    return (
       <div style={{height:'25px'}}>
        { props.alert  && <div id='alert' className={`alert alert-success alert-dismissible fade show`} role="alert" style={{height:'40px',display:'flex', alignItems:'center'}}>
           <strong>{capatelise(props.alert.type)}</strong> : {props.alert.msg}
           <div style={{height:'25px', display:'flex', alignItems:'center'}}>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" style={{ display:'flex',padding:'10px'}}></button>
           </div>
        </div>}
       </div>
    )
}
