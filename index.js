const fi = function () {
    return {
        libraryMethod: function () {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        myEach: function (collection, callback) {
            for(let accessor in collection) {
                callback(collection[accessor])
            }

            return collection;
        },

        myMap: function (collection, callback) {
            let modifiedArray = []

            for (let accessor in callback) {
                modifiedArray.push(callback(collection[accessor]))
            }

            return modifiedArray;

        },

        myReduce: function (collection, callback, acc) {

        },

        myFind: function (collection, predicate) {

        },

    }

}
fi.libraryMethod() // will return the screen that states libraryMethod