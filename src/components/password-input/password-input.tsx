import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'password-input',
  styleUrl: 'password-input.css',
  shadow: false,
  scoped: true,
})
export class PasswordInput {
  @State() type: string = 'password';
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder: string = '';
  @Prop() appearence: string = 'standard'; // standard || fill || outline
  @Prop() color: string = 'default'; // default || primary || warning || danger
  @Event() valuechange: EventEmitter<string>;

  private onValueChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valuechange.emit(this.value);
  }

  render() {
    return (
      <div class={this.color + ' container ' + this.appearence}>
        <input type={this.type} value={this.value} placeholder={this.placeholder} onInput={event => this.onValueChange(event)}></input>
        <i
          class={this.type === 'text' ? 'fa-solid fa-eye icon' : 'fa-solid fa-eye-slash icon'}
          onClick={() => (this.type === 'text' ? (this.type = 'password') : (this.type = 'text'))}
        ></i>
      </div>
    );
  }
}
