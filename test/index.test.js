import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import { Loadingstate } from '../src/index';

describe('Enzyme Shallow', function() {
	it('Loadingstate should be exist', function() {
		let Loadingstate = shallow(<Loadingstate/>);
		expect(Loadingstate.length).to.equal(1);
	})
})
