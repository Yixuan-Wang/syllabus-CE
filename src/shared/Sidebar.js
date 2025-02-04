import React, {Component, PureComponent} from 'react';
import {Menu, Icon, Layout, Badge} from 'antd';
import {ROUTES} from '../routes';

const {Item, SubMenu}=Menu;
const {Sider}=Layout;

function SidebarTrigger(props) {
    return (<div id="foo-trigger">Hello</div>);
}

export function SidebarComp(props) {
    return (
        <Sider
            theme="light"
            breakpoint="md"
            collapsedWidth="0"
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                top: 0,
                paddingTop: '2em',
                left: 0,
            }}
            width={170}
            trigger={null}
        >
            <Menu
                    theme="light"
                    mode="inline"
                    inlineIndent={18}
                    selectedKeys={[props.current_route]}
                    openKeys={[ROUTES.homepage]}
                    onSelect={(e)=>{
                        props.navigate(e.key);
                    }}
            >
                <SubMenu
                        key={ROUTES.homepage}
                        title={
                            <span>
                                <Icon type="import" /> 导入课表
                            </span>
                        }
                        onTitleClick={(e)=>{
                            props.navigate(ROUTES.homepage);
                        }}
                >
                    <Item key={ROUTES.import_elective}>从选课系统</Item>
                    <Item key={ROUTES.import_config}>从日历文件</Item>
                </SubMenu>
                <Item key={ROUTES.edit}>
                    <Icon type="edit" /> 编辑
                    &nbsp;
                    <Badge
                        count={props.courses.length}
                        style={{
                            marginTop: '-3px',
                            backgroundColor: 'darkblue',
                        }}
                    />
                </Item>
                <Item key={ROUTES.export_ics}>
                    <Icon type="check-square" /> 生成日历
                </Item>
                <Item key={ROUTES.about}>
                    <Icon type="info-circle" /> 关于
                </Item>
            </Menu>
        </Sider>
    );
}