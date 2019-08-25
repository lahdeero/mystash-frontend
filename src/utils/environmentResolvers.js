export function resolveUrl() {
  const host = window.location.host
  console.log('host = ', host)
  const ec2 = 'https://ec2-13-48-47-185.eu-north-1.compute.amazonaws.com'
  // const heroku = 'https://my-stash.herokuapp.com'
  return host === 'localhost:3000' ? 'http://Localhost:3001' : ec2
}
