import { HomeTemplate } from 'components/templates';
import { VFC } from 'react';

// In this component, we can pass some url information to component.
// If so templates/organisms/molecules/atoms components don't have to depend on these
// outer information. This makes component more testable and reusable.
export const HomePage: VFC = () => <HomeTemplate />;
