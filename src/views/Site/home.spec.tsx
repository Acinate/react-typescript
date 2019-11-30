import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Home from './home';

let container: HTMLDivElement | null = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with  or  without a name', () => {
    act(() => {
        render(<Home/>, container);
    });
    expect(container.textContent).toBe('Hey, stranger!');

    act(() => {
        render(<Home name="Jenny"/>, container);
    });
    expect(container.textContent).toBe('Hello, Jenny!');

    act(() => {
        render(<Home name="Jason"/>, container);
    });
    expect(container.textContent).toBe('Hello, Jason!');
});
