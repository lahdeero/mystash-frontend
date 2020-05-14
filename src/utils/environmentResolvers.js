export function resolveUrl() {
  const host = window.location.host
  console.log('host = ', host)
  const cloudfront = 'https://d3eipmu8grncj0.cloudfront.net'
  // const heroku = 'https://my-stash.herokuapp.com'
  return host === 'localhost:3000' ? 'http://Localhost:8080' : cloudfront
}
