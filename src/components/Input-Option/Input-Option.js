import React from 'react';

const InputOption = ({ text, setValue, options }) => {
    return (
        <div className='Input-Color-Container'>
            <div className='Input-Color__Info'>
                <p>{text}</p>
                <select
                    className='Input-Color--Right'
                    onChange={setValue}
                >
                    {options.map((option, index) => {
                        return (
                            <option
                                value={option}
                                key={index}
                            >
                                {option}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
};
export default InputOption
