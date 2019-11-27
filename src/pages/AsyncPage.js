import React, { Component } from 'react'

export default function asyncPage(importComponent) {
  class AsyncPage extends Component {
    state = {
      component: null
    }

    async componentDidMount() {
      const { default: component } = await importComponent()

      this.setState({ component })
    }

    render() {
      const { component } = this.state
      const AsyncComponent = component

      return AsyncComponent ? <AsyncComponent {...this.props} /> : null
    }
  }

  return AsyncPage
}
