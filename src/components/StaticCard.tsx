import './StaticCard.css';

interface IStaticCardProps {
  position: 'upperCard' | 'lowerCard';
  digit: string;
}

function StaticCard({ position, digit }: IStaticCardProps) {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
}

export default StaticCard;
