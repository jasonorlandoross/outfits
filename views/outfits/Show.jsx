const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, readyToWear } = this.props.outfit
    let nameS, colorS, readyToWearS // shoe properties
    if (this.props.shoe) {
      nameS = this.props.shoe.name
      colorS = this.props.shoe.color
      readyToWearS = this.props.shoe.readyToWear
    }
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} outfit={this.props.outfit}>
        <p className='outfit'>{capName} is {color} and {readyToWear ? 'it\'s ready to wear' : 'it\'s not ready to wear'}</p>
        <p>Shoe: {nameS || 'NO SHOE SELECTED'} {colorS ? `is ${colorS}` : ''}</p>
      </Default>
    )
  }
}

module.exports = Show
