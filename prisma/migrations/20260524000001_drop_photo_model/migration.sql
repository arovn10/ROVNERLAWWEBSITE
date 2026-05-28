-- Drop the unused Photo model. The site has never read from it; the photo
-- gallery is backed by the Archive table.
DROP TABLE IF EXISTS "Photo";
