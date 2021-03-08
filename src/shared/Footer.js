import React, {Component, PureComponent} from 'react';
import {Layout} from 'antd';

const {Footer}=Layout;

export function FooterComp(props) {
    return (
        <Footer style={{textAlign: 'center', backgroundColor: 'transparent'}}>
            经过修改，基于&nbsp;
            <a href="https://www.gnu.org/licenses/gpl-3.0.zh-cn.html" target="_blank" rel="noreferrer noopener">GPLv3</a>
            &nbsp;协议在 <a href="https://github.com/Yixuan-Wang/syllabus-ce" target="_blank" rel="noreferrer noopener">GitHub</a> 开源
        </Footer>
    );
}