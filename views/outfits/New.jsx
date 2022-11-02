const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Outfit'>
        <form method='POST' action='/outfits'>
          Name: <input type='text' name='name' placeholder='Name of Outfit Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Outfit Here' /><br />
          Is Ready To Wear: <input type='checkbox' name='readyToWear' /><br />
          <input type='submit' value='Submit Outfit' />
        </form>
      </Default>
    )
  }
}

module.exports = New
