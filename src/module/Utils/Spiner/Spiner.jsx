import { Triangle } from 'react-loader-spinner';
import style from './Spiner.module.css';

const { spiner_style } = style;

export const Spiner = () => (
  <div className={spiner_style}>
    <Triangle ariaLabel="loading" color="#944d4d" height={80} width={80} />
  </div>
);
