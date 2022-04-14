import React from 'react'

export default function Alert(props) {

    const pascalCase = (Word) => {
        const lower = Word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div className="container ">
            <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                {pascalCase(props.alert.typ)} :{props.alert.msg}
            </div>
        </div>
    )
}
