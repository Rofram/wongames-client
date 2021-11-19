export default function getImageUrl(image: string): string {
  if (image.startsWith('http')) {
    return image
  }

  return `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${image}`
}
