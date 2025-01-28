import { createContext } from 'react';

type ModalContextType = {
  handleClose: () => void;
};
export const ModalContext = createContext<ModalContextType>({
  handleClose: () => {},
});
