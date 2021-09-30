import { DIRECTORY } from '../../constants';
import { DirectoryActionTypes } from './directory.action-types';
import { FetchDirectoryAction } from './directory.actions';

export const fetchDirectorySections = (): FetchDirectoryAction => {
  return {
    type: DirectoryActionTypes.FETCH_DIRECTORY,
    payload: DIRECTORY.sections,
  };
};
