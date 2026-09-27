export type PageMetadata = {
  title: string
  description: string
  canonical: string
}

export type MetadataKey = keyof PageMetadata

export const metadataFields: { key: MetadataKey; label: string }[] = [
  { key: 'title', label: 'Page title' },
  { key: 'description', label: 'Meta description' },
  { key: 'canonical', label: 'Canonical URL' },
]

export function compareField(current: string, proposed: string) {
  if (!proposed.trim()) return 'missing'
  return current.trim() === proposed.trim() ? 'unchanged' : 'changed'
}
