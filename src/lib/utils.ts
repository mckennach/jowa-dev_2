import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ImageLoaderProps } from 'next/image'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const imageUrl = new URL(src)
  return imageUrl.search
    ? `${src}&w=${width}&q=${quality || 75}`
    : `${src}?w=${width}&q=${quality || 75}`
}

export const zeroPad = (num: number, places = 2) =>
  String(num).padStart(places, '0')
