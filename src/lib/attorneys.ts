/** Education and experience are hidden for these names on the public cards. Schema must match. */
export const HIDE_EDUCATION_EXPERIENCE_FOR = new Set(['Robert A. Rovner', 'Steven L. Rovner']);

/** Founding partner. The attorneys page does not offer a contact button for this name. */
export const NO_CONTACT_BUTTON_FOR = new Set(['Robert A. Rovner']);

export function attorneySlug(name: string): string {
  return name
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function attorneyPath(name: string): string {
  return `/attorneys/${attorneySlug(name)}`;
}
