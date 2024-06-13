import React from 'react'

export default function Alert() {
    const capitalize = (word) => {
        const Lower = word.toLowerCase();
        return Lower.charAt(0).toUpperCase() + Lower.slice(1);
    }
    return (
        <div class={`alert alert-${props.alert.type}alert-dismissibe fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>
        </div>
    )
}
