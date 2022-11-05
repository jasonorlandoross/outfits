const React = require('react')

class Default extends React.Component {
  render () {
    const { outfit, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/outfits'>Go to Your Closet</a>
            <a href='/shoes'>Go to Your Shoes</a>
            <a href='/outfits/new'>Create a New Outfit</a>
            {outfit ? <a href={`/outfits/${outfit._id}/edit`}> {outfit.name} Edit Page </a> : ''}
            {outfit ? <a href={`/outfits/${outfit._id}`}>{outfit.name} Show Page</a> : ''}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
