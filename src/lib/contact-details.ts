/**
 * Canonical contact details for the firm.
 *
 * These were hardcoded in 56 places, and the header displayed the toll-free
 * vanity number while the link dialled the local one — so the number a visitor
 * read was not the number their phone called. That also makes call attribution
 * impossible: you cannot tell an Ads call from an organic one when every link
 * dials the same unlabelled number.
 *
 * Import from here rather than typing a number into a component. If the firm
 * adopts per-channel tracking numbers, this is the one place that changes.
 *
 * The CMS also stores a phone number on the ContactUs singleton
 * (`content.officePhone`). Where a page already renders that value, leave it —
 * it lets the office change the number without a deploy. These constants are
 * for the many places that had no CMS value at all.
 */

/** Digits only, for `tel:` hrefs. Never show this to a human. */
export const PHONE_TEL = '215-259-5958';

/** What a visitor reads. Must be the number PHONE_TEL actually dials. */
export const PHONE_DISPLAY = '215-259-5958';

/** Toll-free vanity number — the brand asset, and the domain name. */
export const PHONE_TOLLFREE_DISPLAY = '888-DIAL-LAW';
export const PHONE_TOLLFREE_TEL = '888-342-5529';

export const OFFICE_ADDRESS = {
  street: '175 Bustleton Pike',
  locality: 'Feasterville-Trevose',
  region: 'PA',
  postalCode: '19053',
} as const;

/** `tel:` href for the toll-free number, e.g. href={TEL_HREF_TOLLFREE}. */
export const TEL_HREF = `tel:${PHONE_TEL}`;
export const TEL_HREF_TOLLFREE = `tel:${PHONE_TOLLFREE_TEL}`;
