import { DIRECTORY } from '../../constants';
import { ISection } from '../../shared/models/Directory';
import { createContext } from 'react';

const DirectoryContext = createContext<ISection[]>(DIRECTORY.sections);

export default DirectoryContext;
