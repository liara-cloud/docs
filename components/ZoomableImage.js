import React, { Component, createRef } from 'react'
 
let zoomInstance;

export default class ZoomableImage extends Component {
  imageRef = createRef()
  async componentDidMount() {
    if( ! zoomInstance) {
      const { default: zoom } = await import('medium-zoom')
      zoomInstance = zoom();
    }

    this.zoom = zoomInstance;

    this.zoom.attach(this.imageRef.current);
  }

  componentWillUnmount() {
    this.zoom.detach(this.imageRef.current);
  }

  render() {
    return <img ref={this.imageRef} {...this.props} />
  }
}
