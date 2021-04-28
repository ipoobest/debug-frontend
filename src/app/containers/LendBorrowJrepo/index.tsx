import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import CurrencyContainer from './components/CurrencyContainer';
import './assets/index.scss';
import CurrencyDetails from './components/CurrencyDetails';
import LendingHistory from './components/LendingHistory';
import { Header } from 'app/components/Header';
import { lendBorrowJrepoSaga } from './saga';
import { actions, reducer, sliceKey } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLendBorrowJrepo } from './selectors';
import { TabType } from './types';
import { Footer } from '../../components/Footer';
import { RepayPositionHandler } from '../RepayPositionHandler/Loadable';
import { BorrowActivity } from '../../components/BorrowActivity/Loadable';

type Props = {};

const LendBorrowJrepo: React.FC<Props> = props => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: lendBorrowJrepoSaga });

  const state = useSelector(selectLendBorrowJrepo);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main className="container">
        <Row>
          <div className="col-12 col-lg-6">
            <CurrencyContainer
              state={state.asset}
              setState={asset => dispatch(actions.changeAsset(asset))}
            />
          </div>
          <div className="col-12 col-lg-6 mt-3 mt-lg-0">
            <CurrencyDetails />
          </div>
        </Row>
      </main>
      <Container className="mt-4 font-family-poppins">
        {state.tab === TabType.LEND && <LendingHistory />}
        {state.tab === TabType.BORROW && <BorrowActivity />}
        <RepayPositionHandler />
      </Container>
      <Footer />
    </>
  );
};

export default LendBorrowJrepo;
