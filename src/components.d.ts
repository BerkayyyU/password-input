/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PasswordInput {
        "value": string;
    }
}
declare global {
    interface HTMLPasswordInputElement extends Components.PasswordInput, HTMLStencilElement {
    }
    var HTMLPasswordInputElement: {
        prototype: HTMLPasswordInputElement;
        new (): HTMLPasswordInputElement;
    };
    interface HTMLElementTagNameMap {
        "password-input": HTMLPasswordInputElement;
    }
}
declare namespace LocalJSX {
    interface PasswordInput {
        "onValuechange"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "password-input": PasswordInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "password-input": LocalJSX.PasswordInput & JSXBase.HTMLAttributes<HTMLPasswordInputElement>;
        }
    }
}
