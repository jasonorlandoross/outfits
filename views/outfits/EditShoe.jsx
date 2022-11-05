const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name } = this.props.shoe
    return (
      <Default title={`${name} Edit Page`} shoe={this.props.shoe}>

        <form method='POST' action='/shoe'>
          Name: <input type='type' name='name' placeholder='Shoe Type' /><br />
          Color: <input type='text' name='color' placeholder='Color of Shoe Here' /><br />
          Is Ready To Wear: <input type='checkbox' name='readyToWear' /><br />
          <input type='submit' value='Edit Shoe' />
        </form>
      </Default>
    )
  }
}
module.exports = Edit
