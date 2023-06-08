import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: #320653;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 40px 24px 24px;
      width: 100px;
      flex-shrink: 0;
    }
    .logo {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: 0 0 40px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_1 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .image {
      object-fit: cover;
      margin: 0 0 0 -5px;
      width: 60px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .image_1 {
      object-fit: cover;
      width: 50px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text {
      text-align: center;
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-primary-500));
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="column-layout logo">
          <img src="/src/assets/skillz-logo.svg" attr="" class="image" />
          <img src="/src/assets/skillz-logo-text.svg" attr="" class="image_1" />
        </div>
        <div @click="${() => Router.go('/dashboard')}" class="column-layout group_1">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              dashboard
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <p class="typography__overline text">
            Main
          </p>
        </div>
        <div @click="${() => Router.go('/courses')}" class="column-layout group_1">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              school
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <p class="typography__overline text">
            Courses
          </p>
        </div>
        <div @click="${() => Router.go('/tasks')}" class="column-layout group_1">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              assignment_turned_in
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <p class="typography__overline text">
            Tasks
          </p>
        </div>
        <div @click="${() => Router.go('/progress')}" class="column-layout group_1">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              assessment
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <p class="typography__overline text">
            Progress
          </p>
        </div>
        <div @click="${() => Router.go('/profile')}" class="column-layout group_1">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              person
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <p class="typography__overline text">
            Profile
          </p>
        </div>
      </div>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
