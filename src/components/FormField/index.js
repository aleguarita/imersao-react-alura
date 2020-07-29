import React from "react";

function FormField({
    label,
    type = 'text',
    name,
    value,
    onChange
}) {
    if (type === 'textarea') {
        return (
            <div>
                <label>
                    {label}:
                    <textarea
                        name = {name}
                        value = {value}
                        onChange = {onChange}
                    />
                </label>
            </div>
        )
    }
    return (
        <div>
            <label>
                {label}:
                <input
                    type = {type}
                    name = {name}
                    value = {value}
                    onChange = {onChange}
                />
            </label>
        </div>
    )
}

export default FormField;