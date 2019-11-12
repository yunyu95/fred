function distHamming(left: string, right: string): number {
    if (left.length !== right.length) {
        throw 'Error';
    }
    let result: number = 0;
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            result++;
        }
    }
    return result;
}

try {
    //console.log(distHamming('abcd','abcd'));
    console.log(distHamming('abcdr','ccc'));
    //console.log(distHamming('asdadaadadad','oooooooooooo'));
} catch (exc) {
    console.log(exc);
} finally {
    console.log('done');
}