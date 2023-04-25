import React, { useState } from 'react';
import './styles.css';

export const App = () => {

    // 入力値
    const [inputText, setInputText] = useState('');

    // 未完了のTODO
    const [incompleteTodos, setIncompleteTodos] = useState([
        'あああああ','いいいいい'
    ]);

    // 完了のTODO
    const [completeTodos, setCompleteTodos] = useState([
        'ううううう'
    ]);

    // 入力欄に入力された値をstateに反映する
    const onChangeTodoText = (e) => setInputText(e.target.value);

    // 追加ボタンが押された時の処理
    const onClickAdd = () => {

        if(inputText === '') return;

        // 未完了のTODOを取得する
        const newTodos = [...incompleteTodos, inputText];

        // 追加後の未完了TODOを更新
        setIncompleteTodos(newTodos);

        // 入力欄を空にする
        setInputText('');
    };

    return (
        <>
            <div className="area input-area">
                <input placeholder="TODOを入力" value={ inputText } onChange={ onChangeTodoText  } />
                <button onClick={ onClickAdd }>追加</button>
            </div>
            <div className="area imcomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo, index) => {
                        return (
                            <li className="row" key={ index }>
                                <p>{ todo }</p>
                                <button>完了</button>
                                <button>削除</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="area complete-area">
                <p className="title">完了のTODO</p>
                <ul>
                    {completeTodos.map((todo, index) => {
                        return (
                            <li className="row" key={ index }>
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