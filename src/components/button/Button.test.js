import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe("having a Button ", () => {
    it('there is a Button', () => {
        expect(<Button />).toBeDefined();
      });

    it('should render disabled attribute to input', () => {
        const wrapper = shallow(<Button disabled={true} />);   
        expect(wrapper.instance().props.disabled).toBe(true);
      });

      it('should render hasError attribute to input', () => {
        const wrapper = shallow(<Button hasError={true} />);   
        expect(wrapper.instance().props.hasError).toBe(true);
      });

      it('should render title to input', () => {
        const wrapper = shallow(<Button title=" " />);   
        expect(wrapper.instance().props.title).toBe(" ");
      });

      it('should render labeldisplay to input', () => {
        const wrapper = shallow(<Button labeldisplay="block" />);   
        expect(wrapper.instance().props.labeldisplay).toBe("block");
      });
      
});