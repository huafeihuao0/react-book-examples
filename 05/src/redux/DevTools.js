import React from 'react';
//开发工具创建器
import {createDevTools} from 'redux-devtools';

//监视器
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow'/>
    </DockMonitor>
);

export default DevTools;
