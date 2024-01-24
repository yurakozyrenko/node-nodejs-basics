const PREF = '--';

const parseArgs = () => {
    // Write your code here
    const arrayArgs = process.argv.reduce((acc, element, index, array) => {
        if (element.startsWith(PREF)) {
            acc.push(element.replace(PREF, '') + ' is ' + array[index + 1]);
            return acc;
        }
        return acc;
    }, []);
    const resultString = arrayArgs.join(', ');
    console.log(resultString);
};

parseArgs();
