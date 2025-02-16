import { create } from 'zustand';

type UserStore = {
  SelectElement: boolean | string;
  SelectedElement: (bookId: string) => void;
};

export const usePageStore = create<UserStore>()((set) => ({
  SelectElement: false,
  SelectedElement: (bookId) => {
    set({ SelectElement: bookId });

    setTimeout(() => {
      set({ SelectElement: false });
    }, 3000);
  },
}));
