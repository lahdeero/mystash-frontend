export function resolveUrl() {
  const host = window.location.host
  console.log('host = ', host)
  return host === 'localhost:3000' ? 'http://Localhost:3001' : 'https://my-stash.herokuapp.com'
}
