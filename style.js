var friends= ['Pj', 'Amon', 'Aj', 'Rico', 'Trey'];



for (var i = 0; i < friends.length; i++) {
    console.log(friends[i],':' );
    
    for(j=99; j > 1; j--) {
        console.log(j + ' lines of code in the file,' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file');
    }     
     if(j===1) {
        console.log(j + ' line of code in the file, ' + j + ' line of code, ' + friends[i] + ' strike ones out, clears it all out,' + (j-1) +' no more lines of code in the file');
    }

}
    
