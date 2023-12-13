import React from 'react'

export default function Alert(props) {
    const capatelise=(word)=>{
        let letter=word.toLowerCase();
        return letter.charAt(0).toUpperCase()+letter.slice(1)
    }
    return (
        props.alert  && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
            <strong>{capatelise(props.alert.type)}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
