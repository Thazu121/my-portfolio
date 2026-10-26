
const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const submitContact = async (formData) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || `Request failed (${response.status})`)
  }

  return data
}
