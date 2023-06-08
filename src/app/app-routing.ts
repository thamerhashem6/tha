import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './dashboard/dashboard';
import './courses/courses';
import './progress/progress';
import './tasks/tasks';
import './profile/profile';

export const routes: Route[] = [
  { path: '', component: 'app-dashboard', name: 'Dashboard' },
  { path: 'dashboard', component: 'app-dashboard', name: 'Dashboard' },
  { path: 'courses', component: 'app-courses', name: 'Courses' },
  { path: 'progress', component: 'app-progress', name: 'Progress' },
  { path: 'tasks', component: 'app-tasks', name: 'Tasks' },
  { path: 'profile', component: 'app-profile', name: 'Profile' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
