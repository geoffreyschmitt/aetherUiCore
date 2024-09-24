import React, { useEffect, useRef } from 'react';
import { RootElement } from './Dialog.styles';
import { TDialog } from './Dialog.types';
import { classNames } from '@/aether-ui-core/src/utils';
import { dialogEventChannel } from '@/aether-ui-core/src/eventChannels';

export const Dialog = ({
  className,
  children,
  id,
  closeButtonContentSlot,
  closeButtonAriaLabel,
  isModal,
  ButtonComponent = 'button',
  ...props
}: TDialog) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const showFunctionNameToCall = isModal ? 'showModal' : 'show';

  const handleOpenDialog = () => {
    dialogRef.current?.[showFunctionNameToCall]();
  };

  const handleCloseDialog = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    const unsubscribeOnOpen = dialogEventChannel.on('openDialog', payload => {
      if (payload.id === id) {
        handleOpenDialog();
      }
    });

    const unsubscribeOnClose = dialogEventChannel.on('closeDialog', payload => {
      if (payload.id === id) {
        handleCloseDialog();
      }
    });

    return () => {
      unsubscribeOnOpen();
      unsubscribeOnClose();
    };
  }, [id, showFunctionNameToCall]);

  return (
    <RootElement
      data-testid={'Dialog'}
      {...props}
      ref={dialogRef}
      id={id}
      className={classNames('dialog', className)}
    >
      {closeButtonContentSlot && (
        <ButtonComponent
          className="dialog__close-button"
          onClick={handleCloseDialog}
          autoFocus
          aria-label={closeButtonAriaLabel ?? 'Close modal'}
        >
          {closeButtonContentSlot}
        </ButtonComponent>
      )}
      <div className="dialog__content">{children}</div>
    </RootElement>
  );
};
