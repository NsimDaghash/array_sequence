/*
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that 
are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence 
of the array [1, 2, 3, 4], and so do the numbers [2, 4]. 
Note that a single number in an array and the array itself are both valid subsequences of the array.
*/
function isValidSubsequence(array, sequence) {
	let count=0,indx=0;    
	for(let i=0;i<sequence.length;i++){
        console.log(sequence.length);
		for(let j=0;j<array.length;j++){
          //  console.log(array[j]);
			if(array[j] == sequence[i]){
                if (indx == 0){
				count++;
                indx = j;
               // console.log(array[j]);
                }
                else{
                    if (j>indx) {
                        count++;
                        indx = i;
                      //  console.log(array[j]);
                    }
                }
			}
		}
    }
		if (count == sequence.length){
            console.log("true",count, " ",sequence.length);
			return true;
        }
		else {
            console.log("False",count ," ",sequence.length);
			return false;
        }    
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1,6,-1,10];
isValidSubsequence(array, sequence);
