import { newE2EPage } from '@stencil/core/testing';

describe('password-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<password-input></password-input>');

    const element = await page.find('password-input');
    expect(element).toHaveClass('hydrated');
  });
});
