const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, readyToWear } = this.props.outfit
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} outfit={this.props.outfit}>
        <p>{capName} is {color} and {readyToWear ? 'it\'s ready to wear' : 'it\'s not ready to wear'}</p>
      </Default>
    )
  }
}

module.exports = Show
