import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({ adapter: new Adapter() });

describe("having a Input ", () => {
    it('there is a Input', () => {
        expect(Input).toBeDefined();
      });

    it('should render disabled attribute to input', () => {
        const wrapper = shallow(<Input disabled={true} />);   
        expect(wrapper.instance().props.disabled).toBe(true);
      });

      it('should render hasError attribute to input', () => {
        const wrapper = shallow(<Input hasError={true} />);   
        expect(wrapper.instance().props.hasError).toBe(true);
      });

      it('should render title to input', () => {
        const wrapper = shallow(<Input title=" " />);   
        expect(wrapper.instance().props.title).toBe(" ");
      });

      it('should render labeldisplay to input', () => {
        const wrapper = shallow(<Input labeldisplay="block" />);   
        expect(wrapper.instance().props.labeldisplay).toBe("block");
      });
      
});