# Password Input (Generated via Stencil)

Password visibility can be changed with the icon toggle.
You can add as a custom web component by following the documentation of the framework that you are using.

![Password Input Visibility](./src/assets/password-input-visibility.png)

## Inputs:

**value**: input value

**placeholder**: input placeholder

**appearence**: standard || fill || outline

**color**: default || primary || warning || danger

## Outputs:

**valuechange**: Emits the value whenever it changes.

## Styling:

![Password Input Types](./src/assets/password-input-types.png)

## Vue3 Example:

```
<password-input @valuechange="onValueChange" :value="passwordVal" appearence="outline" color="primary" placeholder="password field"></password-input>
```
