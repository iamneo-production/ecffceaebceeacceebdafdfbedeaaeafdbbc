import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";


var wrapper;
describe('Testing App Component', () => {

    test('testcase3', () => {
        wrapper = mount(<App />);
        wrapper.find('button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.text()).not.toBe('Start Quiz');
        })
        wrapper.unmount();
    });

    
})