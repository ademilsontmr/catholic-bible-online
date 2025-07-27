import fs from 'fs';
import path from 'path';

// Interface para o índice de livros
interface BookIndex {
  [key: string]: {
    name: string;
    testament: string;
    chapters: number;
    file: string;
  };
}

// Interface para um livro individual
interface Book {
  name: string;
  testament: string;
  chapters: string[][];
}

// Cache para os livros carregados
const bookCache = new Map<string, Book>();

/**
 * Carrega o índice de todos os livros da Bíblia
 */
export function getBibleIndex(): BookIndex {
  try {
    const indexPath = path.join(process.cwd(), 'src/data/bible-books/index.json');
    const indexData = fs.readFileSync(indexPath, 'utf8');
    return JSON.parse(indexData);
  } catch (error) {
    console.error('Erro ao carregar índice da Bíblia:', error);
    return {};
  }
}

/**
 * Carrega um livro específico da Bíblia
 */
export function getBook(bookSlug: string): Book | null {
  // Verificar cache primeiro
  if (bookCache.has(bookSlug)) {
    return bookCache.get(bookSlug)!;
  }

  try {
    const bookPath = path.join(process.cwd(), 'src/data/bible-books', `${bookSlug}.json`);
    const bookData = fs.readFileSync(bookPath, 'utf8');
    const book = JSON.parse(bookData) as Book;
    
    // Adicionar ao cache
    bookCache.set(bookSlug, book);
    
    return book;
  } catch (error) {
    console.error(`Erro ao carregar livro ${bookSlug}:`, error);
    return null;
  }
}

/**
 * Carrega todos os livros (para compatibilidade com código existente)
 */
export function getAllBooks(): { [key: string]: Book } {
  const index = getBibleIndex();
  const allBooks: { [key: string]: Book } = {};
  
  Object.keys(index).forEach(bookSlug => {
    const book = getBook(bookSlug);
    if (book) {
      allBooks[bookSlug] = book;
    }
  });
  
  return allBooks;
}

/**
 * Limpa o cache de livros
 */
export function clearBookCache(): void {
  bookCache.clear();
}

/**
 * Obtém estatísticas de uso do cache
 */
export function getCacheStats(): { size: number; books: string[] } {
  return {
    size: bookCache.size,
    books: Array.from(bookCache.keys())
  };
} 