CREATE TABLE IF NOT EXISTS calls (
  id SERIAL PRIMARY KEY,
  caller_name TEXT,
  phone TEXT,
  call_time TIMESTAMP,
  tags TEXT[],
  status TEXT,
  issue TEXT,
  resolution TEXT,
  department TEXT,
  location TEXT,
  metadata JSONB
);