var pageLoadedMap = {}

function preload(pageId) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('done!')
      resolve({
        id: pageId
      })
    }, 200)
  })
  .then((obj) => {
    pageLoadedMap[obj.id] = true
    return obj
  })
  .then((obj) => {
    return () => {
      console.log('go to loaded page', obj.id)
    }
  })
}

// function goTo(pageId) {
//   if (pageId in pageLoadedMap) {
//     console.log('go page ', pageId)
//   } else {
//     console.log('openLink', '/path/to/' + pageId)
//   }
// }

var handler = preload('pushOffer')

setTimeout(function() {
  handler.then( go => go() )
}, 5000)

// goTo('pushOffer')

// setTimeout(function() {
//   goTo('pushOffer')
//   console.log('map', pageLoadedMap)
// }, 300)

// console.log('map', pageLoadedMap)
// 