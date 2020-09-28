class Activator {

    private panelVisible: boolean;

    public async init(): Promise<void> {
        // TODO: Connect to the platform host

        // TODO: Listener to add a product to the shopping cart

        // TODO: Listener to open or close the shopping cart panel
    }

    public setShoppingCartPanelVisibility(visible: boolean): void {
        this.panelVisible = visible;
        if (visible) {
            // TODO: Open cart
        } else {
            // TODO: Remove cart
        }
    }
}

new Activator().init();
