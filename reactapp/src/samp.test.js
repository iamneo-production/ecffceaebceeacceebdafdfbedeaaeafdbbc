import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
var wrapper;
describe('Testing App Component', () => {
    test('testcase2', () => {
        wrapper = mount(<App />);
        expect(wrapper.find('h1').text()).toBe('Quizz App');
        expect(wrapper.find('button').instance()).toBeDefined();
        wrapper.unmount();
    });
})