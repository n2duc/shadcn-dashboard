export const fetchUserById = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`)
  if (!response.ok) throw new Error('Failed to fetch posts')
  return response.json()
}