CREATE POLICY "Public read audio bucket" ON storage.objects FOR SELECT USING (bucket_id = 'audio');
CREATE POLICY "Public read video bucket" ON storage.objects FOR SELECT USING (bucket_id = 'video');