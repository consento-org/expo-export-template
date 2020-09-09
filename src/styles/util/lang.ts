// This file has been generated with expo-export@3.8.3, a Sketch plugin.
export function exists <T> (value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

export function useDefault <T> (value: T | null | undefined, defaultValue: T): T {
  if (exists(value)) {
    return value
  }
  return defaultValue
}