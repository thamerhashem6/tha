import { expect } from '@open-wc/testing';
import Profile from './profile.js';

describe('Profile', () => {
  it('<app-profile> is an instance of Profile', async () => {
    const element = document.createElement('app-profile');
    expect(element).to.be.instanceOf(Profile);
  });
});
