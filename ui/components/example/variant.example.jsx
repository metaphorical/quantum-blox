import React from 'react';


export default function() {
    let styles = require(`./${this.state.styleId}.example.css`);
    return (
        <div className={styles.container} >
            <h1>Example of dynamic DOM and styles</h1>
            <input type="button" value="Change style!" onClick={this.changeStyle} />
            <input type="button" value="Change dom!" onClick={this.changeDom} />
            <div className="half">Left column</div>
            <div className="half">Right column</div>
        </div>);
}