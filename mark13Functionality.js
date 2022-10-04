
function getDateFormatVariations(DateInputObj)
{
    var ddmmyyyy = DateInputObj.date+DateInputObj.month+DateInputObj.year;
    var mmddyyyy = DateInputObj.month + DateInputObj.date + DateInputObj.year;
    var yyyymmdd = DateInputObj.year + DateInputObj.month + DateInputObj.date;
    var ddmmyy = DateInputObj.date + DateInputObj.month + DateInputObj.year.slice(-2);
    var mmddyy = DateInputObj.month + DateInputObj.date + DateInputObj.year.slice(-2);
    var yymmdd = DateInputObj.year.slice(-2)+DateInputObj.month+DateInputObj.date;

    return [ddmmyyyy , mmddyyyy , yyyymmdd , ddmmyy , mmddyy, yymmdd];
}

function reverseString(str)
{
    var splittedStr = str.split("");
    var reverseStr = splittedStr.reverse();
    var reversedStr = reverseStr.join('');
    return reversedStr;
}

function isPallindrome(inpDateStr)
{
    strReversed = reverseString(inpDateStr);

    console.log("inpDateStr : "+inpDateStr);
    console.log("strReversed : "+strReversed);

    return strReversed === inpDateStr
}

function checkPallindromeforAlldateFormats(inpDate)
{
   //var ddmmyyyy = inpDate.date+inpDate.month+inpDate.year;
   var listOfFormats = getDateFormatVariations(inpDate);
    var pallindromeList = [];

    for(let i = 0; i<listOfFormats.length;i++)
    {
        var result = isPallindrome(listOfFormats[i]);
        pallindromeList.push(result);
    }

    console.log("pallindromeList : "+pallindromeList);
    return pallindromeList;
}

const inpBirthday = document.querySelector("#birthdate");
const showBtn = document.querySelector("#show-btn");
const outputContainer = document.querySelector("#output-container");

function getDateAsString(inpDateObj)
{
    var dateInStr ={
        date : "",
        month : "",
        year : ""
    }
    
    if(inpDateObj.day < 10)
    {
        dateInStr.date = "0"+inpDateObj.day;
    }
    else
    {
        dateInStr.date = inpDateObj.day.toString();
    }

    if(inpDateObj.month<10)
    {
        dateInStr.month = "0"+inpDateObj.month;
    }
    else
    {
        dateInStr.month = inpDateObj.month.toString();
    }

    dateInStr.year = inpDateObj.year.toString();

    //dateInStr=inpDateObj;
    console.log("dateInStr : "+dateInStr);

    console.log("dateInStr.date : "+dateInStr.date);
    console.log("dateInStr.month : "+dateInStr.month);
    console.log("dateInStr.year : "+dateInStr.year);

    return dateInStr;

}

function showBtnHandler()
{
    var inpBirthdate = inpBirthday.value;
    console.log(inpBirthdate.split("-"));
    if(inpBirthdate!=="")
    {
        var dateArr = inpBirthdate.split("-");
        console.log("dateArr : ",dateArr);
        var yyyy = dateArr[0];
        console.log("yyyy : ",yyyy);
        var mm = dateArr[1];
        console.log("mm : ",mm);
        var ddd = Number(dateArr[2]);

       
        var inpDateObj =
        {
            day : ddd,
            month : Number(mm), 
            year : Number(yyyy)
        };
    }

    var dateStrFormat = getDateAsString(inpDateObj);
    var pallindromeChkList = checkPallindromeforAlldateFormats(dateStrFormat);
    var isPallindrome = false;
    console.log("before if-  typeof isPallindrome :", typeof isPallindrome);

    for(let i=0; i<pallindromeChkList.length; i++)
    {
        if(pallindromeChkList[i])
        {
            isPallindrome = true;
            console.log("Inside if-  typeof isPallindrome :", typeof isPallindrome);
            break;
        }
    }

    if(isPallindrome)
    {
        outputContainer.innerText = "Yay! Your Birthday is Pallindrome!😊";
    }
    else
    {
        outputContainer.innerText= "Oopsie! Your Birthday is not Pallindrome!☹️"
    }
}

showBtn.addEventListener("click",showBtnHandler);