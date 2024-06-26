// create a function getImmutableObject that accepts object as a parameter and converts
// it into an immutable Map using fromJS of the Immutable.js library
import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}
