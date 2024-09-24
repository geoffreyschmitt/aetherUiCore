import { eventbus } from '@/aether-ui-core/src/utils';

export const dialogEventChannel = eventbus<{
  openDialog: (payload: { id: string }) => void;
  closeDialog: (payload: { id: string }) => void;
}>();
