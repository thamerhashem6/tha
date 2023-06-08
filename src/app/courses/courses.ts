import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcAccordionComponent, IgcAvatarComponent, IgcChipComponent, IgcExpansionPanelComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRatingComponent } from 'igniteui-webcomponents';
import LearningAppService from '../service/LearningApp-service';

defineComponents(IgcListComponent, IgcListItemComponent, IgcRatingComponent, IgcChipComponent, IgcAvatarComponent, IgcIconComponent, IgcAccordionComponent, IgcExpansionPanelComponent);

@customElement('app-courses')
export default class Courses extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      background-color: white;
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 2px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 40px;
      overflow: auto;
      position: relative;
      padding: 32px 0 0 32px;
      max-width: 700px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: hidden;
      position: relative;
      min-width: 440px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      height: 30px;
      min-height: 30px;
    }
    .group_5 {
      background-color: white;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 40px;
      overflow: auto;
      position: relative;
      min-width: 600px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 500px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_7 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 32px 32px 40px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 240px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: 0 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 200px;
    }
    .group_13 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 0 32px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px 32px 32px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .image {
      object-fit: cover;
      border-radius: 8px;
      width: 140px;
      height: 100px;
    }
    .text {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
    }
    .chip {
      position: relative;
      min-width: 50px;
    }
    .image_1 {
      object-fit: cover;
      border-radius: 13px;
      min-width: 400px;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .h5 {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      margin: 0 24px 0 0;
    }
    .text_1 {
      color: hsla(var(--ig-gray-600));
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-secondary-400));
    }
    .text_2 {
      margin: 0 24px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .avatar_1::part(base) {
      background-color: transparent;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-success-500));
    }
    .icon_2 {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .avatar_1_1::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_2::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_3::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_4::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_5::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_6::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_7::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_8::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_9::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_10::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_11::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_12::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_13::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_14::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_15::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_16::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_17::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_18::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_19::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_20::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_21::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_22::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_23::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_24::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_25::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_26::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_27::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_28::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_29::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_30::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_31::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_32::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_33::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_34::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_35::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_36::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_37::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_38::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_39::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .avatar_1_40::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .list {
      height: max-content;
    }
    .list_1 {
      height: max-content;
      min-width: max-content;
    }
    .rating {
      width: max-content;
      height: max-content;
    }
  `;

  constructor() {
    super();
    this.learningAppService.getAllCourses().then((data) => {
      this.learningAppAllCourses = data;
    }, err => console.log(err));
  }

  private learningAppService: LearningAppService = new LearningAppService();

  @property()
  private learningAppAllCourses?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <h6 class="content">
            Courses
          </h6>
          <igc-list class="list">
            ${this.learningAppAllCourses?.map((item: any) => html`
              <igc-list-item>
                <div>
                  <div class="row-layout group_2">
                    <img src="${item.Image}" attr="" class="image" />
                    <div class="column-layout group_3">
                      <p class="typography__subtitle-2 content">
                        ${item.Course}
                      </p>
                      <p class="typography__caption text">
                        ${item.Intro}
                      </p>
                      <div class="row-layout group_4">
                        <igc-rating value="${item.Rating}" size="small" class="rating"></igc-rating>
                        <igc-chip size="large" class="chip">
                          ${item.Level}
                        </igc-chip>
                        <igc-chip size="large" class="chip">
                          ${item.Tag}
                        </igc-chip>
                      </div>
                    </div>
                  </div>
                </div>
              </igc-list-item>
            `)}
          </igc-list>
        </div>
      </div>
      <div class="row-layout group_5">
        <div class="column-layout group_6">
          <div class="row-layout group_7">
            <img src="/src/assets/course1.svg" attr="" class="image_1" />
            <div class="column-layout group_8">
              <h5 class="h5">
                Web Development Basics
              </h5>
              <div class="row-layout group_9">
                <igc-rating value="4" size="medium" class="rating"></igc-rating>
                <igc-chip size="large" class="chip">
                  Beginner
                </igc-chip>
                <igc-chip size="large" class="chip">
                  Front-end
                </igc-chip>
              </div>
              <div class="column-layout group_10">
                <p class="typography__body-2 text">
                  HTML, CSS, and JavaScript: The basics of web development. If you’re looking to get started on front-end development, this course is for you. You'll find it particularly useful if you're coming from some other area of software development. 
                </p>
                <p class="typography__body-2 text">
                  We will then dive deep into each technology, exploring concepts like forms and controls in HTML, OOP in JavaScript, and the most important CSS patterns to make your web pages look good.
                </p>
              </div>
              <div class="row-layout group_11">
                <igc-avatar src="/src/assets/Avatar14.png" size="medium" shape="circle" class="avatar avatar_1"></igc-avatar>
                <div class="column-layout group_12">
                  <p class="typography__subtitle-2 content">
                    Susy Berenson
                  </p>
                  <p class="typography__body-2 text_1">
                    Senior Full-Stack Dev.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row-layout group_13">
            <h6 class="content">
              Course Content
            </h6>
            <div class="row-layout group_14">
              <span class="material-icons icon">
                book
              </span>
              <p class="typography__body-1 text_2">
                40 lectures
              </p>
              <span class="material-icons icon">
                access_time
              </span>
              <p class="typography__body-1 content">
                8 hours
              </p>
            </div>
          </div>
          <div class="column-layout group_15">
            <igc-accordion ?single-expand="${true}" class="accordion">
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_1">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Welcome to Web Development Basics</div>
                    <span slot="end" class="material-icons icon_1">
                      check_circle
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_2">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Downloadable Course Resources</div>
                    <span slot="end" class="material-icons icon_1">
                      check_circle
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_3">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Setup and Software Requirements</div>
                    <span slot="end" class="material-icons icon_1">
                      check_circle
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Quick Introduction</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_4">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Getting to Know HTML Tags</div>
                    <span slot="end" class="material-icons icon_1">
                      check_circle
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_5">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Viewing HTML Tags in Page Source</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_6">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Components and Structure of a Website</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_7">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Adding Tag Attributes</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Basics of HTML Elements</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_8">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Setting Up a Basic HTML Page</div>
                    <span slot="end" class="material-icons icon_1">
                      check_circle
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_9">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Creating Links and Formatting Text</div>
                    <span slot="end" class="material-icons icon_1">
                      check_circle
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_10">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Adding Basic Page Content</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_11">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Browser Favicon</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Creating an HTML Page</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_12">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">CSS Basics - Part 1</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_13">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">CSS Basics - Part 2</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_14">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Getting Started with External CSS</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_15">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Common CSS Properties</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_16">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Setting Colors with CSS</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Basic Styling with CSS</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_17">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Adding Paragraphs</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_18">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Creating Line Breaks</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_19">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Working with Headings</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_20">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Good Practices</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Paragraph and Heading Tags</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_21">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Inserting Images With the &lt;img&gt; Tag</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_22">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Image Attributes</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_23">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Image Formatting</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Working With Images</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_24">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Creating an Unordered List</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_25">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Unordered List Sub-Levels</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_26">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Creating an Ordered List</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_27">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Formating Lists</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Ordered and Unordered Lists</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_28">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Basics of HTML Tables &amp; Examples</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_29">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Creating a Basic HTML Table</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_30">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Creating a Basic HTML Table</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_31">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Additional Table Formatting</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Creating HTML Tables</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_32">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Introduction to Forms</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_33">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Creating HTML Input Text Controls</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_34">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Creating HTML Form Labels</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_35">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Adding an HTML Form Button to Submit Form Data</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Creating Forms</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_36">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Static vs. Dynamic Webpages</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_37">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">JavaScript Basics: Fundamental Syntax</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_38">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Using Alerts and Prompts</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_39">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Events</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1_40">
                      <span class="material-icons">play_circle_outline</span>
                    </igc-avatar>
                    <div slot="title">Testing JavaScript</div>
                    <span slot="end" class="material-icons icon_2">
                      playlist_play
                    </span>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Introduction to JavaScript</span>
              </igc-expansion-panel>
            </igc-accordion>
          </div>
        </div>
      </div>
    `;
  }
}
