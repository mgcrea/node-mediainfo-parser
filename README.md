# MediaInfo Parser

[![project status](https://img.shields.io/badge/status-stable-green.svg?style=flat)](https://github.com/mgcrea/node-mediainfo-parser) [![license](https://img.shields.io/github/license/mgcrea/node-mediainfo-parser.svg?style=flat)](https://tldrlegal.com/license/mit-license) [![build status](http://img.shields.io/travis/mgcrea/node-mediainfo-parser/master.svg?style=flat)](http://travis-ci.org/mgcrea/node-mediainfo-parser) [![dependencies status](https://img.shields.io/david/mgcrea/node-mediainfo-parser.svg?style=flat)](https://david-dm.org/mgcrea/node-mediainfo-parser) [![devDependencies status](https://img.shields.io/david/dev/mgcrea/node-mediainfo-parser.svg?style=flat)](https://david-dm.org/mgcrea/node-mediainfo-parser#info=devDependencies) [![coverage status](http://img.shields.io/codeclimate/coverage/github/mgcrea/node-mediainfo-parser.svg?style=flat)](https://codeclimate.com/github/mgcrea/node-mediainfo-parser) [![climate status](https://img.shields.io/codeclimate/github/mgcrea/node-mediainfo-parser.svg?style=flat)](https://codeclimate.com/github/mgcrea/node-mediainfo-parser)

Parses [MediaInfo](https://mediaarea.net/en/MediaInfo) output with Javascript!

## Usage

### Quickstart

1. You can directly process a file path

    ```js
    import {exec as mediainfoExec} from 'mediainfo-parser';

    const mediapath = '~/Downloads/big_buck_bunny_1080p_h264.mov';
    mediainfoExec(mediapath, (err, obj) => {
      console.log(obj);
    })
    ```

1. You can also manually parse output (currently, only `XML` is supported)

    ```js
    import {exec} from 'child_process';
    import {parse as mediainfoParse} from 'mediainfo-parser';

    const mediapath = '~/Downloads/big_buck_bunny_1080p_h264.mov';
    exec(`mediainfo --Full --Output=XML "${mediapath}"`, (stderr, stdout) => {
      mediainfoParser(stdout, (err, obj) => {
        console.log(obj);
      });
    })
    ```

### Output

```js
{
  "_version": "0.1",
  "_ref": "big_buck_bunny_1080p_h264.mov",
  "file": {
    "track": [
      {
        "_type": "General",
        "count": 323,
        "countOfStreamOfThisKind": 1,
        "kindOfStream": "General",
        "streamIdentifier": 0,
        "countOfVideoStreams": 1,
        "countOfAudioStreams": 1,
        "othercount": 1,
        "videoFormatList": "AVC",
        "videoFormatWithhintList": "AVC",
        "codecsVideo": "AVC",
        "videoLanguageList": "English",
        "audioFormatList": "AAC",
        "audioFormatWithhintList": "AAC",
        "audioCodecs": "AAC LC",
        "audioLanguageList": "English",
        "otherFormatList": "QuickTime TC",
        "otherFormatWithhintList": "QuickTime TC",
        "otherLanguageList": "English",
        "completeName": "big_buck_bunny_1080p_h264.mov",
        "fileName": "big_buck_bunny_1080p_h264",
        "fileExtension": "mov",
        "format": "MPEG-4",
        "formatExtensionsUsuallyUsed": "mp4 m4v m4a m4b m4p 3gpp 3gp 3gpp2 3g2 k3g jpm jpx mqv ismv isma f4v",
        "commercialName": "MPEG-4",
        "formatProfile": "QuickTime",
        "internetMediaType": "video/mp4",
        "codecId": "qt  ",
        "codecIdUrl": "http://www.apple.com/quicktime/download/standalone.html",
        "codecidVersion": 2005.03,
        "codecidCompatible": "qt  ",
        "codec": "MPEG-4",
        "codecExtensionsUsuallyUsed": "mp4 m4v m4a m4b m4p 3gpp 3gp 3gpp2 3g2 k3g jpm jpx mqv ismv isma f4v",
        "fileSize": 725106140,
        "duration": 596462,
        "overallBitRate": 9725429,
        "frameRate": 24,
        "frameCount": 14315,
        "streamSize": 395728,
        "proportionOfThisStream": 0.00055,
        "headersize": 394718,
        "datasize": 724711422,
        "footersize": 0,
        "isstreamable": "Yes",
        "encodedDate": "UTC 2008-05-27 18:40:35",
        "taggedDate": "UTC 2008-05-27 18:43:05",
        "fileLastModificationDate": "UTC 2016-04-14 10:10:58",
        "fileLastModificationDateLocal": "2016-04-14 12:10:58",
        "writingLibrary": "Apple QuickTime 7.4.1",
        "encodedLibraryName": "Apple QuickTime",
        "encodedLibraryVersion": "7.4.1",
        "comapplequicktimeplayermovieaudiomute": "(Binary)"
      },
      {
        "_type": "Video",
        "count": 334,
        "countOfStreamOfThisKind": 1,
        "kindOfStream": "Video",
        "streamIdentifier": 0,
        "streamorder": 0,
        "id": 1,
        "format": "AVC",
        "formatInfo": "Advanced Video Codec",
        "formatUrl": "http://developers.videolan.org/x264.html",
        "commercialName": "AVC",
        "formatProfile": "Main@L4.1",
        "formatSettings": "2 Ref Frames",
        "formatSettingsCabac": "No",
        "formatSettingsReframes": 2,
        "formatSettingsGop": "M=2, N=24",
        "internetMediaType": "video/H264",
        "codecId": "avc1",
        "codecIdInfo": "Advanced Video Coding",
        "codecIdUrl": "http://www.apple.com/quicktime/download/standalone.html",
        "codec": "AVC",
        "codecFamily": "AVC",
        "codecInfo": "Advanced Video Codec",
        "codecUrl": "http://developers.videolan.org/x264.html",
        "codecCc": "avc1",
        "codecProfile": "Main@L4.1",
        "codecSettings": "2 Ref Frames",
        "codecSettingsCabac": "No",
        "codecSettingsRefframes": 2,
        "duration": 596458,
        "bitRate": 9282573,
        "width": 1920,
        "height": 1080,
        "storedHeight": 1088,
        "sampledWidth": 1920,
        "sampledHeight": 1080,
        "pixelAspectRatio": 1,
        "displayAspectRatio": 1.778,
        "rotation": 0,
        "frameRateMode": "CFR",
        "frameRate": 24,
        "frameCount": 14315,
        "resolution": 8,
        "colorimetry": "4:2:0",
        "colorSpace": "YUV",
        "chromaSubsampling": "4:2:0",
        "bitDepth": 8,
        "scanType": "Progressive",
        "interlacement": "PPF",
        "bitsPixelFrame": 0.187,
        "delay": 0,
        "delaySettings": "DropFrame=No / 24HourMax=No / IsVisual=No",
        "delayDropframe": "No",
        "delayOrigin": "Container",
        "streamSize": 692083520,
        "proportionOfThisStream": 0.95446,
        "language": "en",
        "encodedDate": "UTC 2008-04-21 20:24:31",
        "taggedDate": "UTC 2008-05-27 18:43:05",
        "colorRange": "Limited",
        "colourDescriptionPresent": "Yes",
        "colorPrimaries": "BT.709",
        "transferCharacteristics": "BT.709",
        "matrixCoefficients": "BT.709"
      },
      {
        "_type": "Audio",
        "count": 272,
        "countOfStreamOfThisKind": 1,
        "kindOfStream": "Audio",
        "streamIdentifier": 0,
        "streamorder": 2,
        "id": 3,
        "format": "AAC",
        "formatInfo": "Advanced Audio Codec",
        "commercialName": "AAC",
        "formatProfile": "LC",
        "codecId": 40,
        "codec": "AAC LC",
        "codecFamily": "AAC",
        "codecCc": 40,
        "duration": 596462,
        "sourceDuration": 596480,
        "bitRateMode": "CBR",
        "bitRate": 448000,
        "channelS": 6,
        "channelPositions": "Front: L C R, Side: L R, LFE",
        "channellayout": "C L R Ls Rs LFE",
        "samplesPerFrame": 1024,
        "samplingRate": 48000,
        "samplesCount": 28630176,
        "frameRate": 46.875,
        "frameCount": 27959,
        "sourceFrameCount": 27960,
        "compressionMode": "Lossy",
        "delay": 0,
        "delayDropframe": "No",
        "delayOrigin": "Container",
        "delayRelativeToVideo": 0,
        "video0Delay": 0,
        "streamSize": 32626892,
        "proportionOfThisStream": 0.045,
        "sourceStreamSize": 32627874,
        "sourceStreamsizeProportion": 0.045,
        "language": "en",
        "encodedDate": "UTC 2008-05-27 18:40:12",
        "taggedDate": "UTC 2008-05-27 18:43:05"
      },
      {
        "_type": "Other",
        "count": 78,
        "countOfStreamOfThisKind": 1,
        "kindOfStream": "Other",
        "streamIdentifier": 0,
        "streamorder": 1,
        "id": 2,
        "type": "Time code",
        "format": "QuickTime TC",
        "commercialName": "QuickTime TC",
        "duration": 596458,
        "timeCodeOfFirstFrame": "00:00:00:00",
        "timeCodeStriped": "Yes",
        "language": "en",
        "encodedDate": "UTC 2008-04-21 20:24:31",
        "taggedDate": "UTC 2008-05-27 18:43:05"
      }
    ]
  }
}

```

### Available scripts

| **Script** | **Description** |
|----------|-------|
| start | Alias of test:watch |
| test | Run mocha unit tests |
| test:watch | Run and watch mocha unit tests |
| lint | Run eslint static tests |
| compile | Compile the library |
| compile:watch | Compile and watch the library |


## Authors

**Olivier Louvignes**

+ http://olouv.com
+ http://github.com/mgcrea


## License

```
The MIT License

Copyright (c) 2016 Olivier Louvignes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
