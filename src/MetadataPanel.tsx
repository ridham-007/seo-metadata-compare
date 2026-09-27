import type { MetadataKey, PageMetadata } from './metadata'
import { metadataFields } from './metadata'

type MetadataPanelProps = {
  heading: string
  note: string
  value: PageMetadata
  onChange: (value: PageMetadata) => void
}

export function MetadataPanel({ heading, note, value, onChange }: MetadataPanelProps) {
  function updateField(key: MetadataKey, text: string) {
    onChange({ ...value, [key]: text })
  }

  return (
    <section className="metadata-panel" aria-label={heading}>
      <div className="panel-heading">
        <h2>{heading}</h2>
        <p>{note}</p>
      </div>
      {metadataFields.map(({ key, label }) => (
        <label className="field" key={key}>
          <span className="field-heading">
            <span>{label}</span>
            {key !== 'canonical' && <span className="count">{value[key].length} characters</span>}
          </span>
          {key === 'description' ? (
            <textarea
              rows={4}
              value={value[key]}
              onChange={(event) => updateField(key, event.target.value)}
            />
          ) : (
            <input
              type={key === 'canonical' ? 'url' : 'text'}
              value={value[key]}
              onChange={(event) => updateField(key, event.target.value)}
            />
          )}
        </label>
      ))}
      <div className="preview">
        <p className="preview-label">Search preview</p>
        <p className="preview-url">{value.canonical || 'example.com/page'}</p>
        <p className="preview-title">{value.title || 'Page title'}</p>
        <p className="preview-description">
          {value.description || 'Add a description to preview how this page could appear.'}
        </p>
      </div>
    </section>
  )
}
