class HostController {

  constructor() {
    document.querySelector('button.shopping-cart').addEventListener('click', () => this.onToggleShoppingCart());
  }

  public async init(): Promise<void> {
  }

  private onToggleShoppingCart(): void {
  }
}

new HostController().init();
