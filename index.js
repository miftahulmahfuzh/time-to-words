// expecting time to be a string in the format like '8:15' or '12:30'
function hourint_to_hourstr(hourint) {
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
  return hour_map[hourint];
}

function minutesint_to_minutesstr(minutesint) {
  // 1 to 29
  // 30 -> half past
  // 15 -> quarter past
  // 45 -> quarter to
  // x = 31 - 59 -> 60-x . e.g: 2:31 -> twenty nine to three
  const timeToWords = {
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
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
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
    30: "half",
  };

  if (minutesint > 30) {
    minutesint = 60 - minutesint;
  }

  return timeToWords[minutesint];
}

function convertTimeToWords(time) {
  // separate the hour and minutes
  const hourint = parseInt(time.split(":")[0]);
  const minutesint = parseInt(time.split(":")[1]);

  // all special cases should be put above
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  // handle o'clock case (minutes = 0)
  if (minutesint === 0) {
    const hourstr = hourint_to_hourstr(hourint);
    return `${hourstr} o'clock`;
  }

  // the common format here
  let hourstr = hourint_to_hourstr(hourint);
  let minutesstr = minutesint_to_minutesstr(minutesint);

  if (minutesint > 30) {
    // the 'to' case
    const nexthourint = (hourint + 1) % 24;
    const nexthourstr = hourint_to_hourstr(nexthourint);
    return `${minutesstr} to ${nexthourstr}`;
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
output = convertTimeToWords("2:30");
console.log(output);
output = convertTimeToWords("2:15");
console.log(output);
output = convertTimeToWords("2:45");
console.log(output);
