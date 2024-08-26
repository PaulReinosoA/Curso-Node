import { emailTemplate } from '../../js-foundation/01-template';

describe('pruebas sobre 01-template.ts', () => {
  test('emailTemplate debe de contener un mensaje', () => {
    // console.log({ emailTemplate });
    expect(emailTemplate).toContain('<h1>Hi, {{name}}</h1>');
  });

  test('emailTemplate debe de contener {{name}} y {{orderId}}', () => {
    // console.log({ emailTemplate });
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
