type Input = Array<[Key: string, Value: string]>
type Output = string
type CreateQueryParameters = (...input: Input) => Output

export const createQueryParameters: CreateQueryParameters = (...input) => {
  const searchParameters = new URLSearchParams()
  input.forEach((KeyValue) => {
    searchParameters.set(...KeyValue)
  })
  return searchParameters.toString()
}
