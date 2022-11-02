const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name } = this.props.outfit
    return (
      <Default title={`${name} Edit Page`} outfit={this.props.outfit}>

        <form method='POST' action='/outfit'>
          Name: <input type='type' name='name' placeholder='Name of Outfit Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Outfit Here' /><br />
          Is Ready To Wear: <input type='checkbox' name='readyToWear' /><br />
          <input type='submit' value='Edit Outfit' />
        </form>
      </Default>
    )
  }
}
module.exports = Edit
