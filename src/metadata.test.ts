import { describe, expect, it } from 'vitest'
import { compareField } from './metadata'

describe('compareField', () => {
  it('identifies missing, unchanged, and revised values', () => {
    expect(compareField('Old title', '  ')).toBe('missing')
    expect(compareField(' Old title ', 'Old title')).toBe('unchanged')
    expect(compareField('Old title', 'New title')).toBe('changed')
  })
})
