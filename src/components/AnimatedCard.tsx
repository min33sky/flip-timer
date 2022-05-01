interface IAnimationCardProps {
  animation: 'fold' | 'unfold';
  digit: string;
}

function AnimatedCard({ animation, digit }: IAnimationCardProps) {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
}

export default AnimatedCard;
