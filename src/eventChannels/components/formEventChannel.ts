import { eventbus } from '@/aether-ui-core/src/utils';

export const formEventChannel = eventbus<{
  submitForm: (payload: { id: string; formData: FormData }) => void;
}>();
