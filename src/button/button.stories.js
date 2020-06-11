import "./button.css"

export default { title: 'Button' };



/* Introduction */
export const introduction = () => `
<div>
    <button class="button">Button Tag</button>&nbsp;
    <input class="button" type="submit" value="Button Input">
</div>
`;


/* Stage */
export const stages = () => `
<div>
    <button class="button button-stage-default">Button Default</button>&nbsp;
    <button class="button button-stage-primary">Button Primary</button>&nbsp;
    <button class="button button-stage-info">Button Info</button>&nbsp;
    <button class="button button-stage-warning">Button Warning</button>&nbsp;
    <button class="button button-stage-danger">Button Danger</button>
</div>
`


/* Size */
export const sizes = () => `
<div>
    <button class="button button-size-xs">Button XS</button>&nbsp;
    <button class="button button-size-s">Button S</button>&nbsp;
    <button class="button button-size-m">Button M</button>&nbsp;
    <button class="button button-size-l">Button L</button>&nbsp;
    <button class="button button-size-xl">Button XL</button>
</div>
`

/* Display */
export const displays = () => `
<div style="width: 15%;">
    <button class="button button-size-xs button-display-fullwidth">Button XS</button>&nbsp;
    <button class="button button-size-s button-display-fullwidth">Button S</button>&nbsp;
    <button class="button button-size-m button-display-fullwidth">Button M</button>&nbsp;
    <button class="button button-size-l button-display-fullwidth">Button L</button>&nbsp;
    <button class="button button-size-xl button-display-fullwidth">Button XL</button>
</div>
`

/* Style */
export const styles = () => `
<div>
    <button class="button button-style-rounded">Rounded</button>&nbsp;
    <button class="button button-stage-primary button-style-rounded">Button Primary</button>&nbsp;
    <button class="button button-stage-info button-style-rounded">Button Info</button>&nbsp;
    <button class="button button-stage-warning button-style-rounded">Button Warning</button>&nbsp;
    <button class="button button-stage-danger button-style-rounded">Button Danger</button>
</div>
`
