import React from 'react';
import './styles.css';

export const App = () => {
    return (
        <>
            <div class="area input-area">
                <input placeholder="TODOを入力"/>
                <button>追加</button>
            </div>
            <div class="area imcomplete-area">
                <p class="title">未完了のTODO</p>
                <ul>
                    <li class="row">
                        <p>あああああ</p>
                        <button>完了</button>
                        <button>削除</button>
                    </li>
                    <li class="row">
                        <p>いいいいい</p>
                        <button>完了</button>
                        <button>削除</button>
                    </li>
                </ul>
            </div>
            <div class="area complete-area">
                <p class="title">完了のTODO</p>
                <ul>
                    <li class="row">
                        <p>ううううう</p>
                        <button>戻す</button>
                    </li>
                </ul>
            </div>
        </>
    );
}