import {UPDATE_LOCATION} from './container-constants';
import {updateLocation} from './container-action';

describe('Container actions', () => {
  it('should updateLocation return type UPDATE_LOCATION', () => {
    const actual = updateLocation();
    const expected = {
      type: UPDATE_LOCATION,
    };

    expect(actual).toEqual(expected);
  });
});
