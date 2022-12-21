import { Spin } from 'antd';
import { useState } from 'react';
import ReactDOM from 'react-dom';

function showLoading(el: keyof HTMLElementTagNameMap) {
    ReactDOM.render(
        <Spin />,
        document.querySelector(el)
    );
};

function hideLoading(el: Element | DocumentFragment): boolean {
    return ReactDOM.unmountComponentAtNode(el);
};

export function useLoading() {
    const [show, setShow] = useState<boolean>(false);


}