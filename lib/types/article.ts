export interface Article {
  id: string;
  slug: string;
  title: string;
  description?: string;
  content: string;
  thumbnail_url?: string;
  author?: string;
  tags?: string[];
  published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface ArticleInput {
  slug: string;
  title: string;
  description?: string;
  content: string;
  thumbnail_url?: string;
  author?: string;
  tags?: string[];
  published?: boolean;
  published_at?: string;
}

export interface ArticleUpdate {
  slug?: string;
  title?: string;
  description?: string;
  content?: string;
  thumbnail_url?: string;
  author?: string;
  tags?: string[];
  published?: boolean;
  published_at?: string;
}
