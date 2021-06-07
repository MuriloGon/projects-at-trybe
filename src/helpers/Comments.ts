export interface Comment {
  date: number,
  email: string,
  rating: number,
  description?: string
}

export interface Comments {
  id: string
  comments: Array<Comment>;
}
