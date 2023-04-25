import React, { useState } from 'react';
import './styles.css';

export const App = () => {

    // 未完了のTODO
    const [incompleteTodos, setIncompleteTodos] = useState([
        'あああああ','いいいいい'
    ]);

    // 完了のTODO
    const [completeTodos, setCompleteTodos] = useState([
        'ううううう'
    ]);

    return (
        <>
            <div class="area input-area">
                <input placeholder="TODOを入力"/>
                <button>追加</button>
            </div>
            <div class="area imcomplete-area">
                <p class="title">未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo) => {
                        return (
                            <li class="row" key={ todo }>
                                <p>{ todo }</p>
                                <button>完了</button>
                                <button>削除</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div class="area complete-area">
                <p class="title">完了のTODO</p>
                <ul>
                    {completeTodos.map((todo) => {
                        return (
                            <li class="row" key={ todo }>
                                <p>{ todo }</p>
                                <button>戻す</button>
                            </li>    
                        );
                    })}
                </ul>
            </div>
        </>
    );
}