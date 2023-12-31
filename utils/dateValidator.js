require("dotenv").config();
/**
 * 
 * @param {*} date last time NFT has been updated in format YYYY-MM-DDThh:mm:ss:ms
 * @returns true or false if the NFT can be updated
 */
exports.validateDate = (date) => {
    const env = formatDate(process.env.ACTUAL_DATE);
    const user = formatDate(date);
    if (user.year > env.year) {
        console.log(1);
        return false;
    } else if (user.year < env.year) {
        console.log(2);
        return true;
    } else {
        if (user.month > env.month) {
            console.log(3);
            return false;
        } else if (user.month < env.month) {
            console.log(4);
            return true;
        } else {
            console.log(5);
            return (user.day < env.day);
        }
    }
}

/**
 * Function to format the day into a json
 * @param {*} date 
 * @returns date as a json with y/m/d fields
 */
function formatDate(date) {
    return {
        year: date.split("-")[0],
        month: date.split("-")[1],
        day: (date.split("-")[2]).split("T")[0]
    }
}