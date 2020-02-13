export class Footer {
  footertext: string;

  constructor() {
    console.log(`this is the Footer constructor firing!`)
    this.footertext = `Demo for webpack 4 set up`
  }
  
  getFooterText(): string {
    return this.footertext
  }

}