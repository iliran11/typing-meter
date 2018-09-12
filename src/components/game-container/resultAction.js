import uuid from 'uuid';
import { CREATE_RESULT_RECORD } from '../../constants';
import history from '../../history';
import { format } from 'date-fns';

export function createResultRecord(resultObject) {
  return function(dispatch) {
    const resultId = uuid();
    const { wpmScore, correctTypedWords } = resultObject;
    const date = new Date();
    dispatch({
      type: CREATE_RESULT_RECORD,
      payload: {
        resultId,
        wpmScore,
        correctTypedWords,
        createdDate: format(date, 'MM/DD/YYYY HH:mm')
      }
    });
    history.push(`result/?resultId=${resultId}`);
  };
}
