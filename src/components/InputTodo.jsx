import React from "react";

const style = {
    backgroundColor: '#c1ffff',
    height: '30px'
};

export const InputTodo = (props) => {

    const { inputText, onChange, onClick, disabled} = props;

    return (
        <>
            <div style={style} className="area">
                <input placeholder="TODOを入力" value={ inputText } onChange={ onChange } disabled={ disabled } />
                <button onClick={ onClick } disabled={ disabled } >追加</button>
            </div>

        </>
    );
};