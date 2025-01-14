import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-material-styles/mixins/overlay.js';

registerStyles(
  'vcf-date-range-picker-overlay',
  css`
      :host([fullscreen]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: stretch;
      }

      [part="overlay"] {
        overflow: hidden;
        -webkit-overflow-scrolling: auto;
      }

      :host(:not([fullscreen])) [part="overlay"] {
        width: 500px;
        max-height: 500px;
        border-radius: 0 4px 4px;
      }

      :host(:not([fullscreen])[right-aligned]) [part="overlay"] {
        border-radius: 4px 0 4px 4px;
      }

      :host(:not([fullscreen])[bottom-aligned]) [part="overlay"] {
        border-radius: 4px;
      }

      :host(:not([fullscreen])[show-week-numbers]) [part="overlay"] {
        width: 536px;
      }

      [part="content"] {
        padding: 0;
      }
      `,
  { include: ['material-overlay'], moduleId: 'material-date-range-picker-overlay' }
);
