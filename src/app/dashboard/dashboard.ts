import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcCheckboxComponent, IgcChipComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRatingComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import LearningAppService from '../service/LearningApp-service';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcIconButtonComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcRatingComponent, IgcChipComponent, IgcCheckboxComponent);

@customElement('app-dashboard')
export default class Dashboard extends LitElement {
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
      background-color: transparent;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 840px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      background-color: white;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .row-layout {
      display: flex;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      height: max-content;
      max-width: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      flex-shrink: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_5 {
      background-color: transparent;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_6 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      flex-shrink: 0;
    }
    .group_7 {
      border-color: hsla(var(--ig-gray-300));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: -8px -24px -8px -16px;
      padding: 16px;
      min-width: 50px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 200px;
    }
    .rating-2 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 200px;
      flex-shrink: 0;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      flex-shrink: 0;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      flex-shrink: 0;
    }
    .side-panel {
      background-color: transparent;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 320px;
      flex-shrink: 0;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
    }
    .group_13 {
      background-image: url("/src/assets/avatar-cont.svg");
      background-size: 100% 100%;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_16 {
      background-color: transparent;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px 0;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_17 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      width: 180px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_18 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_19 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_20 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_21 {
      background-color: transparent;
      border-color: hsla(var(--ig-gray-300));
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      padding: 24px 0 0;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_22 {
      border-color: hsla(var(--ig-primary-500));
      border-width: 0px 0px 0px 5px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 8px 0 0;
      min-width: 50px;
      min-height: 50px;
    }
    .group_23 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 12px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_24 {
      border-color: hsla(var(--ig-success-500));
      border-width: 0px 0px 0px 5px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 8px 0 0;
      min-width: 50px;
      min-height: 50px;
    }
    .group_25 {
      border-color: hsla(var(--ig-info-500));
      border-width: 0px 0px 0px 5px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 8px 0 0;
      min-width: 50px;
      min-height: 50px;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .image {
      height: 100%;
    }
    .image_1 {
      object-fit: scale-down;
      max-height: 120px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .avatar {
      margin: 0 24px 0 0;
    }
    .content_2 {
      color: hsla(var(--ig-gray-600));
      height: max-content;
      min-width: min-content;
    }
    .chip {
      width: max-content;
      height: max-content;
    }
    .image_2 {
      object-fit: cover;
      border-radius: 100px;
      margin: 20px 0 24px;
      width: 140px;
      height: 140px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text_1 {
      color: hsla(var(--ig-secondary-500));
      height: max-content;
      min-width: min-content;
    }
    .image_3 {
      object-fit: cover;
      width: 70px;
      min-width: 70px;
    }
    .h6 {
      margin: 0 4px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: hsla(var(--ig-gray-600));
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .media-content {
      height: 120px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-gray-500));
    }
    .button {
      margin: 0 0 8px 8px;
      height: max-content;
    }
    .button_1 {
      height: max-content;
      min-width: 160px;
      flex-shrink: 0;
    }
    .user-input {
      width: max-content;
      height: max-content;
    }
    .button_2 {
      height: max-content;
      flex-shrink: 0;
    }
    .list {
      height: max-content;
    }
  `;

  constructor() {
    super();
    this.learningAppService.getCurrentlyAttending().then((data) => {
      this.learningAppCurrentlyAttending = data;
    }, err => console.log(err));
    this.learningAppService.getCategories().then((data) => {
      this.learningAppCategories = data;
    }, err => console.log(err));
    this.learningAppService.getPopularLecturers().then((data) => {
      this.learningAppPopularLecturers = data;
    }, err => console.log(err));
  }

  private learningAppService: LearningAppService = new LearningAppService();

  @property()
  private learningAppCurrentlyAttending?: any[];

  @property()
  private learningAppCategories?: any[];

  @property()
  private learningAppPopularLecturers?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="column-layout group_1">
          <h6 class="content">
            Continue learning
          </h6>
          <div class="row-layout group_2">
            ${this.learningAppCurrentlyAttending?.map((item: any) => html`
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="${item.Image}" attr="" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    ${item.Course}
                  </h3>
                  <h5 slot="subtitle">
                  </h5>
                </igc-card-header>
                <igc-card-actions class="actions-content">
                  <igc-button slot="start" @click="${() => Router.go('/courses')}" class="button">
                    <span class="material-icons">
                      play_circle_filled
                    </span>
                    <span>Continue</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button slot="end" variant="flat" class="icon-button">
                    <span class="material-icons">
                      check_circle_outline
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
            `)}
          </div>
        </div>
        <div class="column-layout group_3">
          <h6 class="content">
            Explore new categories
          </h6>
          <div class="row-layout group_4">
            ${this.learningAppCategories?.map((item: any) => html`
              <div class="column-layout group_5">
                <img src="${item.Image}" attr="" class="image_1" />
                <p class="typography__subtitle-1 content">
                  ${item.Category}
                </p>
              </div>
            `)}
          </div>
        </div>
        <div class="column-layout group_1">
          <div class="row-layout group_6">
            <h6 class="content">
              Popular lecturers
            </h6>
            <igc-button variant="flat" class="button_1">
              See all
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
          <igc-list class="list">
            ${this.learningAppPopularLecturers?.map((item: any) => html`
              <igc-list-item>
                <div>
                  <div class="row-layout group_7">
                    <div class="row-layout group_8">
                      <igc-avatar src="${item.Avatar}" size="medium" shape="circle" class="avatar"></igc-avatar>
                      <div class="column-layout group_9">
                        <p class="typography__subtitle-2 content">
                          ${item.Lecturer}
                        </p>
                        <p class="typography__body-2 content_2">
                          ${item.Role}
                        </p>
                      </div>
                      <div class="row-layout rating-2">
                        <igc-rating value="${item.Rating}" size="medium" class="user-input"></igc-rating>
                      </div>
                      <div class="row-layout group_10">
                        <igc-chip size="large" class="chip">
                          ${item.Tag}
                        </igc-chip>
                      </div>
                    </div>
                    <div class="row-layout group_11">
                      <igc-button variant="outlined" class="button_2">
                        See courses
                        <igc-ripple></igc-ripple>
                      </igc-button>
                    </div>
                  </div>
                </div>
              </igc-list-item>
            `)}
          </igc-list>
        </div>
      </div>
      <div class="column-layout side-panel">
        <div class="column-layout group_12">
          <div class="row-layout group_13">
            <img src="/src/assets/Avatar9.png" attr="" class="image_2" />
          </div>
          <div class="column-layout group_14">
            <h5 class="content">
              Alan Carter
            </h5>
            <p class="typography__subtitle-2 text_1">
              Level 3
            </p>
          </div>
        </div>
        <div class="column-layout group_15">
          <div class="column-layout group_16">
            <div class="row-layout group_17">
              <img src="/src/assets/ranking.svg" attr="" class="image_3" />
              <div class="column-layout group_18">
                <div class="row-layout group_19">
                  <h6 class="h6">
                    24
                  </h6>
                  <h6 class="content_2">
                    / 90
                  </h6>
                </div>
                <p class="typography__overline content">
                  Ranking
                </p>
              </div>
            </div>
            <div class="row-layout group_17">
              <img src="/src/assets/courses.svg" attr="" class="image_3" />
              <div class="column-layout group_18">
                <div class="row-layout group_19">
                  <h6 class="h6">
                    4
                  </h6>
                </div>
                <p class="typography__overline content">
                  COURSES
                </p>
              </div>
            </div>
            <div class="row-layout group_17">
              <img src="/src/assets/tasks.svg" attr="" class="image_3" />
              <div class="column-layout group_20">
                <div class="row-layout group_19">
                  <h6 class="h6">
                    6
                  </h6>
                  <h6 class="content_2">
                    / 12
                  </h6>
                </div>
                <p class="typography__overline content">
                  ASSIGNMENTS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column-layout group_21">
          <p class="typography__subtitle-2 text">
            Today's tasks
          </p>
          <div class="row-layout group_22">
            <div class="column-layout group_23">
              <p class="typography__subtitle-2 content">
                Build cards in Figma
              </p>
              <p class="typography__caption text_2">
                Due: Tomorrow
              </p>
            </div>
            <igc-checkbox class="user-input"></igc-checkbox>
          </div>
          <div class="row-layout group_24">
            <div class="column-layout group_23">
              <p class="typography__subtitle-2 content">
                Flexbox exercise
              </p>
              <p class="typography__caption text_2">
                Due: Sept 5th
              </p>
            </div>
            <igc-checkbox class="user-input"></igc-checkbox>
          </div>
          <div class="row-layout group_25">
            <div class="column-layout group_23">
              <p class="typography__subtitle-2 content">
                Build basic site structure
              </p>
              <p class="typography__caption text_2">
                Due: Sept 5th
              </p>
            </div>
            <igc-checkbox class="user-input"></igc-checkbox>
          </div>
        </div>
      </div>
    `;
  }
}
