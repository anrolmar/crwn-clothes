import { IAuthUser } from '../../shared/models/AuthUser';
import { createContext } from 'react';

const CurrentUserContext = createContext<IAuthUser | null>(null);

export default CurrentUserContext;
