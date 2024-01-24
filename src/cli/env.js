const PREF = 'RSS_';

const parseEnv = () => {
    // Write your code here
    const arrayEnv = Object.entries(process.env).reduce((acc, [key, value]) => {
        if (key.startsWith(PREF)) {
            acc.push(key + '=' + value);
            return acc;
        }
        return acc;
    }, []);
    const resultString = arrayEnv.join('; ');
    console.log(resultString);
};

parseEnv();
