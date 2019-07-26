import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';



function Comment(props) {
    return (
        <div>
            <form action="#">
                <label>账号：</label>
                <input type="text"/>
                <label>密码：</label>
                <input type="password"/>
                <button type="sumbit">登录</button>
                <button>注册</button>
            </form>

        </div>
    )
}


ReactDOM.render(
    <Comment

    />,
    document.getElementById('root')
);

serviceWorker.unregister();
