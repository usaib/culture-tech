import React from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import './ContListen.css'
import './TopPods.css'

export class videoModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      height:1000,
      channel:"youtube"
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel={this.props.channel} isOpen={this.state.isOpen} videoId={this.props.vidId} onClose={() => this.setState({isOpen: false})} />
        {/* <button onClick={this.openModal}>Open</button> */}
        <button className={this.props.buttonClass}onClick={this.openModal}>
        <img src='images/cone.jpg' alt='playButton' ></img>
        </button>
      </div>
    )
  }
}

export default videoModal;

