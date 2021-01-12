import { Asset } from 'types/asset';
import { LendingPool } from '../models/lending-pool';

export class LendingPoolDictionary {
  public static pools: Map<Asset, LendingPool> = new Map<Asset, LendingPool>([
    //[Asset.BTC, new LendingPool('BTC', Asset.BTC, [Asset.JFIN, Asset.GOLD])],
    [Asset.BUSD, new LendingPool('BUSD', Asset.BUSD, [Asset.JFIN, Asset.GOLD])],
    [Asset.JFIN, new LendingPool('JFIN', Asset.JFIN, [Asset.BUSD, Asset.GOLD])],
    [Asset.GOLD, new LendingPool('GOLD', Asset.GOLD, [Asset.BUSD, Asset.JFIN])],
  ]);

  public static get(asset: Asset): LendingPool {
    return this.pools.get(asset) as LendingPool;
  }

  public static list(): Array<LendingPool> {
    return Array.from(this.pools.values());
  }

  public static assetList(): Array<Asset> {
    return Array.from(this.pools.keys());
  }

  public static find(assets: Array<Asset>): Array<LendingPool> {
    return assets.map(asset => this.get(asset));
  }

  public static entries() {
    return Array.from(this.pools.entries());
  }
}
