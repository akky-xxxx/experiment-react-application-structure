export const base = async <T>(path: string): Promise<T | null> => {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/${path}`)
    // api fetch 自体は非同期処理を試したいだけで処理自体は重要じゃないため
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-unsafe-type-assertion
    const response = await result.json() as T
    return response
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return null
  }
}
