import { useEffect, useState } from "react";
import { Sizes } from "../../activityIndicator";
import { Flex } from "../../flex";
export const RadioButton = ({ defaultChecked, onChange, size, style, ...rest }) => {
    const [value, setValue] = useState(defaultChecked ? true : false)
    const onToggle = () => {
        setValue(!value)
    }
    useEffect(() => {
        if (onChange) {
            onChange(value)
        }
    }, [value])
    return (
        <div className="flex items-center gap-x-2">
            <div onClick={onToggle} className="cursor-pointer relative w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                <input type="radio" className="custom-radio hidden" checked={value} onChange={onToggle} {...rest} />
                <div className={`custom-radio-alter ${value ? "scale-100 bg-green-700" : "scale-0"} rounded-full h-3.5 w-3.5 transition duration-500 ease-in-out`}></div>
            </div>
            <label className="text-sm font-medium text-gray-900 cursor-pointer" onClick={onToggle}>{rest["label"]}</label>
        </div>
    );
}
export const RadioButtonGroup = ({ data, horizontal, value, onChange }) => {
    const [state, setState] = useState(value?value:"")
    useEffect(()=>{
        if(onChange){
            onChange(state)
        }
    },[state])
    return (
        <div role={"radiogroup"} className="radio_group">
            <Flex gapX={horizontal ? "2" : ""} gapY={horizontal ? "" : "2"} dir={horizontal ? "row" : "col"}>
                {
                    data && data instanceof Array && data.length > 0 &&
                    data.map((elem, index) => {
                        return (
                            <div className="flex items-center gap-x-2" key={index}>
                                <div onClick={() => { setState(elem.value) }} className="cursor-pointer relative w-6 h-6 flex items-center justify-center border border-green-400 bg-gray-100 rounded-full">
                                    <input {...elem.inputRest} type="radio" className="custom-radio hidden" defaultChecked={state === elem.value} onClick={() => { setState(elem.value) }} />
                                    <div className={`custom-radio-alter ${elem.value === state ? "scale-100 bg-green-400" : "scale-0"} rounded-full h-4 w-4 transition duration-500 ease-in-out`}></div>
                                </div>
                                <label className="text-sm font-medium text-gray-900 cursor-pointer" onClick={() => { setState(elem.value) }}>{elem.label}</label>
                            </div>
                        )
                    })
                }
            </Flex>
        </div>
    )
}