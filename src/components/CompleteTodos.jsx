import React from "react";

export const CompleteTodos = (props) => {

    const {todos, onClickBack} = props;
    
    return (
        <>
            <div className="area complete-area">
                <p className="title">完了のTODO</p>
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <li className="row" key={ index }>
                                <p>{ todo }</p>
                                <button onClick={ () => onClickBack(index) }>戻す</button>
                            </li>    
                        );
                    })}
                </ul>
            </div>
        </>
    );
};