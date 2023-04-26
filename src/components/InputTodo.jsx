import React from "react";

const style = {
    backgroundColor: '#c1ffff',
    height: '30px'
};

export const InputTodo = (props) => {

    const { inputText, onChange, onClick} = props;

    return (
        <>
            <div style={style} className="area">
                <input 
                    placeholder="TODOを入力" 
                    value={ inputText } 
                    onChange={ onChange  } />
                <button onClick={ onClick }>追加</button>
            </div>

        </>
    );
};