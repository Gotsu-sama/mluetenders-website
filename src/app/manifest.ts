import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mlue Tenders',
    short_name: 'Mlue',
    description: 'Discover, Track & Win Moroccan Tenders',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#14754e',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}