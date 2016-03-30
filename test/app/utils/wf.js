/* globals wfTorrent */

// input: props Object
// sample input:
// const sample = {
//   image: 'img.jpg',
//   image2: 'img2.jpg',
//   method: 'function'
// }

// copy props to newProps

function wfReplace (props) {
  console.log('this is wfTorrent: ', wfTorrent)

  // TODO: parse files

  var keys = Object.keys(props)
  console.log(props)
  var newProps = {}

  // TODO: find a better way to copy

  keys.forEach((key) => {
    newProps[key] = props[key]
  })

  keys.forEach((key) => {

    // check if prop values exist on filesObj
    if (wfTorrent[newProps[key]]) {
      // console.log('image? ', newProps[key])
      // console.log('blob url? ', wfTorrent[newProps[key]])
      newProps[key] = wfTorrent[newProps[key]] // <-- will be blob URL if it has finished downloading
    }
  })
  // console.log('here is newProps: ', newProps)
  return newProps
}

export default wfReplace

// /* globals wfTorrent */
//
// function wf (props) {
//   var keys = Object.keys(props)
//   var newProps = {}
//
//   keys.forEach((key) => {
//     newProps[key] = props[key]
//   })
//
//   keys.map((key) => {
//     if (newProps[key].includes('google.png')) {
//       newProps[key] = wfTorrent['google.png']
//     }
//     // need to make request to the page and see if the image has been appended, if it has, then change source to blog url, if not, then make request to the server
//     if (newProps[key].includes('apple.png')) {
//       newProps[key] = wfTorrent['apple.png']
//     }
//
//     if (newProps[key].includes('netflix.png')) {
//       newProps[key] = wfTorrent['netflix.png']
//     }
//   })
//
//   return newProps
// }
//
// export default wf
