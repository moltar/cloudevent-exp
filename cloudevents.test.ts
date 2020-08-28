import { Version } from 'cloudevents'

describe('Version', () => {
  it('should work', () => {
    expect.assertions(1);

    expect(Version.V03).toBe('0.3')
  });
});