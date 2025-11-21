// expecting time to be a string in the format like '8:15' or '12:30'
function hourint_to_hourstr(hourstr) {
  //  0 -> midnight
  // 1 - 11 -> normally
  // 12 -> midday
  const hour_map = {
    0: "midnight",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "midday",
  };
  return hour_map[hourstr];
}

function minutesint_to_minutesstr(minutesstr) {
  // 1 to 29
  // 30 -> half
  // x = 31 - 59 -> 60-x . e.g: 2:31 -> twenty nine to three
  const timeToWords = {
    "01": "one",
    "02": "two",
    "03": "three",
    "04": "four",
    "05": "five",
    "06": "six",
    "07": "seven",
    "08": "eight",
    "09": "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty-one",
    22: "twenty-two",
    23: "twenty-three",
    24: "twenty-four",
    25: "twenty-five",
    26: "twenty-six",
    27: "twenty-seven",
    28: "twenty-eight",
    29: "twenty-nine",
  };

  if (Number(minutesstr) > 30) {
    minutesstr = String(60 - Number(minutesstr));
  }

  if (minutesstr == "30") {
    return "thirty";
  } else {
    return timeToWords[minutesstr];
  }
}

function convertTimeToWords(time) {
  // TODO: real code goes here!
  // separate the hour and minutes
  const hourint = time.split(":")[0];
  const minutesint = time.split(":")[1];

  // all special cases should be put above
  if (time === "0:00") {
    return "midnight";
  }

  // the common format here
  let hourstr = hourint_to_hourstr(hourint);
  const minutesstr = minutesint_to_minutesstr(minutesint);
  if (Number(minutesint) > 30) {
    // the 'to' case
    hourstr = String(Number(hourstr) + 1);
    return `${minutesstr} to ${hourstr}`;
  } else {
    return `${minutesstr} past ${hourstr}`;
  }
}

module.exports = {
  convertTimeToWords,
};
output = convertTimeToWords("0:00");
console.log(output);
output = convertTimeToWords("2:03");
console.log(output);
output = convertTimeToWords("2:33");
console.log(output);
output = convertTimeToWords("2:10");
console.log(output);
