import React, { useState } from 'react';
import { Asset } from 'types/asset';
import { Tooltip, Icon } from '@blueprintjs/core';
import { CustomDialog } from '../../../../components/CustomDialog';
import Amount from '../Amount';
import ButtonGroup from '../ButtonGroup';
import AccountBalance from '../AccountBalance';

import '../../assets/index.scss';
import { SendTxResponse } from '../../../../hooks/useSendContractTx';
import { AssetsDictionary } from 'utils/dictionaries/assets-dictionary';
import { assetByTokenAddress } from 'utils/blockchain/contract-helpers';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

type Props = {
  currency: Asset;
  maxValue: string;
  loadingLimit: boolean;
  minValue?: string;
  amountValue: string;
  leftButton: string;
  rightButton: string;
  onChangeAmount: (e: string) => void;
  onMaxChange: (button: string) => void;
  handleSubmit: () => void;
  handleSubmitWithdraw?: () => void;
  setBorrowAmount?: (amount: string) => void;
  handleSubmitRepay?: () => void;
  isConnected: boolean;
  valid: boolean;
  txState: SendTxResponse;
};

const TabContainer: React.FC<Props> = ({
  currency,
  maxValue,
  minValue,
  amountValue,
  onChangeAmount,
  handleSubmit,
  handleSubmitWithdraw,
  handleSubmitRepay,
  leftButton,
  rightButton,
  isConnected,
  valid,
  txState,
  onMaxChange,
  setBorrowAmount,
  loadingLimit,
}) => {
  const [currentButton, setCurrentButton] = useState(leftButton);
  const [showForm, setShowForm] = useState(false);
  // console.log('amount value : ', amountValue);
  const { t } = useTranslation();
  return (
    <>
      <ButtonGroup
        setCurrentButton={setCurrentButton}
        setBorrowAmount={setBorrowAmount}
        currency={currency}
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <Amount
        amountValue={amountValue}
        onChangeAmount={onChangeAmount}
        onMaxChange={() => onMaxChange(currentButton)}
        currency={currency}
        amountName={
          currentButton === 'Deposit' ? 'Deposit Amount' : 'Amount to redeem'
        }
        maxValue={currentButton === 'Deposit' ? maxValue : '0'}
        loadingLimit={loadingLimit}
      />
      <div style={{ float: 'right', marginTop: '-25px', marginBottom: '10px' }}>
        <Icon icon="info-sign" color="gray" onClick={() => setShowForm(true)} />
      </div>
      <CustomDialog
        show={showForm}
        title="iToken"
        content={t(translations.iTokens)}
        onClose={() => setShowForm(false)}
      />
      <AccountBalance
        title={currentButton}
        txState={txState}
        valid={valid}
        isConnected={isConnected}
        handleSubmit={handleSubmit}
        handleSubmitWithdraw={handleSubmitWithdraw}
        handleSubmitRepay={handleSubmitRepay}
        currency={currency}
      />
    </>
  );
};

export default TabContainer;

// iTokens (interest-earning tokens) are minted when you deposit corresponding AssetsDictionary. iTokens increase in value and are worth more than the underlying assetByTokenAddress.
