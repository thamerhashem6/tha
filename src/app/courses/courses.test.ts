import { expect } from '@open-wc/testing';
import Courses from './courses.js';

describe('Courses', () => {
  it('<app-courses> is an instance of Courses', async () => {
    const element = document.createElement('app-courses');
    expect(element).to.be.instanceOf(Courses);
  });
});
