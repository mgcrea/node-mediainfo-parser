
import fs from 'fs';
import expect from 'expect';
import mediainfoParser from './../src';

describe('parser', () => {
  // Fetch fixtures
  const buffer = fs.readFileSync(`${__dirname}/fixtures/input.xml`);
  const expected = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/output.json`).toString());
  it('should throw if no buffer is passed', () => {
    mediainfoParser(undefined, (err, obj) => {
      expect(err).toBeA(Error);
      expect(obj).toNotExist();
    });
  });
  it('should throw if an invalid buffer is passed', () => {
    mediainfoParser(new Buffer('foobar'), (err, obj) => {
      expect(err).toBeA(Error);
      expect(obj).toNotExist();
    });
  });
  it('should properly parse mediainfo xml input', (done) => {
    mediainfoParser(buffer, (err, obj) => {
      expect(obj).toEqual(expected);
      done();
    });
  });
});
