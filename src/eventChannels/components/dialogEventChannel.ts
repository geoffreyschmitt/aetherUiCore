import { eventbus } from '../';

export const dialogEventChannel = eventbus<{
  openDialog: (payload: { id: string }) => void;
  closeDialog: (payload: { id: string }) => void;
}>();
