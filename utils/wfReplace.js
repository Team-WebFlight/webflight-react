/* globals wfTorrent */

// input: props Object
// sample input:
const sample = {
  image: 'img.jpg',
  image2: 'img2.jpg',
  method: 'function'
}

// copy props to newProps

function wfReplace (props) {
  var keys = Object.keys(props)
  var newProps = {}

  keys.forEach((key) => {
    newProps[key] = props[key]
  })

  keys.forEach((key) => {
    // check if prop values exist on filesObj
    if (wfTorrent[key]) {
      newProps[key] = wfTorrent[key] // <-- will be blob URL if it has finished downloading
    }
  })

  return newProps
}
