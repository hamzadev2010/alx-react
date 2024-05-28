// a function named printBestStudents
import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((std) => {
    std.firstName.charAt(0).toUpperCase();
    return std.score > 70;
  });

  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObject = filtered.toJS();

  Object.keys(JSObject).map((cle) => {
    JSObject[cle].firstName = capFirstLetter(JSObject[cle].firstName);
    JSObject[cle].lastName = capFirstLetter(JSObject[cle].lastName);
    return JSObject[cle];
  });

  console.log(JSObject);
}
