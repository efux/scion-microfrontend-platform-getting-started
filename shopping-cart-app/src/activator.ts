import {Beans, mapToBody, MessageClient, MicrofrontendPlatform, OutletRouter} from '@scion/microfrontend-platform';
import {Product, ShoppingCartService} from './shopping-cart-service';

class Activator {

    private panelVisible: boolean;

    public async init(): Promise<void> {
        await MicrofrontendPlatform.connectToHost({symbolicName: 'shopping-cart'});

        Beans.get(MessageClient).onIntent$({type: 'action', qualifier: {entity: 'toggle-shopping-cart'}})
            .subscribe(() => {
                this.toggleShoppingCart();
            });

        Beans.get(MessageClient).onIntent$<Product>({type: 'action', qualifier: {entity: 'add-product'}})
            .pipe(mapToBody())
            .subscribe(product => {
                ShoppingCartService.addProduct(product);
                if (!this.panelVisible) this.toggleShoppingCart();
            });
    }

    private toggleShoppingCart() {
        this.panelVisible = !this.panelVisible;
        if (this.panelVisible) {
            Beans.get(OutletRouter).navigate(`/shopping-cart.html`, {outlet: 'SHOPPING-CART'});
        } else {
            Beans.get(OutletRouter).navigate(null, {outlet: 'SHOPPING-CART'});
        }
    }
}

new Activator().init();
