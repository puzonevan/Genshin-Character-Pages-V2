import React from 'react';
import { Display } from './display/Display';
import { Menu } from './menu/Menu';


export function TalentsAscend(props){
    return (
        <section>
            <h2>Talents and Ascensions</h2>
            <Display />
            <Menu />
            <Display />
            <Menu />
        </section>
    );
};