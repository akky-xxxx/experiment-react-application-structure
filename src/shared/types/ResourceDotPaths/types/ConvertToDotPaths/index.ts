export type ConvertToDotPaths<T> =
  T extends string
    ? never
    : {
        [K in Extract<keyof T, string>]:
        T[K] extends string
          ? K
          : T[K] extends object
            ? `${K}.${ConvertToDotPaths<T[K]>}`
            : never
      }[Extract<keyof T, string>]
