import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RadioButton from './RadioButton';

configure({ adapter: new Adapter() });

describe("having a RadioButton ", () => {
    it('there is a RadioButton', () => {
        expect(<RadioButton />).toBeDefined();
      });

    it('should render disabled attribute to input', () => {
        const wrapper = shallow(<RadioButton disabled={true} />);   
        expect(wrapper.instance().props.disabled).toBe(true);
      });

      it('should render hasError attribute to input', () => {
        const wrapper = shallow(<RadioButton hasError={true} />);   
        expect(wrapper.instance().props.hasError).toBe(true);
      });

      it('should render title to input', () => {
        const wrapper = shallow(<RadioButton title=" " />);   
        expect(wrapper.instance().props.title).toBe(" ");
      });

      it('should render labeldisplay to input', () => {
        const wrapper = shallow(<RadioButton labeldisplay="block" />);   
        expect(wrapper.instance().props.labeldisplay).toBe("block");
      });
      
});