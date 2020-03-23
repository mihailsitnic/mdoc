import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import Doctors from '../doctors'
import Messages from '../messages'
import Contacts from '../contacts'
import './styles.css'

function Main(props) {
    const { selectedPage } = props
    const renderDoctors = selectedPage === 'doctors' && <Doctors />
    const renderMessages = selectedPage === 'messages' && <Messages />
    const renderContacts = selectedPage === 'contacts' && <Contacts />
    return (
        <Fragment>
            <main className="main">
                {renderDoctors}
                {renderMessages}
                {renderContacts}
            </main>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    selectedPage: state.page
})

export default connect(mapStateToProps)(Main)