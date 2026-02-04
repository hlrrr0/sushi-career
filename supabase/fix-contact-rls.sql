-- 現在のポリシー設定を確認
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'contact_inquiries';

-- RLSが有効か確認
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_inquiries';
