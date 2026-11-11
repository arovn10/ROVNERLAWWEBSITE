import { SITE_URL } from './site';

/**
 * The name the public site uses when the Settings row is missing.
 * `getFirmName()` falls back to the placeholder "Law Firm", which must never
 * be published as the entity name.
 */
export const FIRM_NAME_PUBLIC = 'Rovner, Allen, Rovner and Sigman';

export function publicFirmName(name: string | null | undefined): string {
  const trimmed = name?.trim();
  if (!trimmed || trimmed === 'Law Firm') return FIRM_NAME_PUBLIC;
  return trimmed;
}

/** Stable id. Every Person, service and article points here instead of describing a second firm. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const OFFICE_MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=175+Bustleton+Pike%2C+Feasterville-Trevose%2C+PA+19053';

/** Counties the locations page already lists. Not a claim of a second office. */
export const SERVICE_AREA_PLACES: { type: 'AdministrativeArea' | 'City' | 'State'; name: string }[] = [
  { type: 'City', name: 'Feasterville-Trevose' },
  { type: 'City', name: 'Philadelphia' },
  { type: 'AdministrativeArea', name: 'Bucks County' },
  { type: 'AdministrativeArea', name: 'Montgomery County' },
  { type: 'AdministrativeArea', name: 'Delaware County' },
  { type: 'AdministrativeArea', name: 'Chester County' },
  { type: 'AdministrativeArea', name: 'Camden County' },
  { type: 'AdministrativeArea', name: 'Burlington County' },
  { type: 'AdministrativeArea', name: 'Mercer County' },
  { type: 'AdministrativeArea', name: 'Atlantic County' },
  { type: 'AdministrativeArea', name: 'Gloucester County' },
  { type: 'State', name: 'Pennsylvania' },
  { type: 'State', name: 'New Jersey' },
];
