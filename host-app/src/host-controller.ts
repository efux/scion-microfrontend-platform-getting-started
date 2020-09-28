class HostController {

  // TODO PlatformConfig

  constructor() {
    document.querySelector('button.shopping-cart').addEventListener('click', () => this.onToggleShoppingCart());
  }

  public async init(): Promise<void> {
    // TODO: Start the platform

    // Display the products microfrontend in the primary router outlet
    // TODO: navigate to products screen on startup
  }

  private onToggleShoppingCart(): void {
    // TODO: navigate to Shopping Cart
  }
}

new HostController().init();
