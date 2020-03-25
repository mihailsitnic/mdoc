import React, { useState } from 'react';
import { connect } from 'react-redux'
import { selectedPage } from '../../redux/ac'
import nav from './nav'
import './styles.css'

function Sidebar(props) {
    const sidenav = nav.map(item =>
        <li onClick={() => props.dispatch(selectedPage(item.path))} className="sidenav__li" key={item.id}>
            {item.text}
        </li>
    )

    return (
        <>
            <aside className="sidenav">
                <ul className="sidenav__ul">{sidenav}</ul>
            </aside>
        </>
    )
}

export default connect()(Sidebar)