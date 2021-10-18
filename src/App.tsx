import { HomePage } from 'components/pages';
import { VFC } from 'react';
import 'reset-css';
import './global.module.scss';

// This component is used like router
export const App: VFC = () => <HomePage />;
