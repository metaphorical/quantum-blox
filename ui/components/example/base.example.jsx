import React from 'react';


export default function() {
    let styles = require(`./${this.state.styleId}.example.css`);
    return (
        <div className={styles.container} >
            <h1>Example of dynamic DOM and styles</h1>
            <button onClick={this.changeStyle} >Change style!</button>
            <button onClick={this.changeDom} >Change dom!</button>
        </div>);
}