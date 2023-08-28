import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
var wrapper;
describe('Testing App Component', () => {
    test('testcase1', () => {
        wrapper = mount(<App />);
        expect(wrapper.instance()).toBeDefined();
        wrapper.unmount();
    });
})