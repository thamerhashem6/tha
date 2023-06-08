import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent } from 'igniteui-webcomponents';
import LearningAppService from '../service/LearningApp-service';

defineComponents(IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcIconComponent);

@customElement('app-tasks')
export default class Tasks extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .list {
      width: 659px;
      height: max-content;
      align-self: center;
      flex-shrink: 0;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .image {
      object-fit: cover;
      margin: 0 0 24px;
      min-width: 0;
      min-height: 0;
      max-width: 280px;
      flex-shrink: 0;
    }
    .h5 {
      color: hsla(var(--ig-secondary-800));
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .text {
      text-align: center;
      color: hsla(var(--ig-gray-700));
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
      max-width: 320px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .demo-content {
      background-color: transparent;
      border-color: hsla(var(--ig-gray-400));
      border-width: 2px;
      border-style: dashed;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      position: absolute;
      padding: 64px;
      min-width: 50px;
      min-height: 50px;
    }
  `;

  constructor() {
    super();
    this.learningAppService.getCurrentlyAttending().then((data) => {
      this.learningAppCurrentlyAttending = data;
    }, err => console.log(err));
  }

  private learningAppService: LearningAppService = new LearningAppService();

  @property()
  private learningAppCurrentlyAttending?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-list @click="${() => Router.go('/dashboard')}" class="list">
        ${this.learningAppCurrentlyAttending?.map((item: any) => html`
          <igc-list-item>
            <igc-avatar slot="start" shape="circle" class="avatar">
              <span class="material-icons">person</span>
            </igc-avatar>
            <div slot="title">Title goes here</div>
            <div slot="subtitle">Subtitle...</div>
            <span slot="end" class="material-icons icon">
              star
            </span>
          </igc-list-item>
        `)}
      </igc-list>
      <div class="column-layout demo-content">
        <img src="/src/assets/start-building.svg" attr="" class="image" />
        <h5 class="h5">
          Start building!
        </h5>
        <p class="typography__body-1 text">
          Remove the "demo-content" container, and add your own content.
        </p>
      </div>
    `;
  }
}
