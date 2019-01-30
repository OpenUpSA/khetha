import calcIfExternalLink from '../index';


const tests = [
  { url: 'https://google.com/example-1', output: true },
  { url: 'https://docs.khetha.org.za/example-2', output: false },
  { url: '/example-3', output: false },
  { url: '//www.google.com', output: true },
  { url: 'folder/example-3', output: false },
];


tests.forEach(({ url, output }) => {
  const props = { url, forceDomain: 'docs.khetha.org.za' };

  return test(
    url,
    () => expect(calcIfExternalLink(props)).toBe(output),
  );
});
