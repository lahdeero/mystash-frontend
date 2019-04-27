export function resolveUrl() {
  const host = window.location.host
  console.log('host = ', host)
  return host === 'lahdeero.github.io' ? 'https://my-stash.herokuapp.com' : 'http://Localhost:3001'
}
