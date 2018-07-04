import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dropdown from './Dropdown';

configure({ adapter: new Adapter() });

describe("having a Dropdown ", () => {
    it('there is a Dropdown', () => {
      expect(<Dropdown />).toBeDefined();
    });

    it('should render disabled attribute to input', () => {
        const wrapper = shallow(<Dropdown disabled={true} />);   
        expect(wrapper.instance().props.disabled).toBe(true);
      });

      it('should render hasError attribute to input', () => {
        const wrapper = shallow(<Dropdown hasError={true} />);   
        expect(wrapper.instance().props.hasError).toBe(true);
      });

      it('should render title to input', () => {
        const wrapper = shallow(<Dropdown title=" " />);   
        expect(wrapper.instance().props.title).toBe(" ");
      });

      it('should render labeldisplay to input', () => {
        const wrapper = shallow(<Dropdown labeldisplay="block" />);   
        expect(wrapper.instance().props.labeldisplay).toBe("block");
      });
      
});