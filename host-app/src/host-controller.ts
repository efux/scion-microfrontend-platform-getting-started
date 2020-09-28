import {Beans, MessageClient, MicrofrontendPlatform} from '@scion/microfrontend-platform';

class HostController {

    private platformConfig = [
        {symbolicName: 'host-app', manifestUrl: '/manifest.json'},
        {symbolicName: 'products-app', manifestUrl: `${process.env.PRODUCTS_APP_URL}/manifest.json`},
        {symbolicName: 'shopping-cart', manifestUrl: `${process.env.SHOPPING_CART_APP_URL}/manifest.json`}
    ];

    constructor() {
        document.querySelector('button.shopping-cart').addEventListener('click', () => this.onToggleShoppingCart());
    }

    public async init(): Promise<void> {
        await MicrofrontendPlatform.startHost(this.platformConfig, {symbolicName: 'host-app'});

        await Beans.get(MessageClient).issueIntent({type: 'navigation', qualifier: {screen: 'products-overview'}});
    }

    private onToggleShoppingCart(): void {
        Beans.get(MessageClient).issueIntent({type: 'action', qualifier: {entity: 'toggle-shopping-cart'}});
    }
}

new HostController().init();
