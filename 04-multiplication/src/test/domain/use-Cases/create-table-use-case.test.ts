import { CreateTable } from '../../../domain/use-Cases/create-table-use-case';

describe('preubas sobre create-table-use-case.ts', () => {
  test('debe de generar la tabla con los valores por defecto ', () => {
    const argvt = { base: 5 };
    const createTable = new CreateTable();

    const table = createTable.execute(argvt);
    const numRows: number = table.split(`\n`).length - 5;
    console.log(table);

    expect(createTable).toBeInstanceOf(CreateTable);

    expect(table).toContain(`10 * ${argvt.base} = ${argvt.base * 10}`);
    expect(numRows).toBe(10);
  });

  test('debe de generar la tabla con los custon values ', () => {
    const argvt = { base: 7, limit: 13 };
    const createTable = new CreateTable();

    const limitExpresion = `${argvt.limit} * ${argvt.base} = ${
      argvt.base * argvt.limit
    }`;
    const initExpresion = `${1} * ${argvt.base} = ${argvt.base * 1}`;

    const table = createTable.execute(argvt);
    const numRows: number = table.split(`\n`).length - 5;
    // console.log(rows.length);

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain(initExpresion);
    expect(table).toContain(limitExpresion.toString());
    expect(numRows).toBe(argvt.limit);
  });
});
