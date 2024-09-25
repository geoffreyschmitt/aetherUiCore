export type TEventKey = string | symbol;
export type TEventHandler<T = never> = (payload: T) => void;
export type TEventMap = Record<TEventKey, TEventHandler>;
export type TBus<E> = Record<keyof E, E[keyof E][]>;

export type TEventBus<T extends TEventMap> = {
  on<Key extends keyof T>(key: Key, handler: T[Key]): () => void;
  off<Key extends keyof T>(key: Key, handler: T[Key]): void;
  once<Key extends keyof T>(key: Key, handler: T[Key]): void;
  emit<Key extends keyof T>(key: Key, ...payload: Parameters<T[Key]>): void;
};

export type TEventBusConfig = {
  onError: (...params: unknown[]) => void;
};
