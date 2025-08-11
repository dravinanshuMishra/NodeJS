// 1. DECIMAL NUMBER SYSTEM
const digitList = [2,4,6,5];
const num = 2*1 + 4*10 + 6*100 + 5*1000;
// const num = digitList[0]*1 + digitList[1]*10 + digitList[2]*100 + digitList[3]*1000;
console.log(num); // 5642.

// 2. digitList2
const digitList2 = [7,3,2];
const num2 = 7*1 + 3*10 + 2*100;
console.log(num2); // 237

// 3. digitList3
const digitList3 = [2,4,6,8,9];

// 4. CREATE A FUNCTION FOR CONVERTING DIGIT LIST TO NUMBER.
const digitToNumber = (digitList) => {
    let num = 0;
    for(let i=0; i < digitList.length; i++) {
        num += digitList[i] * Math.pow(10, i);
    }
    console.log(num);
    return num;
}

digitToNumber(digitList3); // 98642