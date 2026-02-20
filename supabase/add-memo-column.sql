-- Add memo column to job_applications table
-- This column allows admins to add notes about each application

ALTER TABLE job_applications
ADD COLUMN memo TEXT;

COMMENT ON COLUMN job_applications.memo IS 'Admin notes and comments about the application';
