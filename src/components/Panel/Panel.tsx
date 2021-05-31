import React from 'react';

import './Panel.styles.scss';


interface PanelProps {
  title: string;
  subtitle?: string;
  value: string;
  onDelete: () => void;
}

const Panel = (props: PanelProps) => {
  return (
    <>
      <div className="panel">
        <div className="panel__content">
          <div className="flex-three">
            <div>{props.title}</div>
            { props.subtitle && <div className="small">{props.subtitle}</div> }
          </div>

          <div className="flex normal-gap">
            <div>{props.value}</div>
            <div onClick={props.onDelete}>x</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
