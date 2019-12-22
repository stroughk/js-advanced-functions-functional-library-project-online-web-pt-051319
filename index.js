const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
          const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

          for (let idx = 0; idx < newCollection.length; idx++)
            iteratee(newCollection[idx])

          return collection
      },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
