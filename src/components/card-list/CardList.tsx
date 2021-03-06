import './card-list.styles.css';

type CardListProps = {
  children: React.ReactNode 
};

export default function CardList ({ children }: CardListProps): JSX.Element {
  return (
    <div className="card-container">
      {children}
    </div>
  );
}
