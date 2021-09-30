//import { DIRECTORY } from '../../constants/directory';
import { DirectoryAction } from './directory.actions';
import { DirectoryActionTypes } from './directory.action-types';
import { ISection } from '../../shared/models';

interface DirectoryState {
  sections: ISection[];
}

const INITIAL_STATE: DirectoryState = { sections: [] };

const directoryReducer = (state: DirectoryState = INITIAL_STATE, action: DirectoryAction): DirectoryState => {
  switch (action.type) {
    case DirectoryActionTypes.FETCH_DIRECTORY:
      console.log('Fetch Directory...');
      return {
        ...state,
        sections: action.payload,
      };

    default:
      return state;
  }
};

export default directoryReducer;
