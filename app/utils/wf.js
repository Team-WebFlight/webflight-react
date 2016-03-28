/* globals wfTorrent */

function wf (props) {
  var keys = Object.keys(props)
  var newProps = {}

  keys.forEach((key) => {
    newProps[key] = props[key]
  })

  keys.map((key) => {
    if (newProps[key].includes('google.png')) {
      newProps[key] = wfTorrent['google.png']
    }

    if (newProps[key].includes('apple.png')) {
      newProps[key] = wfTorrent['apple.png']
    }

    if (newProps[key].includes('netflix.png')) {
      newProps[key] = wfTorrent['netflix.png']
    }
  })

  return newProps
}

export default wf
