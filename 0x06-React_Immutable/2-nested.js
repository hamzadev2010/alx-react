// function below, edit it to return the value of the object at the defined path
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedObject = fromJS(object);

  return mappedObject.getIn(array, undefined);
}
