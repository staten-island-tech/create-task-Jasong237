// use an algorithm that finds a difference between two strings
// eg "abcfed" and "abcdfed"

```Javascript


function findDiff(x,y){

    let sortX = [...x].sort();
    let sortY = [...y].sort();

    for(let i = 0; i < sortX.length; i++){
        if(sort[i] != sortY[i]){
            return sortY[i];
        }
    }
}

// use a set??
```
