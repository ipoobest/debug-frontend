import React from 'react';
import { Icon } from '@blueprintjs/core';

interface Props {
  tokenName: string;
  tokenValue: string;
  onClose: () => void;
}
export function IToken(props: Props) {
  return (
    <div>
      {/* You will receive {props.tokenValue} {props.tokenName} */}
      You will receive {props.tokenName}
      <Icon
        style={{ padding: '3px' }}
        icon="info-sign"
        color="gray"
        onClick={props.onClose}
      />
    </div>
  );
}
