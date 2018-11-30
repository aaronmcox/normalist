# normalist
a small libary of es6 functions used to maintain objects that follow or extend the byId / allId format recommended by redux

# usage

## installation

`npm i normalist`

## api

```javascript
import * as normalist from "normalist";

normalist.create( array, idKey = "id", extraData = {});
normalist.filter({allIds, byId}, filterFunc);
normalist.find({allIds, byId}, testingFn);
normalist.merge(destination, source);
normalist.set(normalist, newElement, idKey = "id");
normalist.sort(normalist, compareFn);
normalist.toArray({allIds, byId});
```


