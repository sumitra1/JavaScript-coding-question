function find3Numbers(A, arr_size, sum) 
{ 
    let l, r; 
  
    // Fix the first element as A[i] 
    for (let i = 0; i < arr_size - 2; i++) 
    { 
  
        // Fix the second element as A[j] 
        for (let j = i + 1; j < arr_size - 1; j++) 
        { 
  
            // Now look for the third number 
            for (let k = j + 1; k < arr_size; k++) 
            { 
                if (A[i] + A[j] + A[k] == sum) 
                { 
                   console.log("Triplet is " + A[i] + 
                        ", " + A[j] + ", " + A[k]); 
                   
                } 
            } 
        } 
    } 
}



// Javascript program to find a triplet

// returns true if there is triplet with sum equal
// to 'sum' present in A[]. Also, prints the triplet
function find3Numbers(A, arr_size, sum)
{
	let l, r;
	/* Sort the elements */
	A.sort((a,b) => a-b);

	for (let i = 0; i < arr_size - 2; i++) {

		l = i + 1;
		r = arr_size - 1;

		while (l < r) {
			if (A[i] + A[l] + A[r] == sum)
			{
			document.write("Triplet is " + A[i] + ", "
				+ A[l] + ", " + A[r]);
				return true;
			}
			else if (A[i] + A[l] + A[r] < sum)
				l++;
			else // A[i] + A[l] + A[r] > sum
				r--;
		}
	}

	// If we reach here, then no triplet was found
	return false;
}

/* Driver program to test above function */

	let A = [ 1, 4, 45, 6, 10, 8 ];
	let sum = 22;
	let arr_size = A.length;

	find3Numbers(A, arr_size, sum);


// This code is contributed by Mayank Tyagi


