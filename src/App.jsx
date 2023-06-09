import React, { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {


    // 入力値
    const [inputText, setInputText] = useState('');


    // 未完了のTODO
    const [incompleteTodos, setIncompleteTodos] = useState([]);


    // 完了のTODO
    const [completeTodos, setCompleteTodos] = useState([]);


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


    // 削除ボタン押された時の処理
    const onClickDelete = (index) => {

        // 未完了のTODOを取得する
        const newTodos = [...incompleteTodos];

        // indexのtodoを削除する
        // index番目から1つ削除する
        newTodos.splice(index, 1);

        // 削除後の未完了TODOを更新
        setIncompleteTodos(newTodos);

    }


    // 完了ボタン押された時の処理
    const onClickComplete = (index) => {

        // 未完了のTODOを取得する
        const newIncompleteTodos = [...incompleteTodos];

        // 未完了のTODOからタスクを削除する
        newIncompleteTodos.splice(index,1);
        setIncompleteTodos(newIncompleteTodos);

        // 完了のTODOを取得する
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        // 完了のTODOにタスクを追加する
        setCompleteTodos(newCompleteTodos);

    }


    // 戻すボタン押された時の処理
    const onClickBack = (index) => {

        // 完了のTODOを取得する
        const newCompleteTodos = [...completeTodos];

        // 完了のTODOからタスクを削除する
        newCompleteTodos.splice(index,1);
        setCompleteTodos(newCompleteTodos);
        
        // 未完了のTODOを取得する
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        
        // 未完了のTODOにタスクを追加する
        setIncompleteTodos(newIncompleteTodos);
        
    }


    return (
        <>
            <InputTodo inputText={inputText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={ incompleteTodos.length >= 5 } />
            { incompleteTodos.length >= 5 && <p style={{ color: 'red', margin: '5px 15px'}}>登録できるTODOは5個までです</p> }
            <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
        </>
    );
}