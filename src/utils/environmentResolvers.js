export function resolveUrl() {
  const host = window.location.host
  console.log('host = ', host)
  return host === 'https://lahdeero.github.io' ? 'https://my-stash.herokuapp.com' : 'http://Localhost:3001'
}
