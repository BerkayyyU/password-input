import { newSpecPage } from '@stencil/core/testing';
import { PasswordInput } from '../password-input';

describe('password-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PasswordInput],
      html: `<password-input></password-input>`,
    });
    expect(page.root).toEqualHtml(`
      <password-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </password-input>
    `);
  });
});
