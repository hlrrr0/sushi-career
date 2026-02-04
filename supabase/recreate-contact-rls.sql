-- 既存のすべてのポリシーを削除
DO $$ 
DECLARE 
  r RECORD;
BEGIN
  FOR r IN 
    SELECT policyname 
    FROM pg_policies 
    WHERE tablename = 'contact_inquiries'
  LOOP
    EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON contact_inquiries';
  END LOOP;
END $$;

-- 新しいポリシーを作成
CREATE POLICY "Enable insert for anonymous users" ON contact_inquiries
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Enable select for all users" ON contact_inquiries
  FOR SELECT 
  USING (true);

-- 確認
SELECT policyname, cmd, with_check::text, qual::text
FROM pg_policies
WHERE tablename = 'contact_inquiries';
