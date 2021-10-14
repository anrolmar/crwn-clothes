import { DirectoryActionTypes } from './directory.action-types';
import { ISection } from '../../shared/models';

export interface FetchDirectoryAction {
  type: DirectoryActionTypes.FETCH_DIRECTORY;
  payload: ISection[];
}

export type DirectoryAction = FetchDirectoryAction;
