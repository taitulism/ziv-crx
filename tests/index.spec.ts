import {expect} from 'chai';
import {apiSpec} from './api.spec';
import {pkgName} from '../src';

describe('pkg-name', () => {

	// before(() => {});
	// after(() => {});
	// beforeEach(() => {});
	// afterEach(() => {});

	it('is ok', () => {
		expect(pkgName).to.be.ok;
	});

	describe('API', apiSpec);
});
