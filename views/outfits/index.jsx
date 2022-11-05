const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { outfits } = this.props
    return (
      <Default title='Your Closet'>
        <ul>
          {
                        outfits.map((outfit) => {
                          const { name, color, readyToWear, _id } = outfit
                          return (
                            <li key={_id}>
                              <a href={`/outfits/${_id}`}>
                                {name}
                              </a> is {color}

                              <br />
                              {
                                        readyToWear
                                          ? 'It\'s ready to wear'
                                          : 'It\'s not ready to wear'
                                    }
                              <br />
                              <form method='POST' action={`/outfits/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
