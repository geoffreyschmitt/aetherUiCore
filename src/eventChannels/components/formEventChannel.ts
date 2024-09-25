import { eventbus } from '../';

export const formEventChannel = eventbus<{
  submitForm: (payload: { id: string; formData: FormData }) => void;
}>();
