import './card-list.styles.css';
import Card from '../card/Card';
import User from '../../entities/User';

type CardListProps = {
  monsters: Array<User>
};

export default function CardList ({ monsters }: CardListProps): JSX.Element {
  return (
    <div className="card-list">
      {monsters.map((user: User, key: number) => (
        <Card key={key} monster={user} />
      ))}
    </div>
  );
}
