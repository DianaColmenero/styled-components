import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from './Checkbox';

configure({ adapter: new Adapter() });

describe("<Checkbox />", () => {
    it('adds disabled attribute to input', () => {
        const wrapper = shallow(<Checkbox disabled={true} />);
    
        expect(wrapper.instance().props.disabled).toBe(true);
      });
});

// describe("<Checkbox />", () => {
//     it('should render Checkbox', () => {
//         const wrapper = shallow(<Checkbox />)
//         console.log(wrapper.debug())
//     })
// })