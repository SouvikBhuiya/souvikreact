import React from 'react'

export default function Alert(props) {
    return (
       props.alert && <div className={`alert alert-${props.alert.tp} alert-dismissible fade show`} role="alert">
                <strong style={{textTransform: "capitalize"}}>{props.alert.tp}</strong>:{props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>      
   )
}
