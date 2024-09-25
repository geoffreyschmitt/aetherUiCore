import { TBus, TEventBus, TEventBusConfig, TEventMap } from './eventbus.types';

export function eventbus<E extends TEventMap>(
  config?: TEventBusConfig,
): TEventBus<E> {
  const bus: Partial<TBus<E>> = {};

  const on: TEventBus<E>['on'] = (key, handler) => {
    if (bus[key] === undefined) {
      bus[key] = [];
    }
    bus[key]?.push(handler);

    return () => {
      off(key, handler);
    };
  };

  const off: TEventBus<E>['off'] = (key, handler) => {
    const index = bus[key]?.indexOf(handler) ?? -1;
    bus[key]?.splice(index >>> 0, 1);
  };

  const once: TEventBus<E>['once'] = (key, handler) => {
    const handleOnce = (payload: Parameters<typeof handler>) => {
      handler(payload as never);
      off(key, handleOnce as unknown as typeof handler);
    };

    on(key, handleOnce as unknown as typeof handler);
  };

  const emit: TEventBus<E>['emit'] = (key, payload) => {
    bus[key]?.forEach(fn => {
      try {
        fn(payload);
      } catch (e) {
        config?.onError(e);
      }
    });
  };

  return { on, off, once, emit };
}
