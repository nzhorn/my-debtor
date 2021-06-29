import React, {FC} from 'react';

import './Panel.styles.scss';


interface PanelProps {
  title: string;
  subtitle?: string;
  value: string;
  onDelete: () => void;
}

const Panel: FC<PanelProps> = ({title, subtitle, value, onDelete}) => {
  return (
    <>
      <div className="panel">
        <div className="panel__content">
          <div className="flex-three">
            <div>{title}</div>
            { subtitle && <div className="small">{subtitle}</div> }
          </div>

          <div className="flex normal-gap">
            <div>{value}</div>
            <div onClick={onDelete}>x</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
