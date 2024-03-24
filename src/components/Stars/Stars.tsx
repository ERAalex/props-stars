
import { Star } from './Star';

interface StarsProps {
        count: number;
    }


export default function Stars({count}: StarsProps) {
    if (count > 5 || count < 1) {
        console.log('Not correct number, must be 1-5')
        return <ul className="card-body-stars u-clearfix"></ul>;

    } else if (typeof count != "number") {
        console.log('Not correct type, must be number')
        return <ul className="card-body-stars u-clearfix">Incorrect type</ul>;
    }

    return (
        <ul className="card-body-stars u-clearfix">
        {Array(count)
          .fill("")
          .map((_, i) => {
            return <Star key={i} />;
          })}
      </ul>
    );
    

}


