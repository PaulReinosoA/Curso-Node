describe('pruebas sobre app.ts', () => {
  test('prueba uno', () => {
    // 1._ Arrange:
    const numUno = 10;
    const numDos = 10;

    // 2._ Act:
    const result = numUno + numDos;

    // 3._ Assert:
    expect(result).toBe(20);
  });
});
