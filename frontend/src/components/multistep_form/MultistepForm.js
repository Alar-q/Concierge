import React, {useEffect, useState} from 'react';
import useMultistepForm from "./useMultistepForm";

export default function MultistepForm({ INITIAL_DATA, forms, onSubmit=f=>f }) {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields){
        // console.log(fields);
        setData(prev => ({...prev, ...fields}));
    }

    const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm(
        forms.map(form => form({...data, updateFields}) )
    );

    function onSubmitMulti(e){
        e.preventDefault();
        if(!isLastStep){
            return next();
        }
        else {
            // что делать после того, как у нас готова форма?
            onSubmit(data);
        }
    }

    return (
        <div style={{
            position: "relative",
            background: "white",
            border: "1px solid black",
            padding: "2rem",
            margin: "1rem",
            borderRadius: "0.5rem",
            fontFamily: "Arial"
        }}>
            <form onSubmit={onSubmitMulti}>
                <div style={{
                    position: "absolute", top: "0.5rem", right: "0.5rem",
                }}>
                    {currentStepIndex + 1} / {steps.length}
                </div>

                {step}

                <div style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-end",
                }}>
                    {!isFirstStep && <button type="button" onClick={back}>Back</button>}
                    <button type="submit">
                        {isLastStep ? "Finish" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
}