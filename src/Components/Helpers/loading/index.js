import React, { Component } from 'react'
import { Spin } from 'antd';
import style from './style.less'
export default class loading extends Component {
    render() {
        return (
            <div className={style.container}>
                <Spin size="large" />
                <p>
                    Loading...
                </p>
            </div>
        )
    }
}
