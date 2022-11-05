const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <(className="Shoe") Default title='Create A New Shoe'>
        <form method='POST' action='/shoes'>
          Name: <input type='text' name='name' placeholder='Name of Shoe Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Shoe Here' /><br />
          Is Ready To Wear: <input type='checkbox' name='readyToWear' /><br />
          <input type='submit' value='Submit Shoe' />
        </form>
      </Default>
    )
  }
}

module.exports = New
