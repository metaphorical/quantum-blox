import React from 'react';

import DefaultLayout from '../../layouts/default';

import BadgesComponent from '../../components/badges';

export default function() {
    return (
        <DefaultLayout >
            <h1>Hi there</h1>
            <p>
                Welcome to my quickest protype, production ready stack. This page is made to share my take on modern UI development
            </p>
            <p>
                If you use this, you'll have good separation of concerns, good and well isolated components, no more wierd css problems and nice development experience.
            </p>
            <p>
                Downside is - you'll have to understand a bit of functional programming, a lot about modern javascript techniques and learn some stuff. Namely:
            </p>
            <BadgesComponent />
            
        </DefaultLayout>
    );
}