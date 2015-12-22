
Package.describe({
  name    : 'semantic:ui-button',
  summary : 'Semantic UI - Button: Single component release',
  version : '2.1.7',
  git     : 'git://github.com/Semantic-Org/UI-Button.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'button.css'
  ], 'client');
});
