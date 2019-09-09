import style_text from './_spectatorModeIndicatorElement.scss';

/**
 * Calculates the element ID.
 * 
 * @param {Number=0} id An optional ID that is used to calculate the elements ID 
 */
const calculateSpecatorModeIconId = (id=0) => `spectator-mode-icon-${id}` ;

/**
 * Name of the element.
 */
const elementName = 'spectator-mode-indicator';

/**
 * Markup definition for this test.
 */
const markup = `
    <style>
        ${style_text}
    </style>
    <div id="${calculateSpecatorModeIconId()}" class="rdwc spectator container visible" aria-hidden="true">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="442.04px" height="442.04px" viewBox="0 0 442.04 442.04" xml:space="preserve" aria-hidden="true"> 
    <g>
        <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
            c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
            c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
            c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
            c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
            c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
            c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
    </g>
    <g>
        <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
            c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
            c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
            s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
    </g>
    <g>
        <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/>
    </g>
   </svg>
</div> 
`;

/**
 * Spectator mode indicator is a small eye on the top right of the display that. The component is implemented as
 * custom html web component. 
 * 
 * @example
 *  <spactator-mode-indicator id="indicator"></spectator-mode-indicator>
 * 
 *  <script>
 *      var element = document.getElementById('indicator');
 *      element.hide();
 *  </script>
 * 
 * @class SpectatorModeIndicator
 * @extends {HTMLElement}
 */
class SpectatorModeIndicator extends HTMLElement {
    
    /**
     * Creates an instance of SpectatorModeIndicator.
     *
     * @param {String} id The ID of the element
     * @memberof SpectatorModeIndicator
     */
    constructor(id) {
        super();
        this.attachShadow({mode: 'open'}).innerHTML = markup;
        this.id = id;
    }

    /**
     * Hides the element on the screen.
     */
    hide() {
        this.shadowRoot.getElementById(calculateSpecatorModeIconId()).classList.add('hidden');
    }

    /**
     * Shows the element on the screen.
     */
    show() {
        this.shadowRoot.getElementById(calculateSpecatorModeIconId()).classList.remove('hidden');
    }

    /**
     * Calculates if the element is visible on the screen.
     * 
     * @returns {boolean} true if the element is visible, false otherwise.
     */
    isVisible() {
        return !this.shadowRoot.getElementById(calculateSpecatorModeIconId()).classList.contains('hidden');
    }
}

/**
 * Register the web component as custom element if it hasn't yet.
 */
if(!customElements.get(elementName)) {
    customElements.define(elementName, SpectatorModeIndicator);
}

export default SpectatorModeIndicator;