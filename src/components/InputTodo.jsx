import React from "react";

export const InputTodo = (props) => {

    const { inputText, onChange, onClick} = props;

    return (
        <>
            <div className="area input-area">
                <input 
                    placeholder="TODOを入力" 
                    value={ inputText } 
                    onChange={ onChange  } />
                <button onClick={ onClick }>追加</button>
            </div>

        </>
    );
};