/**
 * Practice-area features are stored two ways: a JSON array string from the
 * admin form (`["Car accidents","Truck accidents"]`) and, on older rows, one
 * item per line. Splitting only on newlines prints the JSON as one bullet.
 */
export function parseFeatureList(raw: string | null | undefined): string[] {
  if (!raw) return [];
  const trimmed = raw.trim();
  if (!trimmed) return [];

  if (trimmed.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map((item) => String(item).trim()).filter(Boolean);
      }
    } catch {
      // Not valid JSON. Fall through and treat it as plain text.
    }
  }

  return trimmed
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}
