import React from 'react'

export default class _404 extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>404 Page</div>
    )
  }
}
