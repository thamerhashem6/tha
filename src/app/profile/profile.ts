import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcAccordionComponent, IgcExpansionPanelComponent } from 'igniteui-webcomponents';
import NorthwindService from '../service/Northwind-service';

defineComponents(IgcAccordionComponent, IgcExpansionPanelComponent);

@customElement('app-profile')
export default class Profile extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
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
      width: 1752px;
      min-width: 50px;
      min-height: 50px;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  constructor() {
    super();
    this.northwindCategories = this.northwindService.getData('CategoriesType');
  }

  private northwindService: NorthwindService = new NorthwindService();

  @property()
  private northwindCategories?: any[];

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout demo-content">
        <igc-accordion ?single-expand="${false}" class="accordion">
          ${this.northwindCategories?.map((item: any) => html`
            <igc-expansion-panel>
              <p class="typography__body-1 text">
                Body 1
              </p>
              <span slot="title">Title goes here...</span>
              <span slot="subtitle">${item.description}</span>
            </igc-expansion-panel>
          `)}
          <igc-expansion-panel>
            <p class="typography__body-1 text">
              Body 1
            </p>
            <span slot="title">Title goes here...</span>
          </igc-expansion-panel>
          <igc-expansion-panel>
            <p class="typography__body-1 text">
              Body 1
            </p>
            <span slot="title">Title goes here...</span>
          </igc-expansion-panel>
        </igc-accordion>
      </div>
    `;
  }
}
