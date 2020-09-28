import {Beans, MessageClient, MicrofrontendPlatform, OutletRouter, PRIMARY_OUTLET} from '@scion/microfrontend-platform';

class Activator {

    public async init(): Promise<void> {
        await MicrofrontendPlatform.connectToHost({symbolicName: 'products-app'});

        Beans.get(MessageClient).onIntent$({type: 'navigation', qualifier: {screen: 'products-overview'}})
            .subscribe(() => {
                Beans.get(OutletRouter).navigate('/products.html', {outlet: PRIMARY_OUTLET});
            });

        Beans.get(MessageClient).publish('products-ready');
    }

}

new Activator().init();
