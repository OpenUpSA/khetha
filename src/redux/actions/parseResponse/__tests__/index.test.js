import parseResponse from '../index';


const params = {
  data: () => ({
    example1: JSON.stringify({ message: 'Hello World!' }),
    example2: JSON.stringify({ message: 'Lorem Ipsum.' }),
  }),
};


const output = {
  example1: { message: 'Hello World!' },
  example2: { message: 'Lorem Ipsum.' },
};


const input = parseResponse(params);
const assertion = () => expect(input).resolves.toEqual({ remote: output });


test('parseResponse', assertion);
