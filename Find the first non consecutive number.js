https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

    function firstNonConsecutive (arr) {
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i]!== arr[i+1] - 1) {
                return arr[i+1];
            }
        }
        return null;
    }