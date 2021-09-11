// Find object by id in an array of JavaScript objects
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["Javascript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(firstName) {
  var result;

  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === firstName) {
      result = contacts[i];
    }
  }
  console.log(result);
  //   console.log(firstName);
  //   console.log(contacts.length);
  let findFirstNameResult = contacts.find(
    (firstNames) => firstNames.firstName === "firstName"
  );
  console.log(findFirstNameResult);
  //   if (findFirstNameResult) {
  //     console.log(firstName);
  //   } else {
  //     return "No such contact";
  //   }
}
lookUpProfile("Akira");
