import { core_apis } from '@/api_factory/core/upload'

export const useUploadFile = () => {
  const loading = ref(false)
  const uploadResponse = ref({} as any)

  const { $_upload } = core_apis

  // Convert the file to Base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const uploadFile = async (file: File) => {
    loading.value = true
    try {
      // Convert the file to base64
      const base64File = await fileToBase64(file)
      
      // Create FormData and append the base64 string
      const formData = new FormData()
      formData.append('file', base64File)

      // Make the API call with FormData
      const res = await $_upload(formData) as any

      if (res.type !== 'ERROR') {
        uploadResponse.value = res.data ?? []
      }
    } catch (error) {
      console.error('Error converting or uploading file:', error)
    } finally {
      loading.value = false
    }
  }

  return { uploadFile, loading, uploadResponse }
}

