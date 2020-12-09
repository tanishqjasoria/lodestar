/* eslint-disable @typescript-eslint/naming-convention */
export const lightclientMainnetYaml = {
  CONFIG_NAME: "mainnet",

  // 2**10 (=1,024)
  SYNC_COMMITTEE_SIZE: 1024,
  // 2**6 (=64)
  SYNC_COMMITTEE_PUBKEY_AGGREGATES_SIZE: 64,

  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: 256,

  DOMAIN_SYNC_COMMITTEE: "0x07000000",
};
