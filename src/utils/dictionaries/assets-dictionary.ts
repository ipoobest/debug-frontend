import { Asset } from 'types/asset';

import busdIcon from 'assets/images/tokens/busd.svg';
import jfinIcon from 'assets/images/tokens/jfin.svg';
import bnbIcon from 'assets/images/tokens/bnb.svg';
import goldIcon from 'assets/images/tokens/gold.svg';

import { AssetDetails } from '../models/asset-details';

export class AssetsDictionary {
  public static assets: Map<Asset, AssetDetails> = new Map<Asset, AssetDetails>(
    [
      [Asset.BTC, new AssetDetails(Asset.BTC, 'BNB', 'BNB', 18, bnbIcon)],
      [
        Asset.BUSD,
        new AssetDetails(Asset.BUSD, 'BUSD', 'Dollar on Chain', 18, busdIcon),
      ],
      [Asset.JFIN, new AssetDetails(Asset.JFIN, 'JFIN', 'JFIN', 18, jfinIcon)],
      [
        Asset.GOLD,
        new AssetDetails(Asset.GOLD, 'GOLD', 'BitPro', 18, goldIcon),
      ],
    ],
  );

  public static get(asset: Asset): AssetDetails {
    return this.assets.get(asset) as AssetDetails;
  }

  public static getByLoanContractAddress(address: string): AssetDetails {
    return this.list().find(
      item =>
        item.lendingContract.address.toLowerCase() === address.toLowerCase(),
    ) as AssetDetails;
  }

  public static getByTokenContractAddress(address: string): AssetDetails {
    return this.list().find(
      item =>
        item.tokenContract.address.toLowerCase() === address.toLowerCase(),
    ) as AssetDetails;
  }

  public static list(): Array<AssetDetails> {
    return Array.from(this.assets.values());
  }

  public static assetList(): Array<Asset> {
    return Array.from(this.assets.keys());
  }

  public static find(assets: Array<Asset>): Array<AssetDetails> {
    return assets.map(asset => this.get(asset));
  }
}
