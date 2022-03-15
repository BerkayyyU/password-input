import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'password-input',
  styleUrl: 'password-input.css',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
})
export class PasswordInput {
  @State() type: string = 'password';
  @Prop({ mutable: true }) value: string = '';
  @Event() valuechange: EventEmitter<string>;

  private onValueChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valuechange.emit(this.value);
  }

  render() {
    return (
      <div class="container">
        <input type={this.type} value={this.value} onInput={event => this.onValueChange(event)}></input>
        <i
          class={this.type === 'text' ? 'fa-solid fa-eye icon' : 'fa-solid fa-eye-slash icon'}
          onClick={() => (this.type === 'text' ? (this.type = 'password') : (this.type = 'text'))}
        ></i>
        {/* <img
          class="icon"
          src={this.type === 'text' ? getAssetPath('./assets/visible.svg') : getAssetPath('./assets/hidden.svg')}
      
        ></img> */}
      </div>
    );
  }
}
