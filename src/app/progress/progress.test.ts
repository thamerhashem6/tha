import { expect } from '@open-wc/testing';
import Progress from './progress.js';

describe('Progress', () => {
  it('<app-progress> is an instance of Progress', async () => {
    const element = document.createElement('app-progress');
    expect(element).to.be.instanceOf(Progress);
  });
});
