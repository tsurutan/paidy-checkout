// These constants is to manage ids which is attached to component.

// TODO: enforce key and value to be same.
export const Ids = {
  INPUT_EMAIL: 'INPUT_EMAIL',
  INPUT_PHONE: 'INPUT_PHONE',
} as const;

export type Id = keyof typeof Ids;
