import './Card.css';

type CardProps = {
  title: string;
  summary: string;
  buyUrl: string;
  imageUrl: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-content-container">
        <img src={props.imageUrl} alt={props.title} />
        <div className="card-tooltip-container">
          <div className="card-tooltip-title">{props.title}</div>
          <div className="card-tooltip-summary">{props.summary}</div>
          <div className="card-tooltip-button-container">
            <button
              onClick={() => {
                window.open(props.buyUrl, '_blank');
              }}
            >
              Check it out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
