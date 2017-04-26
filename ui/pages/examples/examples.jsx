import React from 'react';

import DefaultLayout from '../../layouts/default';

import ExampleComponent from '../../components/example';

export default function() {
    return (
        <DefaultLayout
            globalCounter={this.props.globalCounter}
        >
            <h1>Example components</h1>

            <ExampleComponent />

            <button onClick={this.increseGlobal}>Increse</button>
            <button onClick={this.decreseGlobal}>Decrese</button>
            <aside>
                <button onClick={this.fetchGames}>FETCH HOT BOARD GAMES</button>
            </aside>
            {Object.keys(this.props.bggHotGames).length > 0 ?
                <div>
                    <h1>Games hot right now</h1>
                    <ul>
                    {
                        this.props.bggHotGames.map((item, i) => {
                          return (<li key={i}>{item.name}</li>);
                        })
                    }
                    </ul>
                </div>
                : '' }
        </DefaultLayout>
    );
}