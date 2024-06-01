import {Input} from 'antd';
// import Cron from 'react-js-cron';
// import Cron from 'antd-cron';
// import { ReCron } from '@sbzen/re-cron';
// import CronEditor from 'cron-editor-react';
// import {Cron, InputCron} from 'react-crons';
// import Cron from 'react-cron-antd';
// import {Cron} from './dist';
// import CronEditor from 'cron-editor-react';
// import CronEditor from 'antd-cron-editor';
import {Cron, InputCron} from './Corn';
// import CronEditor from 'antd-cron-editor';
const CronPicker = ({
    value,
    onChange,
    disabled = false,
    width = 300,
    withInput = false
}) => {
    if (withInput) {
        return (
            <InputCron
                value={value}
                onChange={onChange}
                // span={3}
                width={width}
                disabled={disabled}
                lang='zh_CN'
                type={['second', 'minute', 'hour', 'day', 'month', 'week']}
            />
        );
    }
    return (
        <div>
            <Input value={value} disabled />
            <Cron
                value={value}
                onChange={onChange}
                // span={3}
                width={width}
                disabled={disabled}
                lang='zh_CN'
                type={['second', 'minute', 'hour', 'day', 'month', 'week']}
            />
        </div>
    );
};

export default CronPicker;
