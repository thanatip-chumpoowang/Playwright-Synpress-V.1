import { defineWalletSetup } from '@synthetixio/synpress';
import { MetaMask } from '@synthetixio/synpress/playwright';
const SEED_PHRASE = 'season grocery country film chimney ranch treat tobacco panther jump three elbow';
const PASSWORD = 'Mos01022541';
export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
    const metamask = new MetaMask(context, walletPage, PASSWORD);
    await metamask.importWallet(SEED_PHRASE);
});
//# sourceMappingURL=basic.setup.js.map