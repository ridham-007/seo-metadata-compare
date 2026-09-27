import { useState } from 'react'
import { MetadataPanel } from './MetadataPanel'
import { compareField, metadataFields, type PageMetadata } from './metadata'

const initialCurrent: PageMetadata = {
  title: 'Hiking Backpacks | Trail Supply',
  description: 'Browse hiking backpacks and trail gear for your next adventure.',
  canonical: 'https://trailsupply.example/backpacks',
}

const initialProposed: PageMetadata = {
  title: 'Hiking Backpacks for Every Trail | Trail Supply',
  description: 'Find comfortable hiking backpacks for day trips and longer trails. Compare sizes, features, and fits before you head out.',
  canonical: 'https://trailsupply.example/backpacks',
}

export default function App() {
  const [current, setCurrent] = useState(initialCurrent)
  const [proposed, setProposed] = useState(initialProposed)

  return (
    <main className="page">
      <div className="workspace">
        <header className="intro">
          <p className="eyebrow">Content review</p>
          <h1>SEO Metadata Compare</h1>
          <p>Review page titles, descriptions, and canonical URLs side by side before publishing.</p>
        </header>

        <div className="panels">
          <MetadataPanel
            heading="Current page"
            note="Metadata shown on the page today"
            value={current}
            onChange={setCurrent}
          />
          <MetadataPanel
            heading="Proposed update"
            note="Edit the copy you plan to publish"
            value={proposed}
            onChange={setProposed}
          />
        </div>

        <section className="changes" aria-labelledby="changes-heading">
          <div>
            <p className="eyebrow">Review</p>
            <h2 id="changes-heading">What changed</h2>
          </div>
          <ul>
            {metadataFields.map(({ key, label }) => {
              const status = compareField(current[key], proposed[key])
              return (
                <li key={key}>
                  <span>{label}</span>
                  <span className={`status status-${status}`}>
                    {status === 'missing' ? 'Needs content' : status === 'changed' ? 'Updated' : 'No change'}
                  </span>
                </li>
              )
            })}
          </ul>
          <p className="review-note">Check the wording and destination URL before publishing.</p>
        </section>
      </div>
    </main>
  )
}
