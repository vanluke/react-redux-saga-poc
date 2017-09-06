import {create} from './create-store';
import sinon from 'sinon';

describe('Create store', () => {
  const reducer = sinon.spy();
  const run = sinon.spy();
  it('should create store', () => {
    const actual = create(reducer);
    sinon.spy(actual, 'run');
    actual.store = {};
    actual.run = run;
    
    const expected = {
      store: actual.store,
      run,
    };

    expect(actual).toEqual(expected);
  });
});
