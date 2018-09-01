import uuid from 'uuid';
import { CREATE_RESULT_RECORD } from '../../constants';
import history from '../../history';

export function createResultRecord(resultObject) {
  return function(dispatch) {
    const resultId = uuid();
    const { wpmScore, correctTypedWords } = resultObject;
    dispatch({
      type: CREATE_RESULT_RECORD,
      payload: {
        resultId,
        wpmScore,
        correctTypedWords
      }
    });
    history.push(`result/?resultId=${resultId}`);
  };
}
