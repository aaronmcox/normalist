# normalist
a small libary of es6 functions used to maintain objects that follow or extend the byId / allId format recommended by redux

# usage

## installation
`npm install normalist`

## import
`import * as normalist from "normalist";`

## api

```javascript
create( array, idKey = "id", extraData = {});
filter({allIds, byId}, filterFunc);
find({allIds, byId}, testingFn);
merge(destination, source);
set(normalist, newElement, idKey = "id");
sort(normalist, compareFn, idKey = "id");
toArray({allIds, byId});
```


