import PropTypes from 'prop-types'
import '../App.css';
import NewInvoice from "./NewInvoice";
import  Modal from './Modal';
import React, {Component} from "react";

class Header extends React.Component {
    state = { isOpen: false };

    toggleModal = () => {
        this.state.isOpen = !this.state.isOpen;
        console.log("state::" + this.state.isOpen)
    }

    openModal = () => {
        this.state.isOpen = true };


    render() {

        return (
            <header className=''>
                <div className='header'>
                    <h1 className='invoice-number'>Invoices</h1>
                    <span>There are {this.props.invoices.length} Invoices</span>
                    <span className=''>
              <button className='newInvoiceBtn floatRight martopNeg30px'  onClick={this.toggleModal}>
                <svg className="svg-circleplus" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="white" stroke-width="7.5"></circle>
                  <line x1="32.5" y1="50" x2="67.5" y2="50" stroke-width="5"></line>
                  <line x1="50" y1="32.5" x2="50" y2="67.5" stroke-width="5"></line>
                </svg>
                  <p>New Invoice</p></button>
          </span>

                    <span className='floatRight martopNeg20px'>Filter by status
          <svg className='filterByStatusArrow' width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </span>

                    <Modal show={this.state.isOpen} onClose={this.toggleModal} class='colorRed'>
                        <span>`Here's some content for the modal`</span>
                    </Modal>

                </div>

                {/*{this.location.pathname === '/' && (
                    <>
                    </>
                )}*/}
            </header>
        )
    }
}
/*

const Header = ({ invoices, title, onAdd, showAdd }) => {
    const state = { isOpen: false };

   const toggleModal = () => {
       state.isOpen = !state.isOpen;
       console.log("state::" + state.isOpen)
    }

    const openModal = () => {
        state.isOpen = true };

  const location = useLocation();

    return (
    <header className=''>
      <div className='header'>
          <h1 className='invoice-number'>{title}</h1>
          <span>There are {invoices.length} Invoices</span>
          <span className=''>
              <button className='newInvoiceBtn floatRight martopNeg30px'  onClick={toggleModal}>
                <svg className="svg-circleplus" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="white" stroke-width="7.5"></circle>
                  <line x1="32.5" y1="50" x2="67.5" y2="50" stroke-width="5"></line>
                  <line x1="50" y1="32.5" x2="50" y2="67.5" stroke-width="5"></line>
                </svg>
                  <p>New Invoice</p></button>
          </span>

          <span className='floatRight martopNeg20px'>Filter by status
          <svg className='filterByStatusArrow' width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </span>

          <Modal show={state.isOpen} onClose={toggleModal} class='colorRed'>
              <span>`Here's some content for the modal`</span>
          </Modal>

      </div>

      {location.pathname === '/' && (
        <>
        </>
      )}
    </header>
  )
}
*/

/*Header.defaultProps = {
  title: 'Invoices',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}*/

export default Header
