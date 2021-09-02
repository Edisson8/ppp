import { css } from '../../../lib/element/styles/css.js';
import { display } from '../../../lib/utilities/style/display.js';

// TODO - design tokens
export const sideNavGroupStyles = (context, definition) =>
  css`
    ${display('flex')}

    :host {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .start,
    .end {
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
    }

    .start {
      margin-inline-end: 8px;
    }

    .end {
      margin-inline-start: 8px;
    }

    .title {
      padding: 16px 16px 8px;
      position: relative;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      font-size: 12px;
      line-height: 1em;
      letter-spacing: 0.3px;
      font-weight: bold;
      text-transform: uppercase;
      color: rgb(17, 97, 73);
      min-height: 32px;
      margin-top: 0;
      margin-bottom: 0;
    }

    .title-container {
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
    }

    .items-container {
      margin-block: 0;
      padding-inline-start: 0;
      padding: 0;
      list-style-type: none;
    }
  `;