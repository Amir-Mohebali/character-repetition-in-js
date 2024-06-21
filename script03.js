const charCount = (string) => {
    let result = '';
    let object;
    // 'chars' include all lowercase characters without spaces
    let chars = string.toLowerCase().split('').filter(char => char !== ' ');
    // console.log(chars);
    // 'object' include all the characters and number of repetitions
    object = chars.reduce((prev, curr) => {
        if(!prev[curr]) prev[curr] = { char: curr, count: 1 }
        else prev[curr].count++

        return prev;
    }, []);

    // Extract data from object and display them
    for (let obj of Object.values(object)) {
        result += obj.char + ':' + obj.count + "\n";
    }

    return result;
}


console.log(charCount("Hello World"));
