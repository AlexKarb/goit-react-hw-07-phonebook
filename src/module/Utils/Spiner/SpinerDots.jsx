import { ThreeDots } from 'react-loader-spinner';
import style from './Spiner.module.css';

const { spiner_dots } = style;

export const SpinerDots = () => (
  <div className={spiner_dots}>
    <ThreeDots ariaLabel="loading" color="#944d4d" height={80} width={80} />
  </div>
);
