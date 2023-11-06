import {expect} from 'chai';
import {pkgName} from '../src/index';

export function apiSpec () {
	// beforeEach(() => {});
	// afterEach(() => {});

	it('is ok', () => {
		expect(pkgName).to.be.ok;
	});
}
