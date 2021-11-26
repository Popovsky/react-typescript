import React from 'react';
import {observer} from 'mobx-react';
import {ICounterFields} from '../interfaces/counter';

const CountView: React.FC<ICounterFields> = observer(({counter}) => <div>{counter.count}</div>);

export default CountView;
