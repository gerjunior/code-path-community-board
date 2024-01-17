import { data } from '@/data/source';
import './Main.css';
import { Card } from '@/components/Card/Card';

export const Main = () => {
  return (
    <div className="main-container">
      <h1>Fiction Books Favorites</h1>

      <div className="card-list-container">
        {data.map((book) => (
          <Card title={book.title} summary={book.summary} buyUrl={book.buyUrl} imageUrl={book.imageUrl} />
        ))}
      </div>
    </div>
  );
};
