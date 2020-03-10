module.exports = {
  name: 'meerkat-recordings',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/meerkat-recordings',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
