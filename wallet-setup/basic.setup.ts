import { defineWalletSetup } from '@synthetixio/synpress';
import type { BrowserContext, Page } from '@playwright/test';
import * as synpressPlaywright from '@synthetixio/synpress/playwright';

const { MetaMask } = synpressPlaywright;
const SEED_PHRASE = 'season grocery country film chimney ranch treat tobacco panther jump three elbow';
const PASSWORD = 'Mos01022541';

export default defineWalletSetup(PASSWORD, async (context: BrowserContext, walletPage: Page) => {
  const metamask = new MetaMask(context, walletPage, PASSWORD);
  await metamask.importWallet(SEED_PHRASE);
});

