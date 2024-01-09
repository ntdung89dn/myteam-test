import { useMutation } from 'react-query';
import { saveTimber } from '../../api/saveTimber';

export function useSaveTimber() {
  const { isLoading, isSuccess, isError, mutateAsync } = useMutation(`SAVE_TIMBER_KEY`, (timberValue: string ) =>
    saveTimber(timberValue),
  );

  return {
    isLoading,
    isSuccess,
    isError,
    mutateAsync,
  };
}
