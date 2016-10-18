import {camelCase, mapValues} from 'lodash';
import {parseString as xmlParseString} from 'xml2js';
import childProcess from 'child_process';

const isNumeric = n =>
  !isNaN(parseFloat(n)) && isFinite(n);

const mapValue = (value) => {
  const ret = Array.isArray(value) ? value[0] : value;
  return isNumeric(ret) ? ret * 1 : ret;
};

const transformResponse = (res) => {
  /* eslint-disable no-param-reassign */
  if (res && res.file) {
    const tracks = Array.isArray(res.file.track) ? res.file.track : [res.file.track];
    res.file.track = tracks.map(track => mapValues(track, mapValue));
  }
  return res;
};

export default function parse(buffer, callback = () => {}) {
  xmlParseString(buffer, {
    attrNameProcessors: [name => `_${name}`],
    explicitArray: false,
    explicitRoot: false,
    mergeAttrs: true,
    normalizeTags: true,
    tagNameProcessors: [camelCase]
  }, (err, obj) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, transformResponse(obj));
  });
}

function exec(mediaPath, callback = () => {}) {
  const mediainfo = childProcess.spawn('mediainfo', ['--Full', '--Output=XML', mediaPath]);
  let output = '';
  mediainfo.stdout.on('data', (data) => { output += data.toString('utf8'); });
  mediainfo.on('close', () => parse(output, callback));
}

export {parse, exec};
