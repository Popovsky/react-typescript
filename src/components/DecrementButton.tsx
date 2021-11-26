import React from 'react';
import {observer} from 'mobx-react';
import {ICounterFields} from '../interfaces/counter';

const DecrementButton: React.FC<ICounterFields> = observer(({counter}) => <button onClick={() => counter.decreaseCount()}>-</button>);

export default DecrementButton;
