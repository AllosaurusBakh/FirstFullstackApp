import React from 'react';
import classNames from 'classnames';
import './style.scss';

type InputAreaProps = {
    value: string | Array<string>,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    className: string,
    placeholder?: string,
    children?: React.ReactNode,
    style?: React.CSSProperties
};

const InputArea = (props: InputAreaProps): JSX.Element => {

    const classes = classNames(
        'input',
        'input-' + props.className,
    );

    return (
        <div className={props.className}>
            <input
                name={props.className}
                className={classes}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                style={props.style}
            />
        </div>
    );
};

InputArea.defaultProps = {
    value: '',
    onChange: () => {},
    className: '',
    placeholder: '',
    children: 'InputArea',
    style: {}
};

export default InputArea;