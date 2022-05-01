import AnimatedCard from './AnimatedCard';
import StaticCard from './StaticCard';
import './FlipUnitContainer.css';

interface IFlipUnitProps {
  digit: number;
  shuffle: boolean;
  unit: string;
}

function FlipUnitContainer({ digit, shuffle, unit }: IFlipUnitProps) {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  //* 0초 or 0분 or 0시일 때 이전 시간에 대한 처리
  if (unit !== 'hours') {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  //* 시간을 두 자리수로 출력하기 위한처리
  const renderDigit = (digit: number) => (digit < 10 ? `0${digit}` : String(digit));

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  console.log(shuffle, animation1, animation2);

  return (
    <div className="flipUnitContainer">
      <StaticCard position="upperCard" digit={renderDigit(currentDigit)} />
      <StaticCard position="lowerCard" digit={renderDigit(previousDigit)} />
      <AnimatedCard digit={renderDigit(digit1)} animation={animation1} />
      <AnimatedCard digit={renderDigit(digit2)} animation={animation2} />
    </div>
  );
}

export default FlipUnitContainer;
