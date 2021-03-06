import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from './Checkbox';

configure({ adapter: new Adapter() });

describe("having a Checkbox ", () => {
    it('there is a Checkbox', () => {
        expect(<Checkbox />).toBeDefined();
      });

    it('should render disabled attribute to input', () => {
        const wrapper = shallow(<Checkbox disabled={true} />);   
        expect(wrapper.instance().props.disabled).toBe(true);
      });

      it('should render hasError attribute to input', () => {
        const wrapper = shallow(<Checkbox hasError={true} />);   
        expect(wrapper.instance().props.hasError).toBe(true);
      });

      it('should render title to input', () => {
        const wrapper = shallow(<Checkbox title=" " />);   
        expect(wrapper.instance().props.title).toBe(" ");
      });

      it('should render labeldisplay to input', () => {
        const wrapper = shallow(<Checkbox labeldisplay="block" />);   
        expect(wrapper.instance().props.labeldisplay).toBe("block");
      });
      
});



// describe("<Checkbox />", () => {
//     it('should render Checkbox', () => {
//         const wrapper = shallow(<Checkbox />)
//         console.log(wrapper.debug())
//     })
// })